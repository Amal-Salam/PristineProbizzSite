import Footer from '../components/generalComponents/footer';
import Header from '../components/generalComponents/header';
import ResearchHero from '../components/researchsupportComponents/researchHeroComponent';
import ResearchDetailsSection from '../components/researchsupportComponents/researchSection';


export default function ResearchSupportpage() {
  return (
    <>
      {/* <div className='w-full relative bg-black-colors-white h-[5131px] overflow-hidden text-center text-16xl text-brand-colors-primary font-l-semi-bold'></div> */}
      <div className='w-full relative bg-black-colors-white h-[3127px] lg:h-[1938px] overflow-hidden text-center text-16xl text-brand-colors-primary font-m-semibold'>
        <Header />
        <ResearchHero />
        <ResearchDetailsSection />
        <Footer />
      </div>
    </>
  );
}
