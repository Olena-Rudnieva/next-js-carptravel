'use client';

import img1 from '../../public/services/service1-img.jpg';
import img2 from '../../public/services/service2-img.jpg';
import img3 from '../../public/services/service3-img.jpg';
import img4 from '../../public/services/service4-img.jpg';
import img5 from '../../public/services/service5-img.jpg';
import ServiceCard from '../components/ServiceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const servicesData = [
  {
    number: '01',
    listItem: 'ATVs Traveling',
    callText: 'Feel the adrenaline rush',
    description:
      'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
    photo: img1,
  },
  {
    number: '02',
    listItem: 'Rock climbing',
    callText: 'Destroy your limitations',
    description:
      'Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.',
    photo: img2,
  },
  {
    number: '03',
    listItem: 'Hot air ballooning',
    callText: 'Get inspired',
    description:
      'Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.',
    photo: img3,
  },
  {
    number: '04',
    listItem: 'Skydiving',
    callText: 'Overcome your fears',
    description:
      "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
    photo: img4,
  },
  {
    number: '05',
    listItem: 'Rafting',
    callText: 'Trust the flow',
    description:
      'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
    photo: img5,
  },
];

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
            // onSlideChange={() => console.log('change')}
            // onSwiper={(swiper) => console.log(swiper)}
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
                  '<div className="' +
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
                className="text-[20px] md:text-[22px] xl:text-[24px] font-medium leading-[17px] md:leading-[18px] xl:leading-[24px] w-[188px] md:w-[204px] xl:w-[254px]"
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
