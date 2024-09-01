import Header from '../components/generalComponents/header'
import AboutUsHero from '../components/aboutpageComponents/aboutHero';
import CoreIdeals from '../components/aboutpageComponents/CoreIdeals';
import WhyChooseUs from '../components/aboutpageComponents/whyChooseUs';
import OurTeam from '../components/aboutpageComponents/OurTeam';
import Footer from '../components/generalComponents/footer';

export default function Aboutuspage() {
  return (
    <>
      <div className='w-full relative bg-black-colors-white h-[6937px] lg:h-[3859px] overflow-hidden text-left text-16xl text-brand-colors-primary font-m-semibold'>
        <AboutUsHero />
        <CoreIdeals />
       <WhyChooseUs /> 
        <Header />
       <OurTeam /> 
        <Footer />
      </div>
    </>
  );
}
