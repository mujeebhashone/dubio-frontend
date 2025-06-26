import React from 'react'
import circle1 from '@/images/circle.gif'
import Image from 'next/image'
import play from '@/images/Play.gif'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import playLeft from '@/images/Playleft.png'
import playRight from '@/images/playRight.png'
import AnimatedButton from '../ui/AnimatedButton'



const HeroSection = () => {
  return (
    <div className='max-w-[1920px] mx-auto h-[100vh] flex items-center'>
        <div className='max-w-[85%] mx-auto'>
            <div className='grid grid-cols-2 gap-40 '>
                <div className='my-auto'>
                    <h1 className='text-white text-6xl font-bold'>
                    Dub Your Content into Any Language In Your Own Voice
                    </h1>
                    <p className='text-white font-normal mt-8'>Expand your audience, grow global revenue, and own your voice. Dubio lets you instantly transform your videos into any language using AI dubbing and voice cloning — all in seconds.</p>
                    
                    {/* Email Input and Join Waitlist Button */}
                    <div className='relative mt-10'>
                        <Input 
                            type="email"
                            placeholder="Enter your email address"
                            className='flex-1 relative bg-[#2A1F3A] border-[#3D2A50] text-white placeholder:text-gray-400 h-[70px] px-6 rounded-full'
                        />
                        <Button 
                            className=' absolute right-0 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent'
                        >
                        <AnimatedButton />
                        </Button>
                    </div>
                </div>
                <div className='relative w-[1010px] '>
                    <div className='absolute top-[40%] left-0'>
                        <Image src={playLeft} alt="Hero" width={230} height={100} />
                    </div>
                    <div className='absolute top-[15%] right-[32%]'>
                        <Image src={playRight} alt="Hero" width={250} height={100} />
                    </div>
                   <div>
                   <Image 
                     src={circle1} 
                     alt="AI Video Editor Animation" 
                     width={1010}
                     height={717}
                     className='-z-10 absolute -top-[420px] left-[38%] -translate-x-1/2 w-[2010px] h-[1217px] object-cover' 
                   />
                   </div>
                   <div className='w-full h-full flex justify-start items-center ml-[25%] bg-transparent'>
                    <Image src={play} alt="Play" width={250} height={250} className='bg-transparent' />
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection