export default function Hero() {
  return (
    <div className="relative md:flex">
      <div>
        <h2 className="absolute top-[20px] right-[-10px] xl:top-[40px] xl:right-0 flex flex-wrap justify-end w-[118px] md:w-[247px] xl:w-[306px] h-[52px] md:h-[88px] xl:h-[123px] text-4xl md:text-[67px] xl:text-[98px] font-thin tracking-[1.665px] md:tracking-[8.71px] xl:tracking-normal  text-white">
          <span className="font-medium text-white tracking-0">7</span>
          DAYS
          <span className="text-xs md:text-sm xl:text-[16px] font-light tracking-[9.48px] md:tracking-[24.9px] xl:tracking-[31.48px] uppercase text-white ">
            journey
          </span>
        </h2>

        <h1 className="text-[40px] md:text-[67px] xl:text-[98px] md:w-[426px] xl:w-[646px] md:h-[243px] xl:h-[357px] text-white font-thin leading-[56px] md:leading-[80px] xl:leading-[123px] tracking-[-1.6px] md:tracking-[-2.68px]  xl:tracking-[-3.92px] uppercase pt-28 md:pt-0 mb-6 md:mb-[58px]">
          <span className="font-medium">Uncover </span>Carpathian’s Secrets
        </h1>
        <p className=" text-white w-[157px] md:w-[263px] xl:w-full text-[10px] md:text-sm xl:text-base	font-extralight leading-4 mb-6 md:mb-0 md:tracking-[1.26px] xl:tracking-[1.44px]">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
      </div>

      <div className="md:pt-[144px] flex flex-col justify-start text-justify ml-auto xl:mt-auto">
        <p className="text-white text-sm md:text-[16px] xl:text-[18px] font-extralight leading-[20px] xl:leading-6 mb-6 md:mb-7 md:w-[230px] xl:w-[294px] md:h-[120px]">
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </p>
        <div className="flex justify-center items-center   ml-auto mr-auto  bg-white bg-opacity-10 md:bg-white md:bg-opacity-5 px-[64px] py-[18px] md:py-[14px] xl:py-[16px] w-[280px] md:w-[230px] md:h-[50px] xl:w-[294px] xl:h-[70px] ">
          <button
            type="button"
            className="text-white text-lg xl:text-[32px] font-bold leading-[48px]"
          >
            JOIN NOW
            {/* <Link to={Contacts} smooth={true} duration={500} offset={50}>
              JOIN NOW
            </Link> */}
            {/* <a href="#">JOIN NOW</a> */}
          </button>
        </div>
      </div>
    </div>
  );
}
//
