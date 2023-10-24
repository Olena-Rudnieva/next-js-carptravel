import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import { GalleryNavigation } from '@/components/GalleryNavigation';
import Image from 'next/image';
import { galleryData } from '@/data/gallery';
import PropTypes from 'prop-types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

export default function GallerySwiper({ goPrev, goNext, onInit }) {
  return (
    <div className="hidden md:block">
      <Swiper
        effect={'coverflow'}
        modules={[Navigation, A11y, Autoplay, EffectCoverflow]}
        spaceBetween={24}
        navigation={{
          prevEl: goPrev.current,
          nextEl: goNext.current,
        }}
        onInit={onInit}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        loopPreventsSliding={false}
        loopedSlides={1}
        grabCursor={true}
        wrapperTag="ul"
        centeredSlides={true}
        slidesPerView={2}
        speed={1500}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1.32,
          slideShadows: false,
        }}
        breakpoints={{
          768: {
            coverflowEffect: {
              rotate: 0,
              stretch: 60,
              depth: 0,
              modifier: 1.32,
              scale: 0.55,
            },
          },
          1280: {
            coverflowEffect: {
              rotate: 0,
              stretch: 120,
              depth: 0,
              modifier: 1.32,
              scale: 0.55,
            },
          },
        }}
      >
        {galleryData.map((picture) => (
          <SwiperSlide key={picture.id}>
            <div>
              <Image
                src={picture.src}
                alt={picture.title}
                className="xl:min-w-[606px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <GalleryNavigation goPrev={goPrev} goNext={goNext} />
    </div>
  );
}

GallerySwiper.propTypes = {
  goPrev: PropTypes.shape({
    current: PropTypes.object,
  }),
  goNext: PropTypes.shape({
    current: PropTypes.object,
  }),
  onInit: PropTypes.func.isRequired,
};
