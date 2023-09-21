'use client';

import ServiceCard from '../components/ServiceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { servicesData } from '../data/services';

export default function Services() {
  const servicesList = Object.values(
    servicesData.map((service) => service.listItem)
  );

  return (
    <section
      id="services"
      className="bg-services bg-cover bg-right text-white py-14 md:py-16 xl:py-[104px] h-[851px] md:h-[621px] xl:h-[779px]"
    >
      <div className="container ">
        <div className="relative">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            modules={[Pagination, A11y, EffectFade]}
            loop={true}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
              renderBullet: function (index, className) {
                return (
                  '<div class="' +
                  className +
                  '">' +
                  servicesList[index] +
                  '</div>'
                );
              },
            }}
          >
            {servicesData.map((service) => (
              <SwiperSlide key={service.number}>
                <ServiceCard service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination absolute  w-[188px] md:w-[204px] xl:w-[254px] flex flex-col gap-4 xl:gap-6 uppercase text-[20px] md:text-[22px] xl:text-[24px] font-medium leading-[17px] md:leading-[18px] xl:leading-[24px]">
            {servicesList.map((item, ind) => (
              <div
                key={ind}
                className="text-transparent text-[20px] md:text-[22px] xl:text-[24px] font-medium leading-[17px] md:leading-[18px] xl:leading-[24px] w-[188px] md:w-[204px] xl:w-[254px]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
