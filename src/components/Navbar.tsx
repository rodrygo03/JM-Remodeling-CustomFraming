import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import fullLogo from '../assets/jm-remodeling-custom-framing-logo-final.jpg';
import shortLogo from '../assets/shortLogo.png';
import usFlag from '../assets/um.svg';
import mxFlag from '../assets/mx.svg';

const Navbar = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language === 'es');

  const toggleLanguage = () => {
    const newLang = language ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    setLanguage(!language);
  };

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7.25xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={shortLogo} alt="JM Logo" className="h-24 w-auto object-contain" />
          </Link>
          {/* Nav Links */}
          <div className="hidden md:flex space-x-6 text-sm text-blue-600 font-medium items-center">
            <Link to="/services" className="hover:text-blue-800 transition">Services</Link>
            <Link to="/projects" className="hover:text-blue-800 transition">Projects</Link>
            <Link to="/about" className="hover:text-blue-800 transition">About</Link>
            <Link to="/contact" className="hover:text-blue-800 transition">Contact</Link>
            <div onClick={toggleLanguage} className="cursor-pointer hover:text-blue-800 transition flex items-center">
              <img src={language ? mxFlag : usFlag} alt="Language Flag" className="h-5 w-5 rounded-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
