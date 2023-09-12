'use client';

import { Link } from 'react-scroll/modules';
import { BottomLeft, BottomRight, TopLeft, TopRight } from './ButtonIcons';

export default function MainButton() {
  return (
    <Link
      to="contacts"
      spy={true}
      smooth={true}
      duration={500}
      className="cursor-pointer"
    >
      <div className="relative flex justify-center items-center ml-auto mr-auto bg-white bg-opacity-10 md:bg-white md:bg-opacity-5 px-[64px] py-[18px] md:py-[14px] xl:py-[16px] w-[280px] md:w-[230px] md:h-[50px] xl:w-[294px] xl:h-[70px]  hover:bg-white hover:bg-opacity-20 focus:bg-white focus:bg-opacity-20 transition-all duration-300 ease-linear">
        <button
          type="button"
          className=" text-white text-lg xl:text-[32px] font-bold leading-[48px] uppercase"
        >
          JOIN NOW
          <TopRight />
          <BottomLeft />
          <TopLeft />
          <BottomRight />
        </button>
      </div>
    </Link>
  );
}
