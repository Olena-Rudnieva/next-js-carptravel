'use client';

export default function MobileMenu({ onClick }) {
  return (
    <div className="fixed top-0 left-0 z-20 w-screen h-screen bg-menu max-w-[480px] ">
      <div className="relative z-30 text-white h-full  ">
        <button
          type="button"
          onClick={onClick}
          class="absolute right-[20px] top-[43px] text-[14px] font-normal tracking-[1,4px] uppercase"
        >
          CLOSE
        </button>
        <nav>
          <ul className="flex flex-col gap-12  text-center pt-[170px]">
            <li>
              <a
                onClick={onClick}
                className="text-[18px] font-normal tracking-[1.8px]"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-[18px] font-normal tracking-[1.8px]"
                onClick={onClick}
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="text-[18px] font-normal tracking-[1.8px]"
                onClick={onClick}
              >
                Career
              </a>
            </li>
            <li>
              <a
                className="text-[18px] font-normal tracking-[1.8px]"
                onClick={onClick}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                className="text-[18px] font-normal tracking-[1.8px] "
                onClick={onClick}
                // to={About}
                // smooth={true}
                // duration={500}
                // offset={50}
                // onClick={onClick}
              >
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
