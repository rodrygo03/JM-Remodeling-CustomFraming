import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ServicesHeroCarousel from '../components/CarouselGallery';

const servicesListKeys = [
  'framing',
  'carpentry',
  'woodenFences',
  'siding',
  'windows',
  'porch',
  'additions',
  'gardens',
  'exteriorDoors',
  'roofing',
  'demolitions',
  'cornice',
  'decks',
];

const highlightedServices = [
  {
    key: 'framingRoofing',
    title: 'Framing & Roofing',
    description: 'Precision-crafted structures that form the backbone of your home, paired with reliable roofing that ensures protection against the elements.',
    imagesPath: '/assets/services-gallery/framing-roofing/',
  },
  {
    key: 'sidingWindows',
    title: 'Siding & Windows',
    description: 'Boost your home’s curb appeal and energy efficiency with modern siding and expertly installed windows.',
    imagesPath: '/assets/services-gallery/siding-windows/',
  },
  {
    key: 'demolition',
    title: 'Demolition',
    description: 'Safe and clean demolition services that prepare your space for the next chapter of construction.',
    imagesPath: '/assets/services-gallery/demolition/',
  },
  {
    key: 'porch',
    title: 'Porch',
    description: 'Extend your living space with a custom-built porch designed for comfort and style.',
    imagesPath: '/assets/services-gallery/porch/',
  },
];

const Services = () => {
  const { t } = useTranslation();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex flex-col items-center bg-white text-gray-800">
      {/* Hero Carousel */}
      <ServicesHeroCarousel />

      {/* Summary Paragraph */}
      <div className="max-w-3xl px-6 py-10 text-center text-lg leading-relaxed">
        <p>
          {t('services.summary')}
        </p>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 px-6 max-w-4xl text-lg mb-12">
        {servicesListKeys.map((serviceKey, idx) => (
          <div key={idx} className="flex items-start">
            <span className="mr-2" style={{ color: '#2B5F99' }}>•</span>
            <span className="capitalize">{t(`services.servicesList.${serviceKey}`)}</span>
          </div>
        ))}
      </div>

      {/* Highlighted Services */}
      <div className="w-full max-w-5xl px-6 mb-20">
        {highlightedServices.map(({ key, imagesPath }) => (
          <div key={key} className="mb-8 border-b pb-6">
            <div
              onClick={() => toggleSection(key)}
              className="cursor-pointer flex items-center justify-between text-2xl font-semibold mb-2"
              style={{ color: '#2B5F99' }}
            >
              {t(`services.highlighted.${key}.title`)}
              {openSections[key] ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            <p className="text-gray-700 mb-4">{t(`services.highlighted.${key}.description`)}</p>
            {openSections[key] && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {Array.from({length: key === 'demolition' ? 2 : key === 'porch' ? 1 : 9}, (_, i) => i + 1).map((i) => (
                  <div 
                    key={i}
                    className="relative overflow-hidden rounded-lg group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-cyan-400/30 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                    <div className="absolute inset-[2px] bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-cyan-500/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={`${imagesPath}${i}.JPG`}
                      alt={`${t(`services.highlighted.${key}.title`)} ${i}`}
                      className="relative w-full h-64 md:h-80 object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-white/20 backdrop-blur-sm"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

