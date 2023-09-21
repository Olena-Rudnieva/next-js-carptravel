import Image from 'next/image';
import { galleryData } from '../data/gallery';

export default function GalleryMobile() {
  return (
    <ul className="flex flex-col gap-5 md:hidden">
      {galleryData.map((picture) => (
        <li key={picture.id}>
          <Image
            className="w-[280px] h-[187px] mx-auto"
            src={picture.src}
            alt={picture.title}
          />
        </li>
      ))}
    </ul>
  );
}
