import Image from 'next/image'
import React from 'react'
import step2 from '@/images/section2.png'
import step1 from '@/images/section1.png'
import step3 from '@/images/section3.png'


const HowItsWork = () => {
  return (
    <div className='max-w-[1920px] mx-auto'>
        <div className='max-w-[80%] mx-auto'>
            <h2 className='text-white text-5xl font-bold text-center mb-16'>How It Works</h2>
            
            <div className='grid grid-cols-3 gap-16'>
                {/* Step 1 */}
                <div className='flex flex-col items-center justify-between'>
                    <div className='w-16 h-16 bg-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-6'>
                        <span className='text-white text-2xl font-bold'>1</span>
                    </div>
                    <div className='flex flex-col items-center'>
                    <h3 className='text-white text-2xl font-bold mb-4'>Paste Your Video URL</h3>
                    <p className='text-white font-normal'>Paste your YouTube link and dub it now.</p>
                   
                    </div>
                    <Image src={step2} alt='step1' width={414} height={358}/>
                 
                </div>
                
                {/* Step 2 */}
                <div className='flex flex-col items-center justify-between gap-3'>
                    <div className='w-16 h-16 bg-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-6'>
                        <span className='text-white text-2xl font-bold'>2</span>
                    </div>
                    <div className='flex flex-col items-center'>
                    <h3 className='text-white text-2xl font-bold mb-4'>Choose Languages</h3>
                    <p className='text-white font-normal text-center'>Select your target language(s), your cloned voice, and subtitle format.</p>
                    </div>
                   
                    <Image src={step1} alt='step2' width={414} height={358} className='' />
                
                </div>
                
                {/* Step 3 */}
                <div className='flex flex-col items-center justify-between gap-3'>
                    <div className='w-16 h-16 bg-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-6'>
                        <span className='text-white text-2xl font-bold'>3</span>
                    </div>
                    <div className='flex flex-col items-center'>
                    <h3 className='text-white text-2xl font-bold mb-4'>Get Magic Back</h3>
                    <p className='text-white font-normal text-center'>Get 1080p MP4 + .srt / .vtt files — optimized for every platform.</p>
                    </div>
                    <Image src={step3} alt='step3' width={414} height={358} className='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItsWork