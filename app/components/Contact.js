export default function Contact() {
  return (
    <section class="px-5 py-14 bg-main bg-cover text-white">
      <h2 class="text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase mb-9">
        Contact <span class="font-medium">US</span>
      </h2>
      <div>
        <div class="flex justify-end mb-6">
          <ul>
            <li>
              <a class="text-sm font-normal leading-6" href="tel:+380981234564">
                +38 (098) 12 34 567
              </a>
            </li>
            <li>
              <a class="text-sm font-normal leading-6" href="tel:+380731234564">
                +38 (073) 12 34 567
              </a>
            </li>
          </ul>
          <p class="text-xs font-extralight leading-5 ml-5 mb-[56px]">
            Phone number
          </p>
        </div>

        <div class="flex justify-end mb-[26px]">
          <a
            class="text-sm font-normal leading-6"
            href="mailto:info@devstudio.com"
          >
            support@carptravel.com
          </a>
          <p class="text-xs font-extralight leading-5 ml-5 mr-[46px]">E-mail</p>
        </div>
      </div>

      <div class="flex justify-end">
        <p class="text-xs font-extralight leading-5 ml-5 mr-[46px]">
          Follow us
        </p>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              class="text-sm font-normal leading-6"
            >
              facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              class="text-sm font-normal leading-6 mr-[15px]"
            >
              instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              class="text-sm font-normal leading-6"
            >
              youtube
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              class="text-sm font-normal leading-6"
            >
              tiktok
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
