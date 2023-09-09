'use client';

import Link from 'next/link';

export default function MobileMenu({ onClick }) {
  return (
    <div className="fixed top-0 left-0 z-20 w-screen h-screen bg-menu ">
      <div className="relative z-30 text-white h-full  max-w-[480px]">
        <button
          type="button"
          onClick={onClick}
          class="absolute right-[20px] top-[43px] text-[14px] font-normal tracking-[1,4px] uppercase"
        >
          CLOSE
        </button>
        <nav>
          <ul className="flex flex-col gap-12  text-center pt-[170px]">
            <li>
              <Link
                className="text-[18px] font-normal tracking-[1.8px]"
                href="#"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-[18px] font-normal tracking-[1.8px]"
                href="#"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="text-[18px] font-normal tracking-[1.8px]"
                href="#"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                className="text-[18px] font-normal tracking-[1.8px]"
                href="#"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className="text-[18px] font-normal tracking-[1.8px]"
                href="#"
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
