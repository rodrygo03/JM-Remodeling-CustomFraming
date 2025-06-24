import { t } from 'i18next';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const galleryImages = import.meta.glob('../assets/services-gallery/gallery/IMG_*.JPG', {
  eager: true,
  as: 'url',
});

const imageUrls = [
  galleryImages['../assets/services-gallery/gallery/IMG_1.JPG'],
  galleryImages['../assets/services-gallery/gallery/IMG_5.JPG'],
  galleryImages['../assets/services-gallery/gallery/IMG_4.JPG'],
  
  galleryImages['../assets/services-gallery/gallery/IMG_6.JPG'],
  galleryImages['../assets/services-gallery/gallery/IMG_13.JPG'],
  galleryImages['../assets/services-gallery/gallery/IMG_19.JPG'],
  
  
  galleryImages['../assets/services-gallery/gallery/IMG_11.JPG'],
  galleryImages['../assets/services-gallery/gallery/IMG_16.JPG'],
  galleryImages['../assets/services-gallery/gallery/IMG_20.JPG'],

  galleryImages['../assets/services-gallery/gallery/IMG_21.JPG'],
  galleryImages['../assets/services-gallery/gallery/IMG_18.JPG'],
  galleryImages['../assets/services-gallery/gallery/IMG_2.JPG'],

  galleryImages['../assets/services-gallery/gallery/IMG_14.JPG'],
];

export default function ServicesHeroCarousel() {
  return (
    <div className="w-full relative">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={5000}
        transitionTime={1000}
        className="max-h-[70vh]"
      >
        {imageUrls.map((src, idx) => (
          <div key={idx}>
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="object-cover h-[50vh] md:h-[70vh] w-full"
            />
          </div>
        ))}
      </Carousel>

      {/* Foreground heading */}
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        z-10 text-5xl font-extrabold text-white text-center px-4 drop-shadow-md animate-fade-in-up">
        {t('services.heading')}
      </h1>
      <div className="absolute inset-0 bg-black/50 z-0" />
    </div>
  );
}
