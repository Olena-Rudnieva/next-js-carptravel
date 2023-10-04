import { AboutData } from '@/data/contextData/about';

export default function About() {
  const { title, text1, text2, callToAction, text3 } = AboutData;

  return (
    <section
      id="about"
      className="relative bg-aboutMobile md:bg-aboutTablet xl:bg-aboutDesktop bg-cover bg-center bg-middle md:bg-center py-[54px] md:py-16 xl:pt-[120px] xl:pb-[104px] text-white h-[873px] md:h-[697px] xl:h-[824px]"
    >
      <div className="container">
        <div className="md:flex md:gap-[76px] xl:gap-6">
          <h2 className="text-[40px] md:text-[67px] xl:text-[98px] font-thin leading-[56px] xl:leading-[77px] tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px] uppercase mb-2 md:mb-0">
            {title.thin} <span className="font-medium">{title.bold}</span>
          </h2>
          <div>
            <p className="w-[180px] md:w-[220px] xl:w-[292px] text-sm md:text-[16px] xl:text-[18px] font-extralight  leading-5 xl:leading-6 mb-5 md:mb-4 xl:mb-6">
              <span className="font-normal">{text1.bold}</span>
              {text1.thin}
            </p>
            <p className="w-[180px] md:w-[220px] xl:w-[292px] text-sm md:text-[16px] xl:text-[18px] font-extralight leading-5 xl:leading-6 mb-10 md:mb-16 xl:mb-[72px]">
              <span className="font-normal">{text2.bold}</span>
              {text2.thin}
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="md:absolute md:bottom-[124px] xl:bottom-0 xl:right-0 ">
            <h3 className="text-sm md:text-[16px] xl:text-[18px] font-normal leading-5 xl:leading-6 uppercase text-right mr-10 md:mr-[58px] xl:mr-[120px]">
              {callToAction.firstPart}
            </h3>
            <h3 className="text-sm md:text-[16px] xl:text-[18px] font-normal leading-5 xl:leading-6 uppercase text-right">
              {callToAction.secondPart}
            </h3>
            <p className="text-sm md:text-[16px] xl:text-[18px] font-extralight leading-5 xl:leading-6 tracking-[-0.14px] md:tracking-[0.32px] xl:tracking-[2.16px] text-right mb-10 md:mb-0">
              {callToAction.text}
            </p>
          </div>
          <p className="text-sm md:text-[16px] xl:text-[18px] font-extralight leading-5 xl:leading-6 md:w-[463px] xl:w-[605px] md:ml-auto xl:ml-0 xl:mr-auto">
            <span className="font-normal">{text3.bold}</span>
            {text3.thin}
          </p>
        </div>
      </div>
    </section>
  );
}
