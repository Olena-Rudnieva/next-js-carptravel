import MainPage from './components/MainPage';
import About from './components/About';
import Choose from './components/Choose';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contacts from './components/Contacts';

export default function Home() {
  return (
    <>
      <MainPage />
      <About />
      <Services />
      {/* <Choose /> */}
      <Gallery />
      <Contacts />
    </>
  );
}
