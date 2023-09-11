'use client';

import { Link } from 'react-scroll/modules';

export default function MobileMenu({ onClick }) {
  return (
    <div className="fixed top-0 left-0 z-20 w-screen h-screen bg-menu max-w-[480px] ">
      <div className="relative z-30 text-white h-full  ">
        <button
          type="button"
          onClick={onClick}
          class="absolute right-[20px] top-[43px] text-[14px] font-normal tracking-[1,4px] uppercase"
        >
          CLOSE
        </button>
        <nav>
          <ul className="flex flex-col gap-12  text-center pt-[170px] cursor-pointer">
            <li>
              <Link
                onClick={onClick}
                className="text-[18px] font-normal tracking-[1.8px]"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                onClick={onClick}
                className="text-[18px] font-normal tracking-[1.8px]"
                to="services"
                spy={true}
                smooth={true}
                duration={500}
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                onClick={onClick}
                className="text-[18px] font-normal tracking-[1.8px]"
                to="gallery"
                spy={true}
                smooth={true}
                duration={500}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                onClick={onClick}
                className="text-[18px] font-normal tracking-[1.8px]"
                to="contacts"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
