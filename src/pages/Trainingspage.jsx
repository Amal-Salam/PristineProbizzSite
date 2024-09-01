import Footer from '../components/generalComponents/footer';
import Header from '../components/generalComponents/header';
import Enterpreneurship from '../components/trainingComponents/enterpreneurship';
import ProEngTraining from '../components/trainingComponents/processEngineering';
import ProjectMgt from '../components/trainingComponents/projectMgt';
import TrainingHero from '../components/trainingComponents/trainingHero';


export default function Trainingspage() {
  return (
    <>
      {/* <div className='w-full relative bg-black-colors-white h-[5131px] overflow-hidden text-center text-16xl text-brand-colors-primary font-l-semi-bold'></div> */}
      <div className='w-full relative bg-black-colors-white h-[7500px] lg:h-[4359px] overflow-hidden text-center text-16xl text-brand-colors-primary font-m-semibold'>
        <Header />
        <TrainingHero />
        <Enterpreneurship />
        <ProEngTraining />
        <ProjectMgt />
        <Footer />
      </div>
    </>
  );
}
