import AppBar from '../components/AppBar';
import Hero from '../components/Hero';

export default function MainPage() {
  return (
    <div className="pt-9 md:pt-6 pb-[25px] md:pb-16 xl:pb-[104px] bg-main bg-cover bg-no-repeat md:bg-center xl:bg-mainDesktop h-[642px] md:h-[530px] lg:h-[763px]">
      <div className="container">
        <AppBar />
        <Hero />
      </div>
    </div>
  );
}
