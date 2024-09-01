import Footer from '../components/generalComponents/footer';
import Header from '../components/generalComponents/header';
import ProDesign from '../components/processEngineeringComponents/processDesign';
import ProEngHero from '../components/processEngineeringComponents/proEngHero';
import ProDevSupport from '../components/processEngineeringComponents/processDevSupport';

export default function ProcessEngineeringpage() {
  return (
    <>
      {/* <div className='w-full relative bg-black-colors-white h-[5131px] overflow-hidden text-center text-16xl text-brand-colors-primary font-l-semi-bold'></div> */}
      <div className='w-full relative bg-black-colors-white h-[4883px] lg:h-[2832px] overflow-hidden text-center text-16xl text-brand-colors-primary font-m-semibold'>
        <Header />
        <ProEngHero />
        <ProDesign />
        <ProDevSupport />
        <Footer />
      </div>
    </>
  );
}
