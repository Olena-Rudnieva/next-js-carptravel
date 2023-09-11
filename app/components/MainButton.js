import { BottomLeft, BottomRight, TopLeft, TopRight } from './ButtonIcons';

export default function MainButton() {
  return (
    <div className="relative flex justify-center items-center   ml-auto mr-auto  bg-white bg-opacity-10 md:bg-white md:bg-opacity-5 px-[64px] py-[18px] md:py-[14px] xl:py-[16px] w-[280px] md:w-[230px] md:h-[50px] xl:w-[294px] xl:h-[70px] ">
      <button
        type="button"
        className=" text-white text-lg xl:text-[32px] font-bold leading-[48px]"
      >
        JOIN NOW
        {/* <Link to={contacts} smooth={true} duration={500} offset={50}>
          JOIN NOW
        </Link> */}
        {/* <Link to={Contacts} smooth={true} duration={500} offset={50}>
              JOIN NOW
            </Link> */}
        {/* <a href="#">JOIN NOW</a> */}
        {/* <BottomRight /> */}
        <BottomRight />
        <TopRight />
        <BottomLeft />
        <TopLeft />
      </button>
    </div>
  );
}
