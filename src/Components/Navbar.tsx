import React, { useState } from 'react';
import {
  Home,
  UserRound,
  FolderKanban,
  Mail,
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [_menuOpen, _setMenuOpen] = useState(false);

  return (
    <div>
      {/* DESKTOP NAVBAR */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-black/80 border border-dashed border-white/20 backdrop-blur-md rounded-full px-6 py-3 hidden md:flex items-center gap-6 z-50 shadow-xl">
        {['Home', 'About', 'Projects', 'Contact'].map((link, idx) => (
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
      </nav>

      {/* MOBILE NAVBAR (Instagram-style) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md flex items-center justify-around px-4 py-2 z-50 md:hidden">
        <a href="#home" className="text-white hover:text-pink-400 transition">
          <Home size={24} />
        </a>
        <a href="#about" className="text-white hover:text-pink-400 transition">
          <UserRound size={24} />
        </a>
        <a href="#projects" className="text-white hover:text-pink-400 transition">
          <FolderKanban size={24} />
        </a>
        <a href="#contact" className="text-white hover:text-pink-400 transition">
          <Mail size={24} />
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
