export default function About() {
  return (
    <section className="relative bg-aboutMobile bg-cover bg-right bg-middle md:bg-aboutTablet md:bg-center px-5 md:px-8 py-14 md:py-16 text-white">
      <div className="md:flex md:gap-[76px]">
        <h2 className="text-[40px] md:text-[67px] font-thin leading-[56px] tracking-[-1.6px] md:tracking-[-2.68px] uppercase mb-2 md:mb-0">
          WHO <span className="font-medium">WE ARE</span>
        </h2>
        <div>
          <p className="w-[180px] md:w-[220px] text-sm md:text-[16px] font-extralight  leading-5 mb-5 md:mb-4">
            <span className="font-normal">a team of enthusiasts </span>who are
            fully committed to the mission of creating unforgettable and
            extraordinary trips to the most beautiful parts of the Carpathians.
            Our goal is not just to show you the natural wonders of the
            mountains, but to provide you with a deep immersion in their magical
            atmosphere.
          </p>
          <p className="w-[180px] md:w-[220px] text-sm md:text-[16px] font-extralight  leading-5 mb-10 md:mb-16">
            <span className="font-normal">We believe </span>that nature has the
            power to inspire, strengthen character and provide new perspectives.
            Therefore, each of our tours is aimed at unlocking your potential,
            enriching your spiritual world and creating unforgettable memories.
          </p>
        </div>
      </div>
      <div className="md:absolute md:top-[449px] md:left-[32px]">
        <h3 className="text-sm md:text-[16px] font-normal leading-5 uppercase text-right mr-10 md:mr-[58px]">
          From vacationers
        </h3>
        <h3 className="text-sm md:text-[16px] font-normal leading-5 uppercase text-right">
          to active travelers
        </h3>
        <p className="text-sm md:text-[16px] font-extralight leading-5 tracking-[-0.14px] md:tracking-[0.32px] text-right mb-10">
          we have a tour for everyone.
        </p>
      </div>
      <p className="text-sm md:text-[16px] font-extralight leading-5 md:w-[463px] md:ml-auto">
        <span className="font-normal">We use methods </span>that are time-tested
        and proven. Our expert guides with in-depth knowledge of the Carpathian
        landscapes lead you safely through the mysteries of these mountains.
      </p>
    </section>
  );
}
