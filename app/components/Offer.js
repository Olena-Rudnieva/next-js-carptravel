import Image from 'next/image';
import offerImg1 from '../../public/offer1-img.jpg';
export default function Offer() {
  return (
    <section className="bg-offer1 bg-cover bg-right text-white px-5 py-14">
      <h2 className="text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase mb-6">
        WE <span className="font-medium">OFFER</span>
      </h2>
      <p className="text-[43px] font-thin text-right">
        01/<span className="text-white text-opacity-20">05</span>
      </p>
      <Image src={offerImg1} alt="Offer 1" className="mb-3" />
      <p className="text-xs font-extralight leading-6 tracking-[2.4px] text-right mb-6">
        Feel the adrenaline rush
      </p>
      <ul className="text-xl font-extralight leading-[17px] uppercase text-white text-opacity-50 mb-[54px]">
        <li className="mb-4">ATVs Traveling</li>
        <li className="mb-4">Rock climbing</li>
        <li className="mb-4">Hot air ballooning</li>
        <li className="mb-4">Skydiving</li>
        <li className="">Rafting</li>
      </ul>
      <p className="text-sm font-extralight leading-5">
        Join exciting rafting expeditions on the waterways of the Carpathians.
        Go through challenging waterways and overcome gusty waves, feel the
        adrenaline, and enjoy the incredible views of the surrounding mountains.
      </p>
    </section>
  );
}
