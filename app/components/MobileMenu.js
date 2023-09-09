'use client';

import About from './About';

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
              <a className="text-[18px] font-normal tracking-[1.8px]" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-[18px] font-normal tracking-[1.8px]" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="text-[18px] font-normal tracking-[1.8px]" href="#">
                Career
              </a>
            </li>
            <li>
              <a className="text-[18px] font-normal tracking-[1.8px]" href="#">
                Gallery
              </a>
            </li>
            <li>
              <a
                className="text-[18px] font-normal tracking-[1.8px]"
                to={About}
                smooth={true}
                duration={500}
                offset={50}
                onClick={onClick}
              >
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
