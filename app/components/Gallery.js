import Image from 'next/image';
import img1 from '../../public/gallery-3.png';
import img2 from '../../public/gallery-1.png';
import img3 from '../../public/gallery-2.png';

export default function Gallery() {
  return (
    <section class="px-5 py-14 bg-gallery bg-cover text-white">
      <h2 class="text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase mb-6">
        OUR <span class="font-medium">GALLERY</span>
      </h2>
      <Image src={img1} width={280} height={187} alt="Photo" class="mb-6" />
      <Image src={img2} width={280} height={187} alt="Photo" class="mb-6" />
      <Image src={img3} width={280} height={187} alt="Photo" />
    </section>
  );
}
