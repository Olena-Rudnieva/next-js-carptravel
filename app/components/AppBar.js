'use client';

import Image from 'next/image';
import Logo from '../../public/logo.png';
import { Link } from 'react-scroll/modules';

import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function AppBar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => setMobileMenu(!mobileMenu);

  return (
    <header className="pb-9 md:pb-16 xl:pb-[72px]">
      <nav class="flex justify-between items-center ">
        <div>
          <Image src={Logo} width={61} height={33} alt="Logo" />
        </div>
        <button
          type="button"
          class="md:hidden text-[14px] font-normal tracking-[1,4px] uppercase text-white"
          onClick={toggleMenu}
        >
          MENU
        </button>
        {mobileMenu && (
          <div>
            <MobileMenu onClick={toggleMenu} />
          </div>
        )}
        <ul className="hidden md:flex gap-6 xl:gap-14 text-white cursor-pointer">
          <li>
            <Link
              className="text-sm font-normal tracking-[1.4px] hover:underline"
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
              className="text-sm font-normal tracking-[1.4px] hover:underline"
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
              className="text-sm font-normal tracking-[1.4px] hover:underline"
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
              className="text-sm font-normal tracking-[1.4px] hover:underline"
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
    </header>
  );
}
