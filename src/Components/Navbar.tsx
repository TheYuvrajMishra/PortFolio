import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Projects', 'Contact'];
  const menuLinks = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <div>
      {/* NAVBAR CONTAINER */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/80 border border-white/20 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-6 z-50 shadow-xl">
        {/* NAV ITEMS (centered) */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase()}`}
              className="text-white cursor-pointer relative group transition-transform duration-300"
            >
              <span className="group-hover:scale-110 transition-transform duration-200">
                {link}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* BURGER ICON */}
        <div
          className="md:hidden flex flex-col justify-between w-6 h-4 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></span>
          <span
            className={`h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? 'scale-0' : ''
            }`}
          ></span>
          <span
            className={`h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></span>
        </div>
      </nav>

      {/* RADIAL FLOATING MENU */}
      <div
        className={`fixed top-20 right-6 px-6 rounded-3xl bg-black/70 backdrop-blur-lg shadow-lg flex flex-col gap-4 transform transition-all duration-500 ${
          menuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        } origin-top-right z-40`}
      >
        {menuLinks.map((link, idx) => (
          <a
            key={idx}
            href={`#${link.toLowerCase()}`}
            className="text-white hover:text-pink-400 transition duration-300 cursor-pointer"
          >
            {link}
          </a>
        ))}
      </div>

      {/* CUSTOM SPIN ANIMATION */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 6s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
