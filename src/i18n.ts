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
            copyright: "JM Remodeling & Custom Framing™. All rights reserved.",
          },
          navbar: {
            about: "About",
            services: "Services",
            contact: "Contact",
          },
          home: {
            subheading1: "Distinguished Craft",
            content1: "With over 20 years of experience in residential construction, JM Remodeling & Custom Framing brings expertise, precision, and a commitment to quality that sets us apart.",
            link1: "Meet the Company →",
            subheading2: "Versatility",
            content2: "Whether you're a homeowner rebuilding after a disaster or a contractor looking for skilled support, we offer a wide range of expert services. From carpentry and fencing to siding, windows, porches, roofing, and more. We bring craftsmanship to every project.",
            link2: "Explore Our Services →",
            subheading3: "Reliability",
            content3: "A proven history of successful projects with companies, contractors, and homeowners reflects our commitment to effective communication. We keep clients informed every step of the way—sharing progress updates, timelines, and key project details to ensure confidence and clarity.",
            link3: "Get in Touch →",
          },
          about: {
            heading: "About",
            subheading1: "Mission Statement",
            content1: {
              a: "At JM Remodeling & Custom Framing, our mission is to uphold",
              b: "maintain",
              c: "across services, and deliver",
              d: "that clients can count on—whether we’re building a porch from the ground up, or tarping a home after a storm",
            },
            tenet1: "Distinguished Craft",
            tenet2: "Versatility",
            tenet3: "Reliability",
            subheading2: "Company History",
            content2: {
              a: "Founded by",
              b: "in 2024, JM Remodeling & Custom Framing was born from a legacy of hands-on experience and family tradition. Juan began his journey in residential construction at just 16, learning the ropes at his uncle’s company, Orozco Construction.",
              c: "Over the years, he honed his skills in a variety of trades including",
              d: "His growing expertise and reputation led to independent contracting opportunities, paving the way for him to launch his own business. Today, JM Remodeling & Custom Framing is recognized for its commitment to quality and roof framing excellence in particular.",
            },
            name: "Juan Manuel Orozco",
            trades: {
              a: "demolition",
              b: "painting",
              c: "carpentry",
              d: "cabinetry",
              e: "framing",
              f: "roofing",
            },
            subheading3: "Previous Customers",
            content3: "We've proudly worked with individual homeowners, contractors, and local developers who value our craftsmanship and reliability. Their continued trust is the foundation of our business.",
          },
          services: {
            heading: "Services",
            summary: "With over 20 years of hands-on experience in residential construction, JM Remodeling & Custom Framing brings expertise in structural and aesthetic work. Our commitment to quality and versatility ensures every project is completed with care and precision.",
            servicesList: {
              framing: "framing",
              carpentry: "carpentry", 
              woodenFences: "wooden fences",
              siding: "siding",
              windows: "windows",
              porch: "porch",
              additions: "additions",
              gardens: "gardens",
              exteriorDoors: "exterior doors",
              roofing: "roofing",
              demolitions: "demolitions",
              cornice: "cornice",
              decks: "decks"
            },
            highlighted: {
              framingRoofing: {
                title: "Framing & Roofing",
                description: "Precision-crafted structures that form the backbone of your home, paired with reliable roofing that ensures protection against the elements."
              },
              sidingWindows: {
                title: "Siding & Windows", 
                description: "Boost your home's curb appeal and energy efficiency with modern siding and expertly installed windows."
              },
              demolition: {
                title: "Demolition",
                description: "Safe and clean demolition services that prepare your space for the next chapter of construction."
              },
              porch: {
                title: "Porch",
                description: "Extend your living space with a custom-built porch designed for comfort and style."
              }
            }
          },
          contact: {
            heading: "Contact Information",
            contractor: "Contractor:",
            phone: "Phone:",
            email: "Email:",
            companyEmail: "Company Email:",
            customerService: "Customer Service:"
          }
        },
      },
      es: {
        translation: {
          header: {},
          footer: {
            copyright: "JM Remodeling & Custom Framing™. Todos los derechos reservados.",
          },
          navbar: {
            about: "Acerca de",
            services: "Servicios",
            contact: "Contacto",
          },
          home: {
            subheading1: "Artesanía distinguida",
            content1: "Con más de 20 años de experiencia en construcción residencial, JM Remodeling & Custom Framing ofrece experiencia, precisión y un compromiso con la calidad que nos distingue.",
            link1: "Conozca la Compañía →",
            subheading2: "Versatilidad",
            content2: "Ya sea que sea un propietario reconstruyendo después de un desastre o un contratista en busca de apoyo especializado, ofrecemos una amplia gama de servicios expertos. Desde carpintería y cercas hasta revestimiento, ventanas, porches, techos y más. Aportamos artesanía a cada proyecto.",
            link2: "Explora Nuestros Servicios →",
            subheading3: "Confiabilidad",
            content3: "Nuestro historial comprobado de proyectos exitosos con empresas, contratistas y propietarios refleja nuestro compromiso con una comunicación eficaz. Mantenemos a los clientes informados en cada etapa, compartiendo avances, cronogramas y detalles clave para garantizar confianza y claridad.",
            link3: "Contáctanos →",
          },
          about: {
            heading: "Acerca de",
            subheading1: "Declaración de Misión",
            content1: {
              a: "En JM Remodelación & Enmarcado Personalizado, nuestra misión es defender",
              b: "mantener",
              c: "en todos los servicios, y ofrecer",
              d: "en los que los clientes puedan confiar—ya sea que estemos construyendo un porche desde cero o cubriendo un techo después de una tormenta",
            },
            tenet1: "Artesanía distinguida",
            tenet2: "Versatilidad",
            tenet3: "Confiabilidad",

            subheading2: "Historia de la Empresa",
            content2: {
              a: "Fundado por",
              b: "en 2024, JM Remodelación & Enmarcado Personalizado nació de un legado de experiencia práctica y tradición familiar. Juan comenzó su trayectoria en la construcción residencial a los 16 años, aprendiendo en la empresa de su tío, Orozco Construction.",
              c: "A lo largo de los años perfeccionó sus habilidades en diversos oficios como",
              d: "Su creciente experiencia y reputación lo llevaron a oportunidades como contratista independiente, lo que le permitió lanzar su propio negocio. Hoy en día, JM Remodelación & Enmarcado Personalizado es reconocida por su compromiso con la calidad, especialmente en estructuras de techos.",
            },
            name: "Juan Manuel Orozco",
            trades: {
              a: "demolición",
              b: "pintura",
              c: "carpintería",
              d: "ebanistería",
              e: "estructuras",
              f: "techado",
            },

            subheading3: "Clientes Anteriores",
            content3: "Hemos trabajado con orgullo con propietarios, contratistas y desarrolladores locales que valoran nuestra artesanía y confiabilidad. Su continua confianza es la base de nuestro negocio.",
          },
          services: {
            heading: "Servicios",
            summary: "Con más de 20 años de experiencia práctica en construcción residencial, JM Remodelación & Enmarcado Personalizado aporta experiencia en trabajo estructural y estético. Nuestro compromiso con la calidad y versatilidad asegura que cada proyecto se complete con cuidado y precisión.",
            servicesList: {
              framing: "estructuras",
              carpentry: "carpintería",
              woodenFences: "cercas de madera",
              siding: "revestimiento",
              windows: "ventanas",
              porch: "porche",
              additions: "ampliaciones",
              gardens: "jardines",
              exteriorDoors: "puertas exteriores",
              roofing: "techado",
              demolitions: "demoliciones",
              cornice: "cornisa",
              decks: "terrazas"
            },
            highlighted: {
              framingRoofing: {
                title: "Estructuras y Techado",
                description: "Estructuras elaboradas con precisión que forman la columna vertebral de su hogar, combinadas con techado confiable que garantiza protección contra los elementos."
              },
              sidingWindows: {
                title: "Revestimiento y Ventanas",
                description: "Mejore el atractivo exterior de su hogar y la eficiencia energética con revestimiento moderno y ventanas instaladas por expertos."
              },
              demolition: {
                title: "Demolición",
                description: "Servicios de demolición seguros y limpios que preparan su espacio para el próximo capítulo de construcción."
              },
              porch: {
                title: "Porche",
                description: "Extienda su espacio de vida con un porche construido a medida diseñado para comodidad y estilo."
              }
            }
          },
          contact: {
            heading: "Información de Contacto",
            contractor: "Contratista:",
            phone: "Teléfono:",
            email: "Email:",
            companyEmail: "Email de la Empresa:",
            customerService: "Servicio al Cliente:"
          }
        },
      },
    },
  });

export default i18n;
