'use client'

import { useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LiveReports from '@/components/LiveReports'
import AnimatedScrollArrow from '@/components/AnimatedScrollArrow'
import TopCarousel from '@/components/TopCarousel'
import AISpeedSection from '@/components/AISpeedSection'
import InvestmentStages from '@/components/InvestmentStages'
import FAQSection from '@/components/FAQSection'
import InvestCTA from '@/components/InvestCTA'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function Home() {
    useEffect(() => {
    let isScrolling = false

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) {
        e.preventDefault()
        return
      }

      const heroSection = document.getElementById('hero-section')
      const mainContent = document.getElementById('main-content')
      const scrollArrow = document.querySelector('.scroll-arrow')
      
      if (!heroSection || !mainContent) return

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
      const currentScrollY = window.scrollY
      const viewportHeight = window.innerHeight

      // Calculate pause point (slightly below scroll arrow at bottom of window)
      const scrollArrowBottom = scrollArrow ? scrollArrow.getBoundingClientRect().bottom + currentScrollY : heroBottom - 100
      const pausePoint = scrollArrowBottom + 30

      // Define scroll zones with tighter detection
      const currentPosition = currentScrollY + viewportHeight
      const pauseZoneStart = pausePoint - 30
      const pauseZoneEnd = pausePoint + 30
      const isInPauseZone = currentPosition >= pauseZoneStart && currentPosition <= pauseZoneEnd

      // Check if we're below the pause point (for upward scroll trigger)
      const isBelowPausePoint = currentPosition > pausePoint + 150

      // Debug logging
      console.log('Scroll Debug:', {
        currentPosition,
        pausePoint,
        isInPauseZone,
        isBelowPausePoint,
        deltaY: e.deltaY,
        isScrolling
      })

      // Prevent scrolling past pause point unless aggressive (only when near pause point)
      if (currentPosition >= pausePoint && currentPosition <= pausePoint + 100 && e.deltaY > 0) {
        // Only allow scroll if it's a very aggressive scroll (large delta)
        if (Math.abs(e.deltaY) > 60) {
          isScrolling = true
          
                  // Calculate position above the main content (different for mobile)
        const mainContentTop = mainContent.offsetTop
        const isMobile = window.innerWidth < 768 // md breakpoint
        
        let targetPosition: number
        
        if (isMobile) {
          // On mobile, position the middle of the gradient image at the top of the window
          const gradientImage = document.querySelector('img[src="/images/full_gradient.svg"]') as HTMLImageElement
          if (gradientImage) {
            const gradientRect = gradientImage.getBoundingClientRect()
            const gradientTop = gradientImage.offsetTop
            const gradientHeight = gradientRect.height
            const gradientMiddle = gradientTop + (gradientHeight / 2)
            targetPosition = gradientMiddle
          } else {
            // Fallback if image not found
            targetPosition = mainContentTop - 100
          }
        } else {
          // Desktop behavior unchanged
          const offset = viewportHeight * 0.15
          targetPosition = mainContentTop - offset
        }
          
          // Jump to position above main content (25vh on mobile, 15vh on desktop)
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })

          setTimeout(() => {
            isScrolling = false
          }, 1000)
        } else {
          e.preventDefault()
          // Prevent scroll - user needs to scroll more aggressively
        }
      }
      // First scroll: reach pause point
      else if (isInPauseZone && e.deltaY > 0) {
        e.preventDefault()
        isScrolling = true
        
        // Scroll to pause point
        window.scrollTo({
          top: pausePoint - viewportHeight,
          behavior: 'smooth'
        })

        setTimeout(() => {
          isScrolling = false
        }, 800)
      }
      // Check if we're at the top of TopCarousel (for upward scroll pause)
      const mainContentTop = mainContent.offsetTop
      const carouselTopZoneStart = mainContentTop - 30
      const carouselTopZoneEnd = mainContentTop + 30
      const isAtCarouselTop = currentPosition >= carouselTopZoneStart && currentPosition <= carouselTopZoneEnd

      // Only trigger upward jump when at the very top of TopCarousel
      if (isAtCarouselTop && e.deltaY < 0) {
        // Only allow scroll if it's a very aggressive scroll (large delta)
        if (Math.abs(e.deltaY) > 80) {
          e.preventDefault()
          isScrolling = true
          
          // Jump back to pause point
          window.scrollTo({
            top: pausePoint - viewportHeight,
            behavior: 'smooth'
          })

          setTimeout(() => {
            isScrolling = false
          }, 800)
        } else {
          e.preventDefault()
          // Prevent scroll - user needs to scroll more aggressively
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <main className="bg-white relative">
      <div className="pt-2">
        <Header />
      </div>
      
      {/* Original Hero Section */}
      <div id="hero-section" className="relative min-h-[80vh] sm:min-h-screen flex flex-col z-20">
        <Hero />
        <div className="relative flex-1 flex flex-col justify-end">
          <div className="flex justify-end pr-8 relative z-10 pb-4 sm:pt-0 sm:pb-0 pt-8 sm:pt-0">
            <LiveReports />
          </div>
          <div className="flex justify-start sm:justify-center relative z-10 pb-4 sm:pb-0 pl-8 sm:pl-0">
            <AnimatedScrollArrow />
          </div>
          <div className="h-2 sm:h-8 md:h-10 lg:h-11 xl:h-12 relative z-10"></div>
        </div>
      </div>

      {/* Gradient starting where Hero ends - updated to fix white line */}
      <div className="relative -mt-[12rem] lg:-mt-[16rem] xl:-mt-[20rem] z-10">
        <div className="relative w-full overflow-hidden">
          <div className="pt-20 pb-12 sm:pt-8 sm:pb-8">
            <Image 
              src="/images/full_gradient.svg" 
              alt="Gradient" 
              width={1920} 
              height={300} 
              className="w-full h-auto min-h-[200px] object-cover" 
              priority
            />
          </div>
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none"></div>
          <div className="absolute inset-0 bg-white/20 sm:bg-white/40 pointer-events-none"></div>
        </div>
      </div>

      {/* New Landing Page Sections */}
      <div id="main-content" className="-mt-24 sm:-mt-32 md:-mt-40 lg:-mt-48 xl:-mt-48 relative z-20 bg-transparent">
        <div className="pt-20 sm:pt-16">
          <TopCarousel />
        </div>
        <div style={{ marginLeft: '9%', marginRight: '9%' }}>
          <AISpeedSection />
          <InvestmentStages />
          <FAQSection />
          <InvestCTA />
        </div>
      </div>
      
      {/* Gradient above Footer */}
      <div className="relative w-full">
        <Image 
          src="/images/gradient.svg" 
          alt="Gradient" 
          width={1920} 
          height={400} 
          className="w-full h-auto object-contain" 
          priority
        />
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white/60 via-white/30 to-transparent pointer-events-none"></div>
      </div>
      
      <Footer />
    </main>
  )
}
