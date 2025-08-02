'use client'

import { motion } from 'framer-motion'

interface AnimatedWaveTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

const AnimatedWaveText = ({ text, className = '', style }: AnimatedWaveTextProps) => {
  const letters = text.split('')

  const sweepVariants = {
    initial: { color: '#B3B3B3' }, // All letters start light gray
    animate: (i: number) => ({
      color: [
        '#B3B3B3', '#000000', '#B3B3B3', // Forward sweep
        '#B3B3B3', '#000000', '#B3B3B3'  // Backward sweep
      ],
      transition: {
        duration: 3.5, // How long the letter stays black (increased by another second)
        ease: "linear" as const, // Linear transition for a smooth sweep
        repeat: Infinity, // Loop the animation indefinitely
        delay: i * 0.06, // Stagger the start of each letter's animation
        repeatDelay: 0.45, // Short delay between bounces
      }
    })
  }

  return (
    <div className={`flex ${className}`} style={style}>
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

export default AnimatedWaveText 