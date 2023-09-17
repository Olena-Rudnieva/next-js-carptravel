'use client';

import Image from 'next/image';
import Logo from '../../public/logo.png';

import { useState } from 'react';
import MobileMenu from './MobileMenu';
import Navigation from './Navigation';
import Link from 'next/link';

export default function AppBar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => setMobileMenu(!mobileMenu);

  return (
    <header className="relative z-50 pt-9 md:pt-6 pb-9 md:pb-16 xl:pb-[72px] ">
      <div className="container">
        <nav className="flex justify-between items-center ">
          <Link href="/">
            <Image
              src={Logo}
              width={61}
              height={33}
              alt="Logo"
              className="h-[33px]"
            />
          </Link>
          <button
            type="button"
            className="md:hidden text-[14px] font-normal tracking-[1,4px] uppercase text-white"
            onClick={toggleMenu}
          >
            MENU
          </button>
          {mobileMenu && (
            <div>
              <MobileMenu onClick={toggleMenu} />
            </div>
          )}
          <Navigation />
        </nav>
      </div>
    </header>
  );
}
