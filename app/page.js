import Image from 'next/image';
import MainPage from './components/MainPage';
import About from './components/About';
import Offer from './components/Offer';
import Choose from './components/Choose';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <MainPage />
      <About />
      <Offer />
      <Choose />
      <Gallery />
      <Contact />
    </>
  );
}
