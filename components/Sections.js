import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Gallery from '../pages/Gallery';
import Services from '../pages/Services';
import Hero from '../pages/Hero';

export default function Sections() {
  return (
    <main className="absolute top-0 left-0 right-0">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contacts />
    </main>
  );
}
