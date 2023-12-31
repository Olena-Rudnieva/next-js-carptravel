import { Link } from 'react-scroll/modules';
import { links } from '../data/links';

export default function AppBarNavigation() {
  return (
    <ul className="hidden md:flex gap-6 xl:gap-14 text-white cursor-pointer">
      {links.map((link) => (
        <li key={link.id}>
          <Link
            tabIndex="0"
            className="text-sm font-normal tracking-[1.4px] hover:underline focus:shadow-xl focus:outline-none focus:underline transition-all duration-500 ease-linear"
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
  );
}
