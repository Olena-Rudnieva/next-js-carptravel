import Image from 'next/image';

export default function ServiceCard(card) {
  return (
    <div>
      <div className="text-white">
        <div className="md:flex md:gap-[170px] xl:gap-[162px]">
          <h2 className="text-[40px] md:text-[67px] xl:text-[98px] font-thin leading-[56px] md:leading-[78px] xl:leading-[119px] tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px] uppercase mb-6 md:mb-9 xl:mb-[23px]">
            WE <span className="font-medium">OFFER</span>
          </h2>
        </div>
        <p className="text-[43px] leading-[52px] md:text-[67px] md:leading-[78px] xl:leading-[119px] xl:text-[98px] font-thin text-right mb-4">
          <span>{card.number}</span>/
          <span className="text-white text-opacity-20">05</span>
        </p>

        {/* <div className="md:flex md:gap-5">
        <Image
          src={card.photo}
          alt="Offer 1"
          className="mb-3 md:mb-0 xl:mb-0 w-[280px] h-[213px] md:w-[463px] md:h-[370px] xl:w-[607px] xl:h-[429px]"
        /> */}

        <div>
          {/* <p className="text-xs font-extralight leading-6 tracking-[2.4px] text-right mb-6 md:absolute md:top-[379px] md:right-[60px] xl:top-[218px] xl:right-[209px]">
            {card.callText}
          </p> */}
          {/* <ul className="text-xl md:text-[22px] xl:text-[28px] font-extralight leading-[17px] md:leading-[18px] xl:leading-[24px] uppercase text-white text-opacity-50  xl:mb-[23px]  md:max-w-[220px] xl:max-w-[250px]">
            <li className="mb-4 xl:mb-6">ATVs Traveling</li>
            <li className="mb-4 xl:mb-6">Rock climbing</li>
            <li className="mb-4 xl:mb-6">Hot air ballooning</li>
            <li className="mb-4 xl:mb-6">Skydiving</li>
            <li className="">Rafting</li>
          </ul> */}

          {/* <div>
            <p className="absolute bottom-[56px] text-sm md:text-[13px] md:bottom-[64px] md:w-[221px] xl:text-[18px] xl:bottom-[104px]  xl:right-[104px] font-extralight leading-5 xl:leading-6 xl:w-[293px] xl:text-justify">
              {card.description}
            </p>
          </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
