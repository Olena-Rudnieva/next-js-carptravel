'use client';

import React, { useState, useRef } from 'react';
import GalleryMobile from '@/components/GalleryMobile';
import GallerySwiper from '@/components/GallerySwiper';

export default function Gallery() {
  const goPrev = useRef(null);
  const goNext = useRef(null);
  const [_, setInit] = useState();

  const onInit = () => setInit(true);

  return (
    <section
      id="gallery"
      className="py-14 md:py-16 xl:py-20 md:text-center xl:text-start bg-gallery bg-cover text-white h-[801px] md:h-[575px] xl:h-[788px]"
    >
      <div className="container">
        <div className="relative z-10">
          <h2 className="text-[40px] md:text-[67px] xl:[98px] font-thin leading-[56px] md:leading-[81px] xl:leading-[119px] tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px] uppercase mb-6 md:mb-[72px] xl:mb-[24px]">
            OUR <span className="font-medium">GALLERY</span>
          </h2>
          <GalleryMobile />
          <GallerySwiper goPrev={goPrev} goNext={goNext} onInit={onInit} />
        </div>
      </div>
    </section>
  );
}
