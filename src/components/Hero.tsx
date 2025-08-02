'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedWaveText from './AnimatedWaveText'

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [maxWidth, setMaxWidth] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const [isFading, setIsFading] = useState(false)
  const [centerWordOpacity, setCenterWordOpacity] = useState(1)
  const wordsContainerRef = useRef<HTMLDivElement>(null)

  const keywords = [
    { text: '3d printing', color: 'text-[#FFD17A]' },
    { text: 'blockchain', color: 'text-[#5ED890]' },
    { text: 'biotech', color: 'text-[#A97DF5]' },
    { text: 'creative tools', color: 'text-[#FF9066]' },
    { text: 'medical tools', color: 'text-[#FFD17A]' },
  ]

  // Rotate activeIndex every 2 seconds with fade in/out animation
  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out the current center word first
      setCenterWordOpacity(0.6)
      setTimeout(() => setCenterWordOpacity(0.3), 50)
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % keywords.length)
        // Gradually fade the new center word back to full opacity
        setTimeout(() => setCenterWordOpacity(0.6), 50)
        setTimeout(() => setCenterWordOpacity(1), 100)
      }, 50) // Fade out for 50ms before changing word
    }, 1500) // Reduced interval for less stall time at full color
    return () => clearInterval(interval)
  }, [keywords.length])

  useEffect(() => {
    if (!wordsContainerRef.current) return;

    const tempSpan = document.createElement('span');
    tempSpan.className =
      'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium whitespace-nowrap'; // match real classes
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.position = 'absolute';
    document.body.appendChild(tempSpan);

    let widest = 0;
    keywords.forEach((word) => {
      tempSpan.textContent = word.text;
      widest = Math.max(widest, tempSpan.offsetWidth);
    });

    document.body.removeChild(tempSpan);

    // Add gap space (space-x-12 = 3rem = 48px) for side spacing consistency
    setMaxWidth(widest + 20); // Add extra padding for longer words
  }, [keywords]);



  return (
    <section className="flex flex-col items-center justify-center text-center bg-white pt-20 sm:pt-36 md:pt-44 lg:pt-52 xl:pt-56">
      {/* Headline */}
              <div className="text-center px-8 sm:px-16 md:px-24 lg:px-32 xl:px-48" style={{ paddingTop: '5px', paddingBottom: '8px' }}>
                 <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-black leading-tight whitespace-nowrap">
           Investing in early
         </h1>
         <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-black leading-tight whitespace-nowrap">
           stage ideas building for
         </h1>
      </div>

      {/* Keywords Carousel */}
             <div className="relative flex items-center justify-center mb-1 sm:mb-3 md:mb-5 w-full pb-2 overflow-hidden">
        <motion.div
          ref={wordsContainerRef}
          className="flex items-center justify-center space-x-20"
        >
          {Array.from({ length: 5 }).map((_, index) => {
            // Calculate which word appears in this slot
            const wordIndex = (index + activeIndex) % keywords.length
            const keywordData = keywords[wordIndex]
            const isActive = index === 2 // center slot is always active

            return (
              <motion.span
                key={`${index}-${wordIndex}`}
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-center whitespace-nowrap`}
                style={{
                  opacity: isActive ? centerWordOpacity : '0.25',
                  color: keywordData.color.replace('text-[', '').replace(']', '').replace(' font-bold', ''),
                  transform: isActive ? 'scale(1.1)' : 'scale(1)',
                  width: `${maxWidth}px`, // fixed width (not min-width)
                }}
                animate={{
                  x: 0
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
              >
                {keywordData.text}
                {isActive && <span className="text-black ml-1">.</span>}
              </motion.span>
            )
          })}
        </motion.div>
      </div>

      {/* Tagline */}
      <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-[#4D4D4D] mb-2 sm:mb-10 md:mb-12 max-w-2xl font-light">
        ADIN backs teams building the future of the internet
        <br />
        focusing on Seed Rounds to Series-A.
      </p>

      {/* Call to Action Button */}
      <button className="bg-[#FCF0D1] text-black rounded-lg font-light text-base flex items-center hover:scale-105 transition-transform duration-200 shadow-lg h-8 sm:h-8 md:h-10 lg:h-11 xl:h-12 mb-2.5 sm:mb-0">
        {/* Logo Container */}
        <div className="flex-shrink-0 p-1.5 sm:p-1 md:p-1">
          <div className="relative w-8 h-6 sm:w-10 sm:h-8 md:w-12 md:h-10 lg:w-14 lg:h-11 xl:w-16 xl:h-12">
            <img
              src="/images/adin_logo.svg"
              alt="ADIN Logo"
              className="w-full h-full object-contain"
            />
            <img
              src="/images/play_button.svg"
              alt="Play Icon"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 object-contain"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 flex justify-center items-center px-0.5 sm:px-1 md:px-2 lg:px-3 xl:px-4 pr-2 sm:pr-1 md:pr-0">
          <AnimatedWaveText text="Watch the Video" className="whitespace-nowrap text-xs sm:text-xs md:text-sm lg:text-base" />
        </div>
      </button>
    </section>
  )
}

export default Hero 