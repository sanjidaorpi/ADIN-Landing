import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LiveReports from '@/components/LiveReports'
import AnimatedScrollArrow from '@/components/AnimatedScrollArrow'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <div className="pt-2">
        <Header />
      </div>
      <Hero />
      <div className="relative flex-1 flex flex-col justify-end">
        <Image src="/images/gradient.svg" alt="Gradient" width={1920} height={400} className="absolute bottom-0 left-0 w-full h-auto z-0" />
        <div className="flex justify-end pr-8 relative z-10 pb-4 sm:pt-0 sm:pb-0 pt-8 sm:pt-0">
          <LiveReports />
        </div>
        <div className="flex justify-center relative z-10 pb-4 sm:pb-0">
          <AnimatedScrollArrow />
        </div>
        <div className="h-2 sm:h-8 md:h-10 lg:h-11 xl:h-12 relative z-10"></div>
      </div>
    </main>
  )
} 