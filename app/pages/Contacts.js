import ContactForm from '../components/ContactForm';

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="py-14 md:py-16 xl:py-[104px] bg-contacts bg-center bg-cover  text-white h-[856px] md:h-[691px] xl:h-[762px]"
    >
      <div className="container">
        <h2 className="text-[40px] md:text-[67px] xl:text-[98px] font-thin leading-[56px] md:leading-[66px] xl:leading-[119px] tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px] uppercase mb-9 md:mb-10 xl:mb-[74px]">
          Contact <span className="font-medium">US</span>
        </h2>
        <div className="xl:flex xl:gap-[231px]">
          <div className="md:flex md:gap-[90px] xl:gap-[0]  xl:flex-col xl:justify-between  ">
            <div>
              <div className="flex justify-end md:justify-start mb-6">
                <ul className="md:ml-16 xl:ml-[117px]  ">
                  <li>
                    <a
                      className="text-sm md:text-base font-normal leading-6"
                      href="tel:+380981234564"
                    >
                      +38 (098) 12 34 567
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sm md:text-base font-normal leading-6"
                      href="tel:+380731234564"
                    >
                      +38 (073) 12 34 567
                    </a>
                  </li>
                </ul>
                <p className="text-xs font-extralight leading-5 ml-5 ">
                  Phone number
                </p>
              </div>

              <div className="flex justify-end md:justify-start mb-[24px] xl:mb-0 xl:ml-[83px] ">
                <a
                  className="text-sm md:text-base font-normal leading-6 md:ml-[34px] xl:ml-0 "
                  href="mailto:info@devstudio.com"
                >
                  support@carptravel.com
                </a>
                <p className="text-xs font-extralight leading-5 ml-5 mr-[46px]">
                  E-mail
                </p>
              </div>
            </div>

            <div className="relative flex justify-end md:justify-start mb-3 md:mb-16 xl:mb-0 xl:justify-end xl:text-right xl:mr-[101px]">
              <p className="text-xs font-extralight leading-5 mr-5 xl:mr-0 xl:absolute xl:right-[-70px]">
                Follow us
              </p>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-sm md:text-base font-normal leading-6 hover:underline"
                  >
                    facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-sm md:text-base font-normal leading-6 mr-[15px] md:mr-0 hover:underline"
                  >
                    instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-sm md:text-base font-normal leading-6 hover:underline"
                  >
                    youtube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-sm md:text-base font-normal leading-6 hover:underline"
                  >
                    tiktok
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
