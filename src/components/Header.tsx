'use client'

import { useState } from 'react'
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

const Header = () => {
  const [activeTab, setActiveTab] = useState('About')
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: 'About', icon: 'information-circle', active: true },
    { name: 'Investors', icon: 'cash' },
    { name: 'Members', icon: 'people' },
    { name: 'Founders', icon: 'construct' },
  ]

  return (
    <header className="flex items-center justify-between px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 lg:py-6 bg-white relative z-50" style={{ paddingTop: '12px sm:16px md:24px lg:32px' }}>
      {/* Logo */}
      <div className="flex items-center space-x-2">
                  <Image 
          src="/images/logo.svg" 
          alt="ADIN Logo" 
          width={32}
          height={32}
          className="h-7 w-auto"
        />
        </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4 mx-2 sm:mx-4 md:mx-6 lg:mx-8">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveTab(item.name)}
            className={`flex items-center space-x-1 px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-full transition-colors border whitespace-nowrap text-xs sm:text-sm ${
              activeTab === item.name
                ? 'border-adin-purple text-adin-purple'
                : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
            }`}
          >
            <ion-icon 
              name={item.icon} 
              style={{ fontSize: '16px', display: 'inline-block', verticalAlign: 'middle' }} 
            />
            <span className="font-normal text-base">{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Desktop User Actions */}
      <div className="hidden lg:flex items-center space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-6 whitespace-nowrap">
        <button className="text-gray-600 hover:text-gray-900 font-medium mr-1 sm:mr-2 md:mr-3 lg:mr-4 text-xs sm:text-sm">
          Log In
        </button>
        <button className="bg-adin-orange text-white px-2 sm:px-3 md:px-4 lg:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-full font-medium hover:scale-105 transition-transform duration-200 text-xs sm:text-sm">
          Sign Up
        </button>
      </div>

      {/* Mobile/Tablet Hamburger */}
      <div className="lg:hidden">
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="text-gray-700 focus:outline-none p-1 relative w-8 h-8 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {/* Animated Hamburger Lines */}
          <div className="relative w-5 h-5">
            {/* Top Line */}
            <div 
              className={`absolute top-0 left-0 w-5 h-0.5 bg-adin-purple transition-all duration-300 ease-in-out ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            {/* Middle Line */}
            <div 
              className={`absolute top-2 left-0 w-5 h-0.5 bg-adin-purple transition-all duration-300 ease-in-out ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            {/* Bottom Line */}
            <div 
              className={`absolute top-4 left-0 w-5 h-0.5 bg-adin-purple transition-all duration-300 ease-in-out ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-[60] transition-all duration-500 ease-in-out ${
          menuOpen 
            ? 'opacity-100 h-screen translate-y-0' 
            : 'opacity-0 h-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {/* Mobile Navigation Items */}
        <nav className="px-4 py-2 flex flex-col space-y-1">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name)
                setMenuOpen(false)
              }}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-left ${
                activeTab === item.name
                  ? 'bg-adin-purple/10 text-adin-purple border border-adin-purple/20'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <ion-icon 
                name={item.icon} 
                style={{ fontSize: '16px', display: 'inline-block', verticalAlign: 'middle' }} 
              />
              <span className="font-medium text-sm">{item.name}</span>
            </button>
          ))}
        </nav>

        {/* Mobile Action Buttons */}
        <div className="px-4 py-2 flex flex-col space-y-2">
          <button className="w-full text-gray-600 hover:text-gray-900 font-medium text-sm py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors">
            Log In
          </button>
          <button className="w-full bg-adin-orange text-white px-3 py-2 rounded-lg font-medium transition-colors text-sm">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header