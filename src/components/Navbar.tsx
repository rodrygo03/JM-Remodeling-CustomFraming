import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7l mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800">JM</div>

          {/* Navigation Links */}
          <div className="hidden md:flex ml-auto space-x-6 text-sm text-blue-600 font-medium">
            <Link to="/services" className="hover:text-blue-800 transition">Services</Link>
            <Link to="/projects" className="hover:text-blue-800 transition">Projects</Link>
            <Link to="/about" className="hover:text-blue-800 transition">About</Link>
            <Link to="/contact" className="hover:text-blue-800 transition">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;







