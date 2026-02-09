import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'About', href: '#why-us' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header className="bg-white bg-opacity-90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-black flex flex-col leading-none">
              <span className="text-2xl font-bold tracking-wider">BLACKLANE</span>
              <span className="text-sm font-medium text-gray-600 tracking-wide">Australia</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2 text-gray-700">
              <span className="font-medium">Contact Us:</span>
              <i className="fas fa-phone"></i>
              <a href="tel:0417833137" className="hover:text-black transition-colors font-semibold">0417 833 137</a>
            </div>
          </div>
          <div className="hidden md:block">
            <a
              href="#booking"
              className="bg-black text-white px-4 py-2 rounded-md text-sm font-bold hover:bg-gray-700 transition-colors"
            >
              Book Now
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-black"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:bg-gray-100 hover:text-black block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-4 mb-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-700">
                <span className="font-medium">Contact Us:</span>
                <i className="fas fa-phone"></i>
                <a href="tel:0417833137" className="hover:text-black transition-colors font-semibold">0417 833 137</a>
              </div>
            </div>
             <a
              href="#booking"
              onClick={() => setIsMenuOpen(false)}
              className="bg-black text-white block mx-4 px-4 py-2 rounded-md text-base font-bold text-center hover:bg-gray-700 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;