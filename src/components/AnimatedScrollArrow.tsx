'use client'

import { motion } from 'framer-motion'

const AnimatedScrollArrow = () => {
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

  return (
    <motion.div
      variants={bounceVariants}
      initial="initial"
      animate="animate"
      className="flex justify-center relative z-10"
    >
      <img 
        src="/images/tripple_down_arrow.svg" 
        alt="Scroll down" 
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 opacity-60"
      />
    </motion.div>
  )
}

export default AnimatedScrollArrow 