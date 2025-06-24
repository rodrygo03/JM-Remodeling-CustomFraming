import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import shortLogo from '../assets/shortLogo.png';
import usFlag from '../assets/um.svg';
import mxFlag from '../assets/mx.svg';

const Navbar = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language === 'es');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = language ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    setLanguage(!language);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down and past 100px
          setIsVisible(false);
        } else {
          // Scrolling up or at the top
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const { t } = useTranslation();

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full bg-white shadow-md z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={shortLogo} alt="JM Remodeling & Custom Framing Logo" className="h-24 w-auto object-contain" />
          </Link>
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6 text-md text-blue-600 font-medium items-center">
            <Link
              to="/about"
              className="hover:text-blue-800 transition-transform transform hover:scale-110"
              style={{ color: '#2B5F99' }}
            >
              {t('navbar.about')}
            </Link>
            <Link
              to="/services"
              className="hover:text-blue-800 transition-transform transform hover:scale-110"
              style={{ color: '#2B5F99' }}
            >
              {t('navbar.services')}
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-800 transition-transform transform hover:scale-110"
              style={{ color: '#2B5F99' }}
            >
              {t('navbar.contact')}
            </Link>
            <div onClick={toggleLanguage} className="cursor-pointer hover:text-blue-800 transition flex items-center">
              <img src={language ? mxFlag : usFlag} alt="Language Flag" className="h-5 w-5 rounded-full object-cover"/>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <div onClick={toggleLanguage} className="cursor-pointer hover:text-blue-800 transition flex items-center">
              <img src={language ? mxFlag : usFlag} alt="Language Flag" className="h-5 w-5 rounded-full object-cover"/>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-800 focus:outline-none focus:text-blue-800"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-blue-600 hover:text-blue-800 hover:bg-gray-50 transition-colors"
                style={{ color: '#2B5F99' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navbar.about')}
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-base font-medium text-blue-600 hover:text-blue-800 hover:bg-gray-50 transition-colors"
                style={{ color: '#2B5F99' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navbar.services')}
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-blue-600 hover:text-blue-800 hover:bg-gray-50 transition-colors"
                style={{ color: '#2B5F99' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('navbar.contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
