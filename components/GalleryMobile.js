import Image from 'next/image';
import { galleryData } from '../data/gallery';

export default function GalleryMobile() {
  return (
    <ul className="flex flex-col gap-5 md:hidden">
      {galleryData.map((picture) => (
        <li key={picture.id}>
          <Image
            className="w-[100%] h-[100%] mx-auto"
            src={picture.src}
            alt={picture.title}
          />
        </li>
      ))}
    </ul>
  );
}
