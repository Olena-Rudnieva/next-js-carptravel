import Image from 'next/image';
import offerImg1 from '../../public/offer1-img.jpg';
export default function Offer() {
  return (
    <section className="relative bg-offer1 bg-cover bg-right text-white px-5 py-14 md:px-8 md:py-16 xl:p-[104px] h-[851px] md:h-[621px] xl:h-[779px]">
      <div className="md:flex md:gap-[170px] xl:gap-[162px]">
        <h2 className="text-[40px] md:text-[67px] xl:text-[98px] font-thin leading-[56px] md:leading-[78px] xl:leading-[119px] tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px] uppercase mb-6 md:mb-9 xl:mb-[23px]">
          WE <span className="font-medium">OFFER</span>
        </h2>
        <p className="text-[43px] md:text-[67px] md:leading-[78px] xl:leading-[119px] xl:text-[98px] font-thin text-right">
          01/<span className="text-white text-opacity-20">05</span>
        </p>
      </div>
      <div className="md:flex md:gap-5">
        <Image
          src={offerImg1}
          alt="Offer 1"
          className="mb-3 xl:mb-0 md:w-[463px] md:h-[370px] xl:w-[607px] xl:h-[429px]"
        />

        <div>
          <p className="text-xs font-extralight leading-6 tracking-[2.4px] text-right mb-6 md:absolute md:top-[379px] md:right-[60px]">
            Feel the adrenaline rush
          </p>
          <ul className="text-xl md:text-[22px] xl:text-[28px] font-extralight leading-[17px] md:leading-[18px] xl:leading-[24px] uppercase text-white text-opacity-50 mb-[83px] md:max-w-[220px] xl:max-w-[250px]">
            <li className="mb-4">ATVs Traveling</li>
            <li className="mb-4">Rock climbing</li>
            <li className="mb-4">Hot air ballooning</li>
            <li className="mb-4">Skydiving</li>
            <li className="">Rafting</li>
          </ul>
          <p className="text-sm md:text-[13px] font-extralight leading-5">
            Join exciting rafting expeditions on the waterways of the
            Carpathians. Go through challenging waterways and overcome gusty
            waves, feel the adrenaline, and enjoy the incredible views of the
            surrounding mountains.
          </p>
        </div>
      </div>
    </section>
  );
}
