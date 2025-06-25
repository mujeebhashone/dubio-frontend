import Image from 'next/image'
import React from 'react'
import sound from '@/images/sound.png'
import language from '@/images/countryname.png'

const VideoSection = () => {
  return (
    <div className='max-w-[1920px] mx-auto py-20 relative'>
        <div className='max-w-[80%] mx-auto'>
            <div>
                {/* Main Video Container */}
                <div className='aspect-[16/9] bg-[#1A1630] rounded-3xl overflow-hidden'>
                    {/* Video Player */}
                    <video 
                        className='w-full h-full object-cover'
                        controls
                        poster="/video-thumbnail.jpg"
                    >
                        <source src="/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    
                    {/* Overlay UI Elements */}
                    <div className='absolute inset-2 pointer-events-none z-10'>
                        
                        {/* Top Left - Waveform */}
                        <div className='absolute top-50 left-10 z-50'>
                           <Image src={sound} alt='video' width={291} height={60} />
                        </div>
                        
                        {/* Right Side - Language Selection Panel */}
                        <div className='absolute top-30 right-40 w-80'>
                         <Image src={language} alt='language' width={291} height={60} unoptimized/>
                        </div>
                        
                        {/* Center Dividing Line */}
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoSection