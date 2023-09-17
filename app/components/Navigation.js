import { Link } from 'react-scroll/modules';
import { links } from '../data/links';

export default function Navigation() {
  return (
    <ul className="hidden md:flex gap-6 xl:gap-14 text-white cursor-pointer">
      {links.map((link) => (
        <li key={link.id}>
          <Link
            className="text-sm font-normal tracking-[1.4px] hover:underline focus:underline focus:outline-none"
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
