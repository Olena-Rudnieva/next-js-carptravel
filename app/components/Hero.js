export default function Hero() {
  return (
    <div className="relative md:flex">
      <div>
        <h2 className="absolute top-[20px] right-[-10px] flex flex-wrap justify-end w-[118px] md:w-[247px] h-[52px] md:h-[88px] text-4xl md:text-[67px] font-thin tracking-[1.665px] md:tracking-[8.71px]  text-white">
          <span className="font-medium text-white tracking-0">7</span>
          DAYS
          <span className="text-xs md:text-sm font-light tracking-[9.48px] md:tracking-[24.9px] uppercase text-white ">
            journey
          </span>
        </h2>

        <h1 className="text-[40px] md:text-[67px] md:w-[426px] md:h-[243px] text-white font-thin leading-[56px] md:leading-[80px] tracking-[-1.6px] md:tracking-[-2.68px] uppercase pt-28 md:pt-0 mb-6 md:mb-[58px]">
          <span className="font-medium">Uncover </span>Carpathian’s Secrets
        </h1>
        <p className=" text-white w-[157px] md:w-[263px] text-[10px] md:text-sm font-extralight leading-4 mb-6 md:mb-0 md:tracking-[1.26px]">
          Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
        </p>
      </div>

      <div className="md:pt-[144px] flex flex-col justify-start text-justify ml-auto">
        <p className="text-white text-sm md:text-[16px] font-extralight leading-[20px] mb-6 md:mb:7 md:w-[230px] md:h-[120px]">
          We offer you unforgettable trips to the most beautiful parts of the
          Carpathians. Enjoy stunning views, exciting expeditions, and the best
          service!
        </p>
        <div className="flex justify-center items-center  ml-auto mr-auto bg-white bg-opacity-10 md:bg-white md:bg-opacity-5 px-[64px] py-[18px] md:py-[14px] w-[280px] md:w-[230px] md:h-[50px] ">
          <button
            type="button"
            className="text-white text-lg font-bold leading-[48px]"
          >
            <a href="#">JOIN NOW</a>
          </button>
        </div>
      </div>
    </div>
  );
}
