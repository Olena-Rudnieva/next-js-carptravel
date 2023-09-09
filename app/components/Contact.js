import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section className="px-5 py-14 bg-contact bg-center bg-cover text-white">
      <h2 className="text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase mb-9">
        Contact <span class="font-medium">US</span>
      </h2>
      <div>
        <div className="flex justify-end mb-6">
          <ul>
            <li>
              <a
                className="text-sm font-normal leading-6"
                href="tel:+380981234564"
              >
                +38 (098) 12 34 567
              </a>
            </li>
            <li>
              <a
                className="text-sm font-normal leading-6"
                href="tel:+380731234564"
              >
                +38 (073) 12 34 567
              </a>
            </li>
          </ul>
          <p className="text-xs font-extralight leading-5 ml-5 mb-[56px]">
            Phone number
          </p>
        </div>

        <div className="flex justify-end mb-[26px]">
          <a
            className="text-sm font-normal leading-6"
            href="mailto:info@devstudio.com"
          >
            support@carptravel.com
          </a>
          <p className="text-xs font-extralight leading-5 ml-5 mr-[46px]">
            E-mail
          </p>
        </div>
      </div>

      <div className="flex justify-end mb-3">
        <p className="text-xs font-extralight leading-5 mr-5">Follow us</p>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-sm font-normal leading-6 hover:underline"
            >
              facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-sm font-normal leading-6 mr-[15px] hover:underline"
            >
              instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-sm font-normal leading-6 hover:underline"
            >
              youtube
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-sm font-normal leading-6 hover:underline"
            >
              tiktok
            </a>
          </li>
        </ul>
      </div>
      <ContactForm />
    </section>
  );
}
