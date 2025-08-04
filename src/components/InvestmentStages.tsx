'use client'

import { motion } from 'framer-motion'

const InvestmentStages = () => {
  return (
    <section className="bg-white pt-16 pb-8 sm:pt-20 sm:pb-10 md:pt-24 md:pb-12 lg:pt-28 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-left mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-6">
            <span className="block sm:hidden whitespace-nowrap">Only Early. Always Human.</span>
            <span className="hidden sm:block">Only Early.<br />Always Human.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-5xl leading-relaxed font-light">
            ADIN backs bold ideas at the beginning, where conviction matters most. We invest exclusively at the earliest stages, combining operator insight and intelligent systems to move faster, with greater focus.
          </p>
        </div>

        {/* Investment Stages Layout */}
        <div className="space-y-8">
          {/* Top Row - Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Pre-Seed Section */}
            <motion.div 
              className="relative pl-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="absolute left-0 top-0 bottom-1 w-px bg-gray-200">
                <div className="absolute top-10 left-0 right-0 h-8 bg-[#A97DF5]"></div>
              </div>
              <div className="space-y-4 -mt-1">
                <span className="text-xs text-black font-medium">Pre-Seed</span>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900">
                  Backed by Belief
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-light">
                  At pre-seed, conviction outweighs traction. ADIN provides governance capital and strategic support to founders with deep alignment and long-term thinking.
                </p>
              </div>
            </motion.div>

            {/* Seed Section */}
            <motion.div 
              className="relative pl-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="absolute left-0 top-0 bottom-1 w-px bg-gray-200">
                <div className="absolute top-10 left-0 right-0 h-8 bg-[#49C17A]"></div>
              </div>
              <div className="space-y-4 -mt-1">
                <span className="text-xs text-black font-medium">Seed</span>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900">
                  Culture-First Capital
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-light">
                  Seed-stage founders shape ADIN's future. Our community cultural context and dealflow, helping us invest in projects that align with our collective values.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row - Single Column with Same Margins */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <motion.div 
              className="relative pl-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="absolute left-0 top-0 bottom-1 w-px bg-gray-200">
                <div className="absolute top-10 left-0 right-0 h-8 bg-[#A97DF5]"></div>
              </div>
              <div className="space-y-4 -mt-1">
                <span className="text-xs text-black font-medium">A Round</span>
                <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900">
                  Early, Not Late
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-light">
                  We don't chase momentum—we help create it. ADIN's A-round capital supports early traction and sharp execution, before the noise of growth-stage hype.
                </p>
              </div>
            </motion.div>
            <div></div> {/* Empty column to maintain grid structure */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvestmentStages 