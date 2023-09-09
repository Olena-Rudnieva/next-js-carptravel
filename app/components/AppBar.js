import Image from 'next/image';
import Logo from '../../public/logo.png';

export default function AppBar() {
  return (
    <header class="flex justify-between items-center pb-9 ">
      <div>
        {/* <Image src="" alt="" /> */}
        {/* <Image alt="Logo" width="59" /> */}
        {/* <p class="font-[Karantina] text-white">CarpTravel</p> */}
        <Image src={Logo} width={61} height={33} alt="Logo" />
      </div>

      <button
        type="button"
        class="text-[14px] font-normal tracking-[1,4px] uppercase text-white"
      >
        MENU
      </button>
    </header>
  );
}
