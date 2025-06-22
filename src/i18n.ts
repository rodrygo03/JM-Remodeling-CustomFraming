// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    supportedLngs: ['en', 'es'],
    load: 'languageOnly',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          header: {},
          footer: {
            copyright: "JM Remodeling. All rights reserved."
          },
          home: {
            subheading1: "Distinguished Craft",
            content1: "With over 20+ years of experience in residential construction, JM Remodeling & Custom Framing brings expertise, precision, and a commitment to quality that sets us apart.",
            link1: "Meet the Company →",
            subheading2: "Versatility",
            content2: "Whether you're a homeowner rebuilding after a disaster or a contractor looking for skilled support, we offer a wide range of expert services. From carpentry and fencing to siding, windows, porches, roofing, and more. We bring craftsmanship to every project.",
            link2: "Explore Our Services →",
            subheading3: "Reliability",
            content3: "A proven history of successful projects with companies, contractors, and homeowners reflects our commitment to effective communication. We keep clients informed every step of the way—sharing progress updates, timelines, and key project details to ensure confidence and clarity.",
            link3: "Get in Touch →",
          }
        }
      },
      es: {
        translation: {
          header: {},
          footer: {
            copyright: "JM Remodelación. Todos los derechos reservados."
          },
          home: {
            subheading1: "Artesanía distinguida",
            content1: "Con más de 20 años de experiencia en construcción residencial, JM Remodelación & Enmarcado Personalizado ofrece experiencia, precisión y un compromiso con la calidad que nos distingue.",
            link1: "Conozca la Compania →",
            subheading2: "Versatilidad",
            content2: "Ya sea que sea un propietario reconstruyendo después de un desastre o un contratista en busca de apoyo especializado, ofrecemos una amplia gama de servicios expertos. Desde carpintería y cercas hasta revestimiento, ventanas, porches, techos y más. Aportamos artesanía a cada proyecto.",
            link2: "Explora Nuestros Servicios →",
            subheading3: "Confiabilidad",
            content3: "Nuestro historial comprobado de proyectos exitosos con empresas, contratistas y propietarios refleja nuestro compromiso con una comunicación eficaz. Mantenemos a los clientes informados en cada etapa, compartiendo avances, cronogramas y detalles clave para garantizar confianza y claridad.",
            link3: "Contáctanos →",
          }
        }
      }
    }
  });

export default i18n;
