'use client';

import { Link } from 'react-scroll/modules';
import { links } from '../data/links';
import PropTypes from 'prop-types';

export default function MobileMenu({ onClick }) {
  return (
    <div className="fixed top-0 left-0 z-20 w-screen h-screen bg-menu max-w-[480px] ">
      <div className="relative z-30 text-white h-full  ">
        <button
          type="button"
          onClick={onClick}
          className="absolute right-[20px] top-[43px] text-[14px] font-normal tracking-[1,4px] uppercase"
        >
          CLOSE
        </button>
        <nav>
          <ul className="flex flex-col gap-12  text-center pt-[170px] cursor-pointer">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  className="text-[18px] font-normal tracking-[1.8px] hover:underline focus:underline focus:outline-none"
                  onClick={onClick}
                  to={link.path}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

MobileMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};
