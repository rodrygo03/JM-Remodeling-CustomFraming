import { useTranslation } from 'react-i18next';
import fullLogo from '../assets/jm-remodeling-custom-framing-logo-final.jpg';
import backgroundImage from '../assets/services-gallery/gallery/IMG_21.JPG';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* White overlay canvas */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-12
       px-6">
        {/* Company Logo */}
        <div className="mb-8 mt-16">
          <img 
            src={fullLogo} 
            alt="JM Remodeling & Custom Framing Logo" 
            className="h-32 w-auto object-contain drop-shadow-lg"
          />
        </div>

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: '#2B5F99' }}>
          {t('navbar.contact')}
        </h1>

        {/* Contact Information */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center border border-white/20">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: '#2B5F99' }}>{t('contact.heading')}</h2>
          
          <div className="space-y-4">
            <div>
              <p className="text-lg font-medium text-gray-800">{t('contact.contractor')}</p>
              <p className="text-xl font-semibold" style={{ color: '#2B5F99' }}>Juan M. Orozco</p>
            </div>
            
            <div>
              <p className="text-lg font-medium text-gray-800">{t('contact.phone')}</p>
              <a 
                href="tel:713-816-6212" 
                className="text-xl font-semibold hover:underline transition-colors duration-300"
                style={{ color: '#2B5F99' }}
              >
                713-816-6212
              </a>
            </div>

            <div>
              <p className="text-lg font-medium text-gray-800">{t('contact.email')}</p>
              <a 
                href="mailto:juanorozco6212@gmail.com" 
                className="text-xl font-semibold hover:underline transition-colors duration-300"
                style={{ color: '#2B5F99' }}
              >
                juanorozco6212@gmail.com
              </a>
            </div>
            
            <div>
              <p className="text-lg font-medium text-gray-800">{t('contact.customerService')}</p>
              <a 
                href="mailto:jmremodeling6212@gmail.com" 
                className="text-xl font-semibold hover:underline transition-colors duration-300"
                style={{ color: '#2B5F99' }}
              >
                jmremodeling6212@gmail.com
              </a>
              <br />
              {/* <a 
                href="tel:832-658-9498" 
                className="text-xl font-semibold hover:underline transition-colors duration-300"
                style={{ color: '#2B5F99' }}
              >
                832-658-9498
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
