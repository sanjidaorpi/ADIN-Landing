import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'adin-yellow': '#FFD700',
        'adin-orange': '#FF6B35',
        'adin-green': '#4CAF50',
        'adin-blue': '#2196F3',
        'adin-purple': '#A97DF5',
        'adin-light-purple': '#E8D7FF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spotlight-center': 'spotlightCenter 10s linear infinite',
        'spotlight-effect': 'spotlightEffect 2s linear infinite',
      },
      keyframes: {
        spotlightCenter: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
        spotlightEffect: {
          '0%, 15%': { 
            opacity: '0.2', 
            transform: 'scale(0.8)', 
            filter: 'blur(1px)',
            fontWeight: 'normal'
          },
          '15%, 85%': { 
            opacity: '1', 
            transform: 'scale(1.2)', 
            filter: 'blur(0px)',
            fontWeight: 'bold'
          },
          '85%, 100%': { 
            opacity: '0.2', 
            transform: 'scale(0.8)', 
            filter: 'blur(1px)',
            fontWeight: 'normal'
          },
        },
      },
    },
  },
  plugins: [],
}
export default config 