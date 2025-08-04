'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const AISpeedSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const aiAgents = [
    { name: 'The Network Hunter', description: 'Find the crowd, fuel the movement.', icon: '/images/agent_yellow.svg' },
    { name: 'The Tech Oracle', description: 'Spotting tomorrow\'s breakthroughs, today.', icon: '/images/agent_red.svg' },
    { name: 'The Monopoly Maker', description: 'Backing the next market dominator.', icon: '/images/agent_blue.svg' },
    { name: 'The Unit Master', description: 'Numbers first, profits always.', icon: '/images/agent_green.svg' },
    { name: 'The Value Guy', description: 'Seeking hidden gems for lasting growth.', icon: '/images/agent_purple.svg' },
  ]

  // Infinite scroll functionality without scroll interference
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    // Always start at the beginning (card 1)
    scrollContainer.scrollLeft = 0
    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth
    let scrollPosition = 0

    const animateScroll = () => {
      // Quick sweep animation for mobile
      const isMobile = window.innerWidth < 768
      const scrollSpeed = isMobile ? 3 : 2
      scrollPosition += scrollSpeed
      
      // When reaching the end, reset to the beginning for continuous loop
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0 // Reset to the very beginning
        // Force immediate scroll to ensure it starts from the beginning
        scrollContainer.scrollLeft = 0
        return
      }
      
      scrollContainer.scrollLeft = scrollPosition
    }

    // Start animation immediately for quick sweep
    const interval = setInterval(animateScroll, 16) // Faster animation interval (60fps)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <section className="bg-white pt-16 pb-6 sm:pt-32 sm:pb-10 md:pt-40 md:pb-12 lg:pt-48 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-left mb-8 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-6">
            AI speed.<br />Human judgment.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-5xl leading-relaxed font-light">
            ADIN pairs expert operators with intelligent agents to handle the heavy lifting of venture workflows. Faster analysis, tighter feedback loops, and more space for high-conviction bets.
          </p>
        </div>

        {/* Two Column Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6 mb-6">
          {/* Left Card - AI Agents */}
          <motion.div 
            className="bg-white rounded-xl border border-[#E0E0E0] pt-2 pb-4 px-4 sm:pt-6 sm:pb-8 sm:px-8 md:pt-4 md:pb-6 md:px-6 lg:pt-10 lg:pb-12 lg:px-12 h-auto min-h-[65vh] sm:min-h-[85vh] lg:min-h-[93vh] flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ margin: "-50px" }}
          >
            <div className="mb-4 sm:mb-6 md:mb-8">
              <p className="text-base sm:text-lg lg:text-xl text-black mb-1 sm:mb-2 font-semibold">Powered by</p>
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900">AI Agents</h3>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {aiAgents.map((agent, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
                      <Image 
                        src={agent.icon} 
                        alt={agent.name}
                        width={48}
                        height={48}
                        className="w-full h-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-normal text-gray-900 text-xs sm:text-sm lg:text-base">{agent.name}</h4>
                      <p className="text-gray-600 text-xs sm:text-sm lg:text-base font-light">{agent.description}</p>
                    </div>
                  </div>
                  {index < aiAgents.length - 1 && (
                    <div className="relative h-6">
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#F3EAFD]"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

                           {/* Right Card - Humans */}
                 <motion.div 
                   className="bg-white rounded-xl border border-[#E0E0E0] pt-2 pb-4 px-4 sm:pt-6 sm:pb-8 sm:px-8 lg:pt-10 lg:pb-12 lg:px-12 relative overflow-hidden h-auto min-h-[65vh] sm:min-h-[85vh] lg:min-h-[93vh]"
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                   viewport={{ margin: "-50px" }}
                 >
                   <div className="mb-6 sm:mb-8">
                     <p className="text-base sm:text-lg lg:text-xl text-black mb-1 sm:mb-2 font-semibold">Supported by</p>
                     <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900">Humans</h3>
                   </div>
                   <div className="relative flex-1 -mx-8 sm:-mx-10 lg:-mx-12">
                     {/* Scrollable Container */}
                     <div 
                       ref={scrollContainerRef} 
                       className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 h-full" 
                       style={{ 
                         scrollBehavior: 'smooth', 
                         scrollbarWidth: 'none', 
                         msOverflowStyle: 'none',
                         pointerEvents: 'none',
                         userSelect: 'none',
                         WebkitUserSelect: 'none',
                         MozUserSelect: 'none'
                       }}
                       onWheel={(e) => e.preventDefault()}
                       onTouchStart={(e) => e.preventDefault()}
                       onTouchMove={(e) => e.preventDefault()}
                       onTouchEnd={(e) => e.preventDefault()}
                       onMouseDown={(e) => e.preventDefault()}
                       onMouseMove={(e) => e.preventDefault()}
                       onMouseUp={(e) => e.preventDefault()}
                     >
                       {/* Left Spacer to center card 2 initially */}
                       <div className="flex-shrink-0 w-8 sm:w-10"></div>

                       {/* Human Card 1 - Purple */}
                       <div className="bg-gradient-to-br from-[#A97DF5]/40 to-[#A97DF5]/25 rounded-xl p-4 sm:p-6 text-black flex-shrink-0 w-[85%] snap-center h-[50vh] sm:h-[60vh] lg:h-[66vh] pb-3 backdrop-blur-sm relative overflow-hidden">
                         {/* Ryan Hoover Image - fills entire card */}
                         <div className="absolute inset-0">
                           <Image
                             src="/images/supporters/ryan_hoover.png"
                             alt="Ryan Hoover"
                             width={500}
                             height={400}
                             className="w-full h-full object-cover object-bottom sm:object-center lg:object-bottom"
                           />
                         </div>
                         {/* White transparent subtitle card footer */}
                         <div className="absolute bottom-0 left-0 right-0 bg-white/20 backdrop-blur-sm rounded-b-xl p-4 z-10">
                           <div className="flex items-center justify-center space-x-2 px-4">
                             <h4 className="font-semibold text-xl sm:text-2xl mb-1 text-white">Ryan Hoover</h4>
                             <div className="bg-[#FFD800] w-4 h-4 flex items-center justify-center">
                               <ion-icon name="checkmark" style={{ color: 'black', fontSize: '12px' }}></ion-icon>
                             </div>
                           </div>
                           <p className="text-white/90 text-sm sm:text-base font-medium px-4 text-center">Founder, Product Hunt</p>
                         </div>
                       </div>

                       {/* Human Card 2 - Yellow */}
                       <div className="bg-gradient-to-br from-[#FFD17A]/40 to-[#FFD17A]/25 rounded-xl p-4 sm:p-6 text-black flex-shrink-0 w-[85%] snap-center h-[50vh] sm:h-[60vh] lg:h-[66vh] pb-3 backdrop-blur-sm relative overflow-hidden">
                         {/* Ryan Hoover Image - fills entire card */}
                         <div className="absolute inset-0">
                           <Image
                             src="/images/supporters/ryan_hoover.png"
                             alt="Ryan Hoover"
                             width={500}
                             height={400}
                             className="w-full h-full object-cover object-bottom sm:object-center lg:object-bottom"
                           />
                         </div>
                         {/* White transparent subtitle card footer */}
                         <div className="absolute bottom-0 left-0 right-0 bg-white/20 backdrop-blur-sm rounded-b-xl p-4 z-10">
                           <div className="flex items-center justify-center space-x-2 px-4">
                             <h4 className="font-semibold text-xl sm:text-2xl mb-1 text-white">Ryan Hoover</h4>
                             <div className="bg-[#FFD800] w-4 h-4 flex items-center justify-center">
                               <ion-icon name="checkmark" style={{ color: 'black', fontSize: '12px' }}></ion-icon>
                             </div>
                           </div>
                           <p className="text-white/90 text-sm sm:text-base font-medium px-4 text-center">Founder, Product Hunt</p>
                         </div>
                       </div>

                       {/* Human Card 3 - Green */}
                       <div className="bg-gradient-to-br from-[#5ED890]/40 to-[#5ED890]/25 rounded-xl p-4 sm:p-6 text-black flex-shrink-0 w-[85%] snap-center h-[50vh] sm:h-[60vh] lg:h-[66vh] pb-3 backdrop-blur-sm relative overflow-hidden">
                         {/* Ryan Hoover Image - fills entire card */}
                         <div className="absolute inset-0">
                           <Image
                             src="/images/supporters/ryan_hoover.png"
                             alt="Ryan Hoover"
                             width={500}
                             height={400}
                             className="w-full h-full object-cover object-bottom sm:object-center lg:object-bottom"
                           />
                         </div>
                         {/* White transparent subtitle card footer */}
                         <div className="absolute bottom-0 left-0 right-0 bg-white/20 backdrop-blur-sm rounded-b-xl p-4 z-10">
                           <div className="flex items-center justify-center space-x-2 px-4">
                             <h4 className="font-semibold text-xl sm:text-2xl mb-1 text-white">Ryan Hoover</h4>
                             <div className="bg-[#FFD800] w-4 h-4 flex items-center justify-center">
                               <ion-icon name="checkmark" style={{ color: 'black', fontSize: '12px' }}></ion-icon>
                             </div>
                           </div>
                           <p className="text-white/90 text-sm sm:text-base font-medium px-4 text-center">Founder, Product Hunt</p>
                         </div>
                       </div>

                       {/* Human Card 4 - Blue */}
                       <div className="bg-gradient-to-br from-[#4A90E2]/40 to-[#4A90E2]/25 rounded-xl p-4 sm:p-6 text-black flex-shrink-0 w-[85%] snap-center h-[50vh] sm:h-[60vh] lg:h-[66vh] pb-3 backdrop-blur-sm relative overflow-hidden">
                         {/* Ryan Hoover Image - fills entire card */}
                         <div className="absolute inset-0">
                           <Image
                             src="/images/supporters/ryan_hoover.png"
                             alt="Ryan Hoover"
                             width={500}
                             height={400}
                             className="w-full h-full object-cover object-bottom sm:object-center lg:object-bottom"
                           />
                         </div>
                         {/* White transparent subtitle card footer */}
                         <div className="absolute bottom-0 left-0 right-0 bg-white/40 backdrop-blur-sm rounded-b-xl p-4 z-10">
                           <div className="flex items-center justify-center space-x-2 px-4">
                             <h4 className="font-semibold text-xl sm:text-2xl mb-1 text-white">Ryan Hoover</h4>
                             <div className="bg-[#FFD800] w-4 h-4 flex items-center justify-center">
                               <ion-icon name="checkmark" style={{ color: 'black', fontSize: '12px' }}></ion-icon>
                             </div>
                           </div>
                           <p className="text-white/90 text-sm sm:text-base font-medium px-4 text-center">Founder, Product Hunt</p>
                         </div>
                       </div>

                       {/* Human Card 5 - Red */}
                       <div className="bg-gradient-to-br from-[#FF6B6B]/40 to-[#FF6B6B]/25 rounded-xl p-4 sm:p-6 text-black flex-shrink-0 w-[85%] snap-center h-[50vh] sm:h-[60vh] lg:h-[66vh] pb-3 backdrop-blur-sm relative overflow-hidden">
                         {/* Ryan Hoover Image - fills entire card */}
                         <div className="absolute inset-0">
                           <Image
                             src="/images/supporters/ryan_hoover.png"
                             alt="Ryan Hoover"
                             width={500}
                             height={400}
                             className="w-full h-full object-cover object-bottom sm:object-center lg:object-bottom"
                           />
                         </div>
                         {/* White transparent subtitle card footer */}
                         <div className="absolute bottom-0 left-0 right-0 bg-white/20 backdrop-blur-sm rounded-b-xl p-4 z-10">
                           <div className="flex items-center justify-center space-x-2 px-4">
                             <h4 className="font-semibold text-xl sm:text-2xl mb-1 text-white">Ryan Hoover</h4>
                             <div className="bg-[#FFD800] w-4 h-4 flex items-center justify-center">
                               <ion-icon name="checkmark" style={{ color: 'black', fontSize: '12px' }}></ion-icon>
                             </div>
                           </div>
                           <p className="text-white/90 text-sm sm:text-base font-medium px-4 text-center">Founder, Product Hunt</p>
                         </div>
                       </div>







                       {/* Right Spacer to balance the layout */}
                       <div className="flex-shrink-0 w-8 sm:w-10"></div>
                     </div>
                   </div>
                 </motion.div>
        </div>

        {/* Footer Note */}
        <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="bg-white rounded-xl border border-[#E0E0E0] p-3 sm:p-4 flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src="/images/tribute_logo.svg"
                  alt="Tribute Labs"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900">A Tribute Labs Project</p>
                <p className="text-xs text-[#4D4D4D]">NYC / LDN / CHI</p>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm sm:text-base font-light">
            Tribute Labs has supported over 30 communities, empowering more than 300 projects through technical guidance, infrastructure, and long-term partnership. Our mission is to help communities thrive by providing the tools and support they need to scale with confidence.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AISpeedSection 