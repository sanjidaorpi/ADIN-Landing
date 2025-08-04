'use client'

import Image from 'next/image'

// Declare ion-icon element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        name?: string;
        size?: string;
      }, HTMLElement>;
    }
  }
}

const Footer = () => {
  return (
    <footer className="bg-white mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="flex flex-col gap-6 sm:gap-10 md:flex-row md:justify-between">
          {/* Left + Middle Group */}
          <div className="flex flex-col sm:flex-row sm:justify-start sm:gap-16 gap-6 text-center sm:text-left">
            {/* ADIN for */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <ion-icon name="people" className="text-gray-700 text-lg" />
                <h3 className="font-medium text-gray-900 text-sm">ADIN for</h3>
              </div>
              <div className="flex flex-col gap-1">
                <a href="#" className="text-sm text-[#4D4D4D] hover:text-[#A97DF5]">Investors</a>
                <a href="#" className="text-sm text-[#4D4D4D] hover:text-[#A97DF5]">Members</a>
                <a href="#" className="text-sm text-[#4D4D4D] hover:text-[#A97DF5]">Founders</a>
              </div>
            </div>

            {/* Resources */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <ion-icon name="shield-checkmark" className="text-gray-700 text-lg" />
                <h3 className="font-medium text-gray-900 text-sm">Resources</h3>
              </div>
              <div className="flex flex-col gap-1">
                <a href="#" className="text-sm text-[#4D4D4D] hover:text-[#A97DF5]">Terms of Service</a>
                <a href="#" className="text-sm text-[#4D4D4D] hover:text-[#A97DF5]">Privacy Policy</a>
              </div>
            </div>
          </div>

          {/* Right Side: Logo, Info, Social */}
          <div className="space-y-3 sm:space-y-4 text-center md:text-right">
            <div className="flex justify-center md:justify-end">
              <Image src="/images/logo_face.svg" alt="Logo" width={36} height={36} />
            </div>
            <div className="space-y-1 text-center md:text-right">
              <p className="text-xs text-gray-600">ADIN was designed and developed</p>
              <p className="text-xs text-gray-600">by Tribute Labs in Brooklyn, NY.</p>
            </div>
            <div className="flex justify-center md:justify-end items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-gray-700 text-2xl flex items-center">𝕏</a>
              <a href="#" className="text-gray-900 hover:text-gray-700 flex items-center">
                <ion-icon name="mail" style={{ fontSize: '1.5rem' }} />
              </a>
            </div>
            <p className="text-center md:text-right text-[#B3B3B3] text-xs">&copy; 2025 Tribute Labs, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 