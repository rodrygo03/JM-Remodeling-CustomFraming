import React from 'react';
import backgroundImage from '../assets/backgroundLogo.png';
import companyLogo from '../assets/fullLogo.png';
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white flex flex-col items-center">
      {/* Background Section with Enhanced Heading */}
      <div
        className="w-full h-[40vh] md:h-[60vh] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10" />
        <h1 className="relative z-10 text-5xl font-extrabold text-white text-center px-4 drop-shadow-md animate-fade-in-up">
          {t('about.heading')}
        </h1>
      </div>

      {/* Logo + Mission Statement */}
      <div className="w-full flex flex-col items-center mt-[-4rem] px-4 space-y-8">
        {/* Logo */}
        <div className="w-64 h-64 rounded-full flex items-center justify-center overflow-hidden bg-white/10 backdrop-blur-md shadow-xl">
          <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-tr from-white/30 to-white/10">
            <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
              <img src={companyLogo} alt="Company Logo" className="object-contain w-full h-full" />
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="max-w-3xl text-center text-gray-800 text-lg leading-relaxed px-6">
          <h2 className="text-2xl font-bold mb-3 text-[#2B5F99]">{t('about.subheading1')}</h2>
          <p>
            {t('about.content1.a')} <strong>{t('about.tenet1')}</strong>, {t('about.content1.b')} <strong>{t('about.tenet2')}</strong> {t('about.content1.c')} <strong>{t('about.tenet3')}</strong> {t('about.content1.d')}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full border-t border-gray-200 mt-16 py-16 px-6 text-gray-800 space-y-20">
        {/* Company History */}
        <section className="max-w-2xl mx-auto animate-fade-in-up delay-75">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#2B5F99]">
            {t('about.subheading2')}
          </h2>
          <p className="text-lg leading-relaxed mb-4 text-justify">
            {t('about.content2.a')} <strong>{t('about.name')}</strong> {t('about.content2.b')}
          </p>
          <p className="text-lg leading-relaxed mb-4 text-justify">
            {t('about.content2.c')} <em>
              {t('about.trades.a')}, {t('about.trades.b')}, {t('about.trades.c')}, {t('about.trades.d')}, {t('about.trades.e')}
            </em>, {t('about.trades.f')}.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            {t('about.content2.d')}
          </p>
        </section>

        {/* Previous Customers */}
        <section className="max-w-3xl mx-auto text-center animate-fade-in-up delay-100">
          <h2 className="text-3xl font-bold mb-4 text-[#2B5F99]">
            {t('about.subheading3')}
          </h2>
          <p className="text-lg leading-relaxed">
            {t('about.content3')}
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
