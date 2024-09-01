import EnergySolutionsCards from '../components/energysolutionsComponents/energySolutionsCards';
import EnergySolutionsExpertise from '../components/energysolutionsComponents/energySolutionsExpetise';
import EnergySolutionsHero from '../components/energysolutionsComponents/energySolutionsHero';
import EnergySolutionsImpact from '../components/energysolutionsComponents/energySolutionsImpact';
import Footer from '../components/generalComponents/footer';
import Header from '../components/generalComponents/header';

export default function EnergySolutionspage() {
  return (
    <>
    {/* <div className='w-full relative bg-black-colors-white h-[5131px] overflow-hidden text-center text-16xl text-brand-colors-primary font-l-semi-bold'></div> */}
      <div className='w-full relative bg-black-colors-white h-[10339px] lg:h-[5131px] overflow-hidden text-center text-16xl text-brand-colors-primary font-m-semibold'>
        <Header />
        <EnergySolutionsHero/>
        <EnergySolutionsCards/>
        <EnergySolutionsImpact/>
        <EnergySolutionsExpertise/>
        <Footer />
      </div>
    </>
  );
}
