'use client';

import { Link } from 'react-scroll/modules';
import { links } from '../data/links';
import PropTypes from 'prop-types';

export default function MobileMenu({ onClick }) {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-20 w-screen h-screen bg-[rgb(1,10,5)] bg-opacity-[0.75] backdrop-blur-[25px]">
      <div className="relative z-30 text-white h-full px-[20px] py-[170px] mx-auto max-w-[480px] text-center">
        <button
          type="button"
          onClick={onClick}
          className="absolute right-[20px] top-[43px] text-[14px] font-normal tracking-[1.4px] transition duration-500 ease-in-out transform "
        >
          CLOSE
        </button>

        <nav>
          <ul className="flex flex-col gap-12  text-center cursor-pointer">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  tabIndex="0"
                  className="text-[18px] font-normal tracking-[1.8px] hover:underline focus:shadow-xl focus:outline-none focus:underline transition-all duration-500 ease-linear"
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
