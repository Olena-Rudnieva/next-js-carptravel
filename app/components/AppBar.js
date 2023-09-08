import Image from 'next/image';

export default function AppBar() {
  return (
    <div class="flex justify-between items-center mb-9">
      <div>
        {/* <Image src="" alt="" /> */}
        <p class=" text-white">CarpTravel</p>
      </div>

      <p class="text-sm uppercase text-white">MENU</p>
    </div>
  );
}
