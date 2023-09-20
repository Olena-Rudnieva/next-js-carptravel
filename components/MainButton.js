'use client';

import { Link } from 'react-scroll/modules';
import { BottomLeft, BottomRight, TopLeft, TopRight } from './ButtonIcons';

export default function MainButton() {
  return (
    <Link
      tabIndex="0"
      to="contacts"
      spy={true}
      smooth={true}
      duration={500}
      className="cursor-pointer relative flex justify-center items-center mx-auto px-[93px] md:px-[68px] xl:px-[64px] py-[2px] md:py-[14px] xl:py-[16px] w-[280px] md:w-[230px] xl:w-[293px] text-white text-[18px] xl:text-[32px] font-bold leading-[48px] md:leading-[22px] xl:leading-[39px] uppercase bg-white bg-opacity-10  hover:bg-white hover:bg-opacity-20 focus:shadow-xl focus:outline-none transition-all duration-300 ease-linear"
    >
      JOIN NOW
      <TopRight />
      <BottomLeft />
      <TopLeft />
      <BottomRight />
    </Link>
  );
}
