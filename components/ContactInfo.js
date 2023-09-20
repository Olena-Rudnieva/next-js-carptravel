import { socials } from '@/data/socials';

export default function ContactInfo() {
  return (
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
          {socials.map((social) => (
            <li key={social.id}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-sm md:text-base font-normal leading-6 hover:underline"
              >
                {social.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
