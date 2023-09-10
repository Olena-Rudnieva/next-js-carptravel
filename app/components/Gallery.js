import Image from 'next/image';
import img1 from '../../public/gallery-3.png';
import img2 from '../../public/gallery-1.png';
import img3 from '../../public/gallery-2.png';

export default function Gallery() {
  return (
    <section className="py-14 md:py-16 xl:py-20 md:text-center bg-gallery bg-cover text-white h-[801px] md:h-[575px] xl:h-[788px]">
      <div className="container">
        <h2 className="text-[40px] md:text-[67px] font-thin leading-[56px] md:leading-[81px] tracking-[-1.6px]  md:tracking-[-2.68px]  uppercase mb-6 md:mb-[72px]">
          OUR <span className="font-medium">GALLERY</span>
        </h2>

        <Image
          src={img1}
          width={280}
          height={187}
          alt="Photo"
          className="mb-6 ml-auto mr-auto"
        />
        {/* <Image
            src={img2}
            width={280}
            height={187}
            alt="Photo"
            className="mb-6 ml-auto mr-auto"
          />
          <Image
            src={img3}
            width={280}
            height={187}
            alt="Photo"
            className="ml-auto mr-auto"
          /> */}
      </div>
    </section>
  );
}
