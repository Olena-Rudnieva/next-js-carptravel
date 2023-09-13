export default function About() {
  return (
    <section
      id="about"
      className="relative bg-about bg-cover bg-center bg-middle md:bg-center py-14 md:py-16 xl:pt-[120px] xl:pb-[104px] text-white h-[873px] md:h-[697px] xl:h-[824px]"
    >
      <div className="container">
        <div className="md:flex md:gap-[76px] xl:gap-6">
          <h2 className="text-[40px] md:text-[67px] xl:text-[98px] font-thin leading-[56px] xl:leading-[77px] tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px] uppercase mb-2 md:mb-0">
            WHO <span className="font-medium">WE ARE</span>
          </h2>
          <div>
            <p className="w-[180px] md:w-[220px] xl:w-[292px] text-sm md:text-[16px] xl:text-[18px] font-extralight  leading-5 xl:leading-6 mb-5 md:mb-4 xl:mb-6">
              <span className="font-normal">a team of enthusiasts </span>who are
              fully committed to the mission of creating unforgettable and
              extraordinary trips to the most beautiful parts of the
              Carpathians. Our goal is not just to show you the natural wonders
              of the mountains, but to provide you with a deep immersion in
              their magical atmosphere.
            </p>
            <p className="w-[180px] md:w-[220px] xl:w-[292px] text-sm md:text-[16px] xl:text-[18px] font-extralight leading-5 xl:leading-6 mb-10 md:mb-16 xl:mb-[72px]">
              <span className="font-normal">We believe </span>that nature has
              the power to inspire, strengthen character and provide new
              perspectives. Therefore, each of our tours is aimed at unlocking
              your potential, enriching your spiritual world and creating
              unforgettable memories.
            </p>
          </div>
        </div>
        <div className="md:absolute md:top-[449px] md:left-[32px] xl:top-[646px]  xl:right-[104px]">
          <h3 className="text-sm md:text-[16px] xl:text-[18px] font-normal leading-5 xl:leading-6 uppercase text-right mr-10 md:mr-[58px] xl:mr-[120px]">
            From vacationers
          </h3>
          <h3 className="text-sm md:text-[16px] xl:text-[18px] font-normal leading-5 xl:leading-6 uppercase text-right">
            to active travelers
          </h3>
          <p className="text-sm md:text-[16px] xl:text-[18px] font-extralight leading-5 xl:leading-6 tracking-[-0.14px] md:tracking-[0.32px] xl:tracking-[2.16px] text-right mb-10 md:mb-0">
            we have a tour for everyone.
          </p>
        </div>
        <p className="text-sm md:text-[16px] xl:text-[18px] font-extralight leading-5 xl:leading-6 md:w-[463px] xl:w-[605px] md:ml-auto xl:ml-0 xl:mr-auto">
          <span className="font-normal">We use methods </span>that are
          time-tested and proven. Our expert guides with in-depth knowledge of
          the Carpathian landscapes lead you safely through the mysteries of
          these mountains.
        </p>
      </div>
    </section>
  );
}
