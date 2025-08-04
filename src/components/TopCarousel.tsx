'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const TopCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      text: "ADIN is a global network of 12,302 humans sharing insights and knowledge as Investors, Members, & Founders."
    },
    {
      text: "Investors (Human LPs) vote on proposed deals, guiding decision-making through collective insights, and over time enabling the fine tuning of models."
    },
    {
      text: "Our team writes checks from $500k to $2 million, partnering with visionary builders in connectivity, compute, crypto, and creative economies."
    }
  ]

  const restartCarousel = () => {
    setCurrentSlide(0)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="pt-0 -mt-8 bg-transparent">
      <div className="pb-0 bg-transparent">
        <div className="max-w-3xl mx-auto px-[15%] sm:px-6 lg:px-8 text-center">
          {/* Main Text */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium text-[#86868B] leading-relaxed sm:leading-loose">
              {slides[currentSlide].text.includes('12,302 humans') ? (
                slides[currentSlide].text.split('12,302 humans').map((part, index) => (
                  index === 0 ? (
                    <span key={index}>
                      {part}<span className="text-black font-semibold">12,302 humans</span>
                    </span>
                  ) : (
                    <span key={index}>{part}</span>
                  )
                ))
              ) : slides[currentSlide].text.includes('Investors (Human LPs)') ? (
                slides[currentSlide].text.split('Investors (Human LPs)').map((part, index) => (
                  index === 0 ? (
                    <span key={index}>
                      {part}<span className="text-black font-semibold">Investors (Human LPs)</span>
                    </span>
                  ) : (
                    <span key={index}>{part}</span>
                  )
                ))
              ) : slides[currentSlide].text.includes('$500k to $2 million') ? (
                slides[currentSlide].text.split('$500k to $2 million').map((part, index) => (
                  index === 0 ? (
                    <span key={index}>
                      {part}<span className="text-black font-semibold">$500k to $2 million</span>
                    </span>
                  ) : (
                    <span key={index}>{part}</span>
                  )
                ))
              ) : (
                slides[currentSlide].text
              )}
            </h1>
          </div>

        {/* Player Container */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-3">
          {/* Play Button */}
          <button 
            onClick={restartCarousel}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#F3EAFD] flex items-center justify-center shadow-inner hover:shadow-md transition-all duration-200"
          >
            <ion-icon name="play" style={{ color: '#A97DF5', fontSize: '20px' }}></ion-icon>
          </button>

          {/* Progress Bar and Dots */}
          <div className="flex items-center bg-[#F3EAFD] px-2 sm:px-3 py-1 sm:py-1.5 rounded-full space-x-1 sm:space-x-2 shadow-inner w-24 sm:w-28 h-6 sm:h-7">
            {/* Progress Bar */}
            <div className="relative w-16 sm:w-20 h-1.5 sm:h-2 bg-[#E1D1FA] rounded-full">
              <div 
                className="absolute left-0 top-0 h-1.5 sm:h-2 bg-[#A97DF5] rounded-full transition-all duration-500" 
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              />
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center space-x-0.5 sm:space-x-1">
              <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-300 ${
                ((currentSlide + 1) / slides.length) >= 0.67 ? 'bg-[#A97DF5]' : 'bg-[#E1D1FA]'
              }`} />
              <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-300 ${
                ((currentSlide + 1) / slides.length) >= 1 ? 'bg-[#A97DF5]' : 'bg-[#E1D1FA]'
              }`} />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default TopCarousel 