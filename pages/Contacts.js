import ContactInfo from '@/components/ContactInfo';
import ContactForm from '../components/ContactForm';
import { ContactsData } from '@/data/contextData/contacts';

export default function Contacts() {
  const { title } = ContactsData;

  return (
    <section
      id="contacts"
      className="py-14 md:py-16 xl:py-[104px] bg-contacts bg-center bg-cover  text-white h-[856px] md:h-[691px] xl:h-[762px]"
    >
      <div className="container">
        <h2 className="text-[40px] md:text-[67px] xl:text-[98px] font-thin leading-[56px] md:leading-[66px] xl:leading-[119px] tracking-[-1.6px] md:tracking-[-2.68px] xl:tracking-[-3.92px] uppercase mb-9 md:mb-10 xl:mb-[74px]">
          {title.thin} <span className="font-medium">{title.bold}</span>
        </h2>
        <div className="xl:flex xl:gap-[231px]">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
