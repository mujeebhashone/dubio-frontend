'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import dubbing from '@/images/bgwave.png'
import dubbing1 from '@/images/bgwaveright.png'

const FutureOfVoiceCards = () => {
  const [visibleCards, setVisibleCards] = useState([false, false, false])
  const cardRefs = [useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-100px 0px -100px 0px'
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        const cardIndex = cardRefs.findIndex(ref => ref.current === entry.target)
        if (cardIndex !== -1) {
          setVisibleCards(prev => {
            const newVisible = [...prev]
            newVisible[cardIndex] = entry.isIntersecting
            return newVisible
          })
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    cardRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => {
      cardRefs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current)
      })
    }
  }, [])

  const cardData = [
    {
      title: "AI Voice Cloning",
      description: "Clone your voice with just 60 seconds of audio. Perfect replication with ethical safeguards.",
      icon: "🎤",
      side: "left"
    },
    {
      title: "Real-time Dubbing",
      description: "Instant video dubbing in multiple languages while preserving your unique voice characteristics.",
      icon: "🎬",
      side: "right"
    },
    {
      title: "Lip-Sync Technology",
      description: "Advanced AI ensures perfect lip synchronization across all languages and accents.",
      icon: "👄",
      side: "left"
    }
  ]

  return (
    <div className='max-w-[1920px] mx-auto py-20 relative'>
        <div className='max-w-[100%] mx-auto relative z-10'>
            {/* Section Header */}
            <div className='text-center mb-16'>
                <h2 className='text-white text-5xl font-bold mb-6'>
                    The Future of Voice Technology
                </h2>
                <p className='text-white/80 text-xl font-normal max-w-3xl mx-auto'>
                    Revolutionary AI-powered dubbing that preserves your unique voice across any language
                </p>
            </div>

            {/* Cards Container */}
            <div className='space-y-32'>
                {cardData.map((card, index) => (
                    <div 
                        key={index}
                        ref={cardRefs[index]}
                        className='grid grid-cols-2 gap-16 items-center min-h-[400px] relative px-40'
                    >
                        {/* Background Wave Image for each section */}
                        <div className='absolute inset-0 -z-10 overflow-hidden'>
                            {card.side === 'left' ? (
                                <div className='absolute -left-32 top-1/2 -translate-y-1/2'>
                                    <Image 
                                        src={dubbing} 
                                        alt='background wave' 
                                        width={1200} 
                                        height={400} 
                                        
                                    />
                                </div>
                            ) : (
                                <div className='absolute -right-32 top-1/2 -translate-y-1/2'>
                                    <Image 
                                        src={dubbing1} 
                                        alt='background wave' 
                                        width={1200} 
                                        height={600} 
                                        className='opacity-30'
                                    />
                                </div>
                            )}
                        </div>

                        {/* Left Side Content */}
                        <div className={`${
                            card.side === 'left' ? 'order-1' : 'order-2'
                        } transition-all duration-1000 ease-out ${
                            visibleCards[index] 
                                ? 'transform translate-x-0 opacity-100' 
                                : card.side === 'left' 
                                    ? 'transform -translate-x-full opacity-0'
                                    : 'transform translate-x-full opacity-0'
                        } relative z-20`}>
                            <div className='bg-gradient-to-br from-[#2A1F3A] to-[#1A1630] p-8 rounded-3xl border border-[#7C3AED]/20 backdrop-blur-sm hover:border-[#7C3AED]/50 transition-all duration-300'>
                                <div className='text-6xl mb-6'>{card.icon}</div>
                                <h3 className='text-white text-3xl font-bold mb-4'>
                                    {card.title}
                                </h3>
                                <p className='text-white/70 text-lg leading-relaxed'>
                                    {card.description}
                                </p>
                                
                                {/* Feature List */}
                                <div className='mt-6 space-y-3'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-2 h-2 bg-[#7C3AED] rounded-full'></div>
                                        <span className='text-white/60 text-sm'>Enterprise-grade security</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-2 h-2 bg-[#7C3AED] rounded-full'></div>
                                        <span className='text-white/60 text-sm'>99.9% accuracy rate</span>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-2 h-2 bg-[#7C3AED] rounded-full'></div>
                                        <span className='text-white/60 text-sm'>Real-time processing</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side Visual */}
                        <div className={`${
                            card.side === 'left' ? 'order-2' : 'order-1'
                        } transition-all duration-1000 ease-out delay-200 ${
                            visibleCards[index] 
                                ? 'transform translate-x-0 opacity-100' 
                                : card.side === 'left' 
                                    ? 'transform translate-x-full opacity-0'
                                    : 'transform -translate-x-full opacity-0'
                        } relative z-20`}>
                            <div className='relative'>
                                {/* Main Visual Container */}
                                <div className='bg-gradient-to-br from-[#7C3AED]/20 to-[#2A1F3A]/50 rounded-3xl p-8 border border-[#7C3AED]/30 backdrop-blur-sm min-h-[300px] flex items-center justify-center'>
                                    {/* Animated Background Pattern */}
                                    <div className='absolute inset-0 opacity-10'>
                                        <div className='absolute inset-0' 
                                             style={{
                                                 backgroundImage: `
                                                     radial-gradient(circle at 25% 25%, rgba(124, 58, 237, 0.3) 0%, transparent 50%),
                                                     radial-gradient(circle at 75% 75%, rgba(124, 58, 237, 0.2) 0%, transparent 50%)
                                                 `,
                                             }}
                                        />
                                    </div>

                                    {/* Center Content */}
                                    <div className='relative z-10 text-center'>
                                        <div className='text-8xl mb-4 animate-pulse'>{card.icon}</div>
                                        <div className='flex justify-center items-center gap-2 mb-4'>
                                            {[...Array(5)].map((_, i) => (
                                                <div 
                                                    key={i}
                                                    className='w-1 bg-[#7C3AED] rounded-full animate-pulse'
                                                    style={{ 
                                                        height: `${Math.random() * 30 + 10}px`,
                                                        animationDelay: `${i * 200}ms`,
                                                        animationDuration: '1.5s'
                                                    }}
                                                />
                                            ))}
                                        </div>
                                        <p className='text-white/50 text-sm'>AI Processing...</p>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className='absolute -top-4 -right-4 w-8 h-8 bg-[#7C3AED]/30 rounded-full animate-ping'></div>
                                <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-[#7C3AED]/20 rounded-full animate-ping' style={{animationDelay: '1s'}}></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className='text-center mt-20'>
                <div className={`transition-all duration-1000 ease-out delay-500 ${
                    visibleCards[2] 
                        ? 'transform translate-y-0 opacity-100' 
                        : 'transform translate-y-10 opacity-0'
                }`}>
                    <button className='bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7C3AED]/25'>
                        Experience the Future
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FutureOfVoiceCards