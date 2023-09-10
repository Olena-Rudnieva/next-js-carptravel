import AppBar from './AppBar';
import Hero from './Hero';

export default function MainPage() {
  return (
    <div className="px-5 md:px-8 xl:px-[104px] pt-9 md:pt-6 pb-[25px] md:pb-16 xl:pb-[104px] bg-main bg-cover bg-no-repeat md:bg-center xl:bg-mainDesktop h-[642px] md:h-[530px] lg:h-[763px]">
      <AppBar />
      <Hero />
    </div>
  );
}
