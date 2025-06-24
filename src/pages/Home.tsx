import logo from '../assets/fullLogo.png';
import backgroundLogo from '../assets/backgroundLogo.png';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection'; 

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative flex flex-col items-center justify-start text-center min-h-screen md:min-h-[140vh] pt-32 pb-12 bg-gray-100 overflow-hidden">
          <img src={backgroundLogo} alt="Background Logo" className="absolute inset-0 w-full h-full object-cover opacity-50 z-0 blur-sm" />
          {/* Foreground Content */}
          <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-20">
            {/* Link to About */}
            <FadeInSection delay={0}>
              <div className="max-w-4xl mx-auto text-center my-16">
                <h3
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow-md mb-4"
                  style={{ color: '#2B5F99' }}
                >
                  {t('home.subheading1')}
                </h3>
                <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed italic drop-shadow-sm">
                  {t('home.content1')}
                </p>
                <div className="mt-6">
                  <div className="inline-block rounded-xl transition-all duration-300 hover:backdrop-blur-xs hover:bg-black/5 hover:border hover:border-white/10 hover:shadow-xl px-6 py-2">
                    <Link
                      to="/about"
                      className="font-medium hover:underline transition duration-300"
                      style={{ color: '#2B5F99' }}
                    >
                      {t('home.link1')}
                    </Link>
                  </div>
                </div>
              </div>
            </FadeInSection>
            {/* Link to Services */}
            <FadeInSection delay={0}>
              <div className="max-w-4xl mx-auto text-center my-16">
                <h3
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow-md mb-4"
                  style={{ color: '#2B5F99' }}
                >
                  {t('home.subheading2')}
                </h3>
                <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed italic drop-shadow-sm">
                  {t('home.content2')}
                </p>
                <div className="mt-6">
                  <div className="inline-block rounded-xl transition-all duration-300 hover:backdrop-blur-xs hover:bg-black/5 hover:border hover:border-white/10 hover:shadow-xl px-6 py-2">
                    <Link
                      to="/services"
                      className="font-medium hover:underline transition duration-300"
                      style={{ color: '#2B5F99' }}
                    >
                      {t('home.link2')}
                    </Link>
                  </div>
                </div>
              </div>
            </FadeInSection>
            {/* Link to Contact */}
            <FadeInSection delay={0}>
              <div className="max-w-4xl mx-auto text-center my-16">
                <h3
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow-md mb-4"
                  style={{ color: '#2B5F99' }}
                >
                  {t('home.subheading3')}
                </h3>
                <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed italic drop-shadow-sm">
                  {t('home.content3')}
                </p>
                <div className="mt-6">
                  <div className="inline-block rounded-xl transition-all duration-300 hover:backdrop-blur-xs hover:bg-black/5 hover:border hover:border-white/10 hover:shadow-xl px-6 py-2">
                    <Link
                      to="/contact"
                      className="font-medium hover:underline transition duration-300"
                      style={{ color: '#2B5F99' }}
                    >
                      {t('home.link3')}
                    </Link>
                  </div>
                </div>
              </div>
            </FadeInSection>
            {/* Logo */}
            <FadeInSection delay={0}>
              <div className="flex justify-center mt-20">
                <img
                  src={logo}
                  alt="JM Construction Logo"
                  className="w-20 sm:w-24 md:w-28 lg:w-32 opacity-90"
                />
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
