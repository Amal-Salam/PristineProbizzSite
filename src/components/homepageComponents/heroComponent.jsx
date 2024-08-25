import Solar from '../../assets/images/many-solar-panels 1.png';
import Research from '../../assets/images/home-research-support 1.png';
import ProEng from  '../../assets/images/home-pro-eng 1.png';
import Training from '../../assets/images/home-train 1.png';

export default function HomepageHero (){
    return (
      <>
        <div className='absolute top-[141px] left-[calc(50%_-_369px)] flex flex-col items-center justify-start gap-6 text-center text-26xl'>
          <div className='flex flex-col items-start justify-start gap-4'>
            <div className='self-stretch relative font-semibold'>
              Integrate. Innovate. Impact.
            </div>
            <div className='w-[737px] relative text-lg tracking-[-0.02em] leading-[38px] font-medium text-grey-colors-gray2 inline-block'>
              We craft sustainable, tailored solutions that drive progress and
              guarantee your project success. Let our expertise be your
              advantage. Ready to transform your project?
            </div>
          </div>
          <div className='rounded-lg bg-brand-colors-primary h-[52px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-4 px-[52px] box-border text-left text-base text-black-colors-white'>
            <div className='relative tracking-[-0.01em] leading-[28px] font-medium'>
              Let’s Talk
            </div>
          </div>
        </div>
        <div className='absolute top-[419px] left-[calc(50%_-_540px)] flex flex-row items-center justify-start gap-4'>
          <div className='perspective'>
            <img
              className='w-[258px] relative h-[312px] object-cover rounded-2xl hero-img'
              alt=''
              src={Solar}
            />
          </div>

          <div className='flex flex-row items-center justify-start gap-4'>
            <img
              className='w-[258px] relative rounded-2xl h-[250px] overflow-hidden shrink-0 object-cover'
              alt=''
              src={Research}
            />
            <img
              className='w-[258px] relative rounded-2xl h-[250px] overflow-hidden shrink-0 object-cover'
              alt=''
              src={ProEng}
            />
          </div>
          <div className='perspective'>
            <img
              className='w-[258px] relative h-[312px] object-cover rounded-2xl rev-hero-img'
              alt=''
              src={Training}
            />
          </div>
        </div>
      </>
    );
}