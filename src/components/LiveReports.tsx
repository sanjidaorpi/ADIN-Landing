import AnimatedWaveText from './AnimatedWaveText'
import Image from 'next/image'

const LiveReports = () => {
  const companies = [
    {
      name: 'New Range',
      description: 'Automated Compliance',
      logo: '/images/new_range_icon.svg',
      color: 'bg-black',
    },
    {
      name: 'Cactos',
      description: 'Energy Systems',
      logo: '/images/cactos_logo.svg',
      color: 'bg-adin-green',
    },
    {
      name: 'OpenAI',
      description: 'Machine Intelligence',
      logo: '/images/open_ai_logo.svg',
      color: 'bg-black',
    },
  ]

    return (
    <div className="flex justify-end items-start mb-0">
      {/* Live Reports Tab */}
      <div className="bg-transparent rounded-l-2xl px-1 sm:px-1.5 md:px-2 lg:px-3 xl:px-4 w-48 sm:w-64 md:w-80 lg:w-96 xl:w-112 pb-0 -mb-8 sm:-mb-8 md:-mb-8 lg:-mb-8 xl:-mb-8" style={{ minWidth: '192px' }}>
        {/* Header */}
        <div className="flex items-center space-x-1 sm:space-x-1.5 md:space-x-2 mb-1 sm:mb-2 md:mb-2.5">
            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full"></div>
            <h2 className="text-xs sm:text-sm md:text-base font-light text-gray-800 whitespace-nowrap">Live Reports</h2>
          </div>

          {/* Company Cards */}
          <div className="space-y-0.5 sm:space-y-0.5 md:space-y-1 lg:space-y-1.5">
            {companies.map((company, index) => (
                              <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-1.5 sm:p-2.5 md:p-3 lg:p-4 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="flex items-center space-x-1 sm:space-x-1.5 md:space-x-2">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex items-center justify-center overflow-hidden">
                      <Image 
                        src={company.logo} 
                        alt={`${company.name} logo`}
                        width={28}
                        height={28}
                        className="w-full h-full object-contain"
                      />
                    </div>
                                      <div>
                      <h3 className="font-semibold text-gray-900 text-xs whitespace-nowrap">{company.name}</h3>
                      <p className="text-xs text-gray-600 whitespace-nowrap">{company.description}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Link */}
          <div className="mt-2 sm:mt-3 md:mt-4 pb-0">
            <a
              href="#"
              className="text-black font-light hover:text-gray-700 transition-colors flex items-center justify-end text-xs"
            >
              <AnimatedWaveText text="View All Recent Reports →" className="text-xs whitespace-nowrap" />
            </a>
          </div>
      </div>
    </div>
  )
}

export default LiveReports 