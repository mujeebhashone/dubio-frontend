import Image from 'next/image'
import React from 'react'
import icon1 from '@/images/icon1.png'
import icon2 from '@/images/icon2.png'
import icon3 from '@/images/icon3.png'
import icon4 from '@/images/icon4.png'

const BuiltInSection = () => {
  return (
    <div className='max-w-[1920px] mx-auto py-20'>
        <div className='max-w-[80%] mx-auto'>
            {/* Main Heading */}
            <div className='text-center mb-16'>
                <h2 className='text-white text-5xl font-bold mb-6'>
                    Built-In Resilience — At a Glance
                </h2>
                <p className='text-white/80 text-xl font-normal max-w-2xl mx-auto'>
                    Smart infrastructure to keep creators stress-free, even on viral days
                </p>
            </div>
            
            {/* Features Grid */}
            <div className='grid grid-cols-4 gap-8'>
                {/* End-to-End Dubbing */}
                <div className='bg-[#1a1630] backdrop-blur-sm rounded-2xl p-8 text-center'>
                    {/* Headphones Icon */}
                    <div className='w-16 h-16 mx-auto mb-6 flex items-center justify-center'>
                       <Image src={icon1} alt='upload' width={50} height={50} />
                    </div>
                    <h3 className='text-white text-xl font-bold mb-4'>End-to-End Dubbing</h3>
                    <p className='text-white/70 text-sm font-normal leading-relaxed'>
                        Smart infrastructure to keep creators stress-free, even on viral days
                    </p>
                </div>
                
                {/* Upload Size Handling */}
                <div className='bg-[#1a1630] backdrop-blur-sm rounded-2xl p-8 text-center'>
                    {/* Upload Icon */}
                    <div className='w-16 h-16 mx-auto mb-6 flex items-center justify-center'>
                       <Image src={icon2} alt='upload' width={50} height={50} />
                    </div>
                    <h3 className='text-white text-xl font-bold mb-4'>Upload Size Handling</h3>
                    <p className='text-white/70 text-sm font-normal leading-relaxed'>
                        4GB+ Files · Chunked Upload · S3 Multipart
                    </p>
                </div>
                
                {/* Voice Clone Ethics */}
                <div className='bg-[#1a1630] backdrop-blur-sm rounded-2xl p-8 text-center'>
                    {/* Microphone Icon */}
                    <div className='w-16 h-16 mx-auto mb-6 flex items-center justify-center'>
                       <Image src={icon3} alt='upload' width={50} height={50} />
                    </div>
                    <h3 className='text-white text-xl font-bold mb-4'>Voice Clone Ethics</h3>
                    <p className='text-white/70 text-sm font-normal leading-relaxed'>
                        Consent-Only · 60s Max Sample · Encrypted + Erasable
                    </p>
                </div>
                
                {/* Viral Load Spikes */}
                <div className='bg-[#1a1630] backdrop-blur-sm rounded-2xl p-8 text-center'>
                    {/* Chart Icon */}
                    <div className='w-16 h-16 mx-auto mb-6 flex items-center justify-center'>
                    <Image src={icon4} alt='upload' width={50} height={50} />
                    </div>
                    <h3 className='text-white text-xl font-bold mb-4'>Viral Load Spikes</h3>
                    <p className='text-white/70 text-sm font-normal leading-relaxed'>
                        Autoscaling · Spot Instances · Budget Capping
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BuiltInSection