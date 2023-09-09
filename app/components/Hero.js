export default function Hero() {
  return (
    <div className="relative">
      <h2 className="absolute top-0 right-0 flex flex-wrap justify-end w-[118px] text-4xl font-thin tracking-[1.665px] text-white">
        <span className="font-medium text-white">7</span>DAYS
        <span className="text-xs font-light tracking-[9.48px] uppercase text-white ">
          journey
        </span>
      </h2>

      <h1 className="text-[40px] md:text-[67px] md:w-[426px] text-white font-thin leading-[56px] tracking-[-1.6px] uppercase pt-28 mb-6">
        <span className="font-medium">Uncover </span>Carpathian’s Secrets
      </h1>
      <p className="text-white w-[157px] text-[10px] font-extralight leading-4 mb-6">
        Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
      </p>

      <p className="text-white text-sm font-extralight leading-5 mb-6">
        We offer you unforgettable trips to the most beautiful parts of the
        Carpathians. Enjoy stunning views, exciting expeditions, and the best
        service!
      </p>
      <div className="flex justify-center items-center bg-white bg-opacity-10 px-[64px] py-[18px] w-[280px] mx-auto">
        <button
          type="button"
          className="text-white text-lg font-bold leading-[48px]"
        >
          <a href="#">JOIN NOW</a>
        </button>
      </div>
    </div>
  );
}
