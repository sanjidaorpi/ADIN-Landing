'use client'

import { motion } from 'framer-motion'

const AnimatedWaveText = ({ text, className = '' }: { text: string, className?: string }) => {
  const letters = text.split('')

  const sweepVariants = {
    initial: { color: '#B19AD9' }, // All letters start with the lighter purple
    animate: (i: number) => ({
      color: [
        '#B19AD9', '#A97DF5', '#B19AD9', // Forward sweep
        '#B19AD9', '#A97DF5', '#B19AD9'  // Backward sweep
      ],
      transition: {
        duration: 3.5,
        ease: "linear" as const,
        repeat: Infinity,
        delay: i * 0.06,
        repeatDelay: 0.45,
      }
    })
  }

  return (
    <div className={`flex ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={sweepVariants}
          initial="initial"
          animate="animate"
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </div>
  )
}

const InvestCTA = () => {
  return (
    <section className="bg-white flex items-center justify-center pt-8 pb-8 -mt-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-6">
            Invest with ADIN.
          </h2>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4 sm:space-y-6">
          {/* Unified CTA Button */}
          <div className="flex items-center justify-center">
            <div className="flex rounded-full border border-[#F3EAFD] overflow-hidden">
              {/* Left Segment - Early Access Text */}
              <div className="px-3 py-2 sm:px-6 sm:py-4 flex items-center rounded-l-full">
                <AnimatedWaveText 
                  text="Early access for Tribute Labs Members"
                  className="text-xs sm:text-sm md:text-base font-light"
                />
              </div>
              
              {/* Right Segment - Get Started Button */}
              <a 
                href="/get-started" 
                className="bg-[#A97DF5] hover:bg-purple-500 text-white px-3 py-2 mx-0.5 my-0.5 sm:px-6 sm:py-3 sm:mx-1 sm:my-1 flex items-center transition-colors font-light text-xs sm:text-sm md:text-base rounded-full"
              >
                <span>Get Started</span><span className="ml-1 sm:ml-2 flex items-center"><ion-icon name="arrow-forward"></ion-icon></span>
              </a>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="text-center whitespace-nowrap">
            <span className="text-[#B3B3B3] text-xs sm:text-sm md:text-base">
              Not a Tribute Labs Member?{' '}
            </span>
            <a 
              href="/waitlist" 
              className="text-[#A97DF5] hover:text-purple-700 font-light text-xs sm:text-sm md:text-base transition-colors inline-flex items-center"
            >
              Join the Waitlist <ion-icon name="arrow-forward" className="ml-1"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvestCTA 