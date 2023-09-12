'use client';

import Image from 'next/image';
import img1 from '../../public/gallery-3.png';
import img2 from '../../public/gallery-1.png';
import img3 from '../../public/gallery-2.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import { Controller } from 'swiper/modules';
import React, { useState } from 'react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const galleryData = [
  { id: 1, src: img1, title: 'Picturesque mountains' },
  { id: 2, src: img2, title: 'Mountain lake' },
  { id: 3, src: img3, title: 'Сottage in the forest' },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-14 md:py-16 xl:py-20 md:text-center bg-gallery bg-cover text-white h-[801px] md:h-[575px] xl:h-[788px]"
    >
      <div className="container">
        <h2 className="text-[40px] md:text-[67px] font-thin leading-[56px] md:leading-[81px] tracking-[-1.6px]  md:tracking-[-2.68px]  uppercase mb-6 md:mb-[72px]">
          OUR <span className="font-medium">GALLERY</span>
        </h2>

        <ul className="flex flex-col gap-5 md:hidden">
          {galleryData.map((picture) => (
            <li key={picture.id}>
              <Image
                className="w-[280px] h-[187px] mx-auto"
                src={picture.src}
                alt={picture.title}
              />
            </li>
          ))}
        </ul>

        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            // navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {galleryData.map((picture) => (
              <SwiperSlide key={picture.id}>
                <div>
                  <Image
                    src={picture.src}
                    alt={picture.title}
                    className="md:w-[415px] md:h-[294px] xl:w-[606px] xl:h-[429px] md:mx-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
