import Image from 'next/image';
import Logo from '../../public/logo.png';

export default function AppBar() {
  return (
    <header className="pb-9 md:pb-16">
      <nav class="flex justify-between items-center ">
        <div>
          <Image src={Logo} width={61} height={33} alt="Logo" />
        </div>
        <button
          type="button"
          class="md:hidden text-[14px] font-normal tracking-[1,4px] uppercase text-white"
        >
          MENU
        </button>
        <ul className="hidden md:flex gap-6 text-white">
          <li>About</li>
          <li>Services</li>
          <li>Career</li>
          <li>Gallery</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
}
