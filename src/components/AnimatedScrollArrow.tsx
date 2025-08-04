'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const AnimatedScrollArrow = () => {
  const [isAtBottom, setIsAtBottom] = useState(false)

  const bounceVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  }

  useEffect(() => {
    const checkScrollPosition = () => {
      const heroSection = document.getElementById('hero-section')
      if (!heroSection) return

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
      const currentScrollY = window.scrollY
      const viewportHeight = window.innerHeight

      // Check if we're at the bottom of the hero section (within 5px tolerance)
      const isAtHeroBottom = Math.abs((currentScrollY + viewportHeight) - heroBottom) <= 5
      setIsAtBottom(isAtHeroBottom)
    }

    window.addEventListener('scroll', checkScrollPosition)
    return () => window.removeEventListener('scroll', checkScrollPosition)
  }, [])

  const scrollToMainContent = () => {
    const mainContent = document.getElementById('main-content')
    if (mainContent) {
      // Calculate position 15vh above the main content
      const mainContentTop = mainContent.offsetTop
      const viewportHeight = window.innerHeight
      const offset = viewportHeight * 0.15 // 15vh
      const targetPosition = mainContentTop - offset
      
      // Jump to 15vh above main content
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.div
      variants={bounceVariants}
      initial="initial"
      animate="animate"
      className={`scroll-arrow flex justify-start sm:justify-center relative z-10 cursor-pointer transition-all duration-300 ${
        isAtBottom ? 'scale-110' : ''
      }`}
      onClick={scrollToMainContent}
    >
      <Image 
        src="/images/tripple_down_arrow.svg" 
        alt="Scroll down" 
        width={28}
        height={28}
        className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 transition-all duration-300 ${
          isAtBottom ? 'opacity-100' : 'opacity-60 hover:opacity-80'
        }`}
      />
    </motion.div>
  )
}

export default AnimatedScrollArrow 