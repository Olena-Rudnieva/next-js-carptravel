import Image from 'next/image';
import offerImg1 from '../../public/offer1-img.jpg';
export default function Offer() {
  return (
    <section class="bg-offer1 bg-cover bg-right text-white px-5 py-14">
      <h2 class="text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase mb-6">
        WE <span class="font-medium">OFFER</span>
      </h2>
      <p class="text-[43px] font-thin text-right">
        01/<span class="text-white text-opacity-20">05</span>
      </p>
      <Image src={offerImg1} alt="Offer 1" class="mb-3" />
      <p class="text-xs font-extralight leading-6 tracking-[2.4px] text-right mb-6">
        Feel the adrenaline rush
      </p>
      <ul class="text-xl font-extralight leading-[17px] uppercase text-white text-opacity-50 mb-[54px]">
        <li class="mb-4">ATVs Traveling</li>
        <li class="mb-4">Rock climbing</li>
        <li class="mb-4">Hot air ballooning</li>
        <li class="mb-4">Skydiving</li>
        <li class="">Rafting</li>
      </ul>
      <p class="text-sm font-extralight leading-5">
        Join exciting rafting expeditions on the waterways of the Carpathians.
        Go through challenging waterways and overcome gusty waves, feel the
        adrenaline, and enjoy the incredible views of the surrounding mountains.
      </p>
    </section>
  );
}
