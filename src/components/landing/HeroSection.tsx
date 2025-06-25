import React from 'react'
import circle1 from '@/images/circle.gif'
import Image from 'next/image'
import play from '@/images/play.gif'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


const HeroSection = () => {
  return (
    <div className='max-w-[1920px] mx-auto h-[100vh] flex items-center'>
        <div className='max-w-[80%] mx-auto'>
            <div className='grid grid-cols-2 gap-40'>
                <div className=''>
                    <h1 className='text-white text-6xl font-bold'>
                    Dub Your Content into Any Language In Your Own Voice
                    </h1>
                    <p className='text-white text-2xl font-normal mt-8'>Expand your audience, grow global revenue, and own your voice. Dubio lets you instantly transform your videos into any language using AI dubbing and voice cloning — all in seconds.</p>
                    
                    {/* Email Input and Join Waitlist Button */}
                    <div className='relative mt-10'>
                        <Input 
                            type="email"
                            placeholder="Enter your email address"
                            className='flex-1 relative bg-[#2A1F3A] border-[#3D2A50] text-white placeholder:text-gray-400 h-18 px-6 rounded-full'
                        />
                        <Button 
                            className='bg-[#7C3AED] hover:bg-[#6D28D9] absolute right-4 top-1/2 -translate-y-1/2 text-white px-16 h-13 rounded-full font-medium'
                        >
                            Join Waitlist
                        </Button>
                    </div>
                </div>
                <div className='relative'>
                   <Image 
                     src={circle1} 
                     alt="AI Video Editor Animation" 
                     width={1010}
                     height={717}
                     className='w-full h-full' 
                   />
                   <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                    <Image src={play} alt="Play" width={100} height={100} />
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection