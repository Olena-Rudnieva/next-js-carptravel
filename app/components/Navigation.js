import { Link } from 'react-scroll/modules';

export default function Navigation() {
  return (
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
  );
}
