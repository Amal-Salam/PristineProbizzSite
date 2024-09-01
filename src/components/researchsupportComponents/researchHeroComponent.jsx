import Teamwork from '../../assets/researchSupport/Teamwork.png'
export default function ResearchHero (){
    return (
      <>
        <div className='absolute top-[109px] left-[100px] w-[1080px] flex-col items-center justify-end gap-6 text-center text-brand-colors-secondary hidden lg:flex'>
          <img
            className='w-[1080px] relative h-[484px] object-cover z-[0] rounded-xl'
            alt=''
            src={Teamwork}
          />
          <div className='w-[410px] !m-[0] absolute top-[98px] left-[637px] flex flex-col items-center justify-center gap-2 z-[1]'>
            <div className='self-stretch relative leading-[55px] font-semibold'>
              Comprehensive Support Services Tailored for Success
            </div>
            <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-black-colors-white'>{`Unlock data-driven insights & empower your decisions with expert research support. Gain a competitive edge`}</div>
          </div>
        </div>

        <div className='absolute top-[95px] left-[calc(50%_-_180px)] w-[360px] flex flex-col items-center justify-end lg:hidden'>
          <img
            className='w-[414px] relative h-[484px] object-cover'
            alt=''
            src={Teamwork}
          />
        </div>
        <div className='absolute top-[579px] left-[25px] w-[360px] flex flex-col items-center justify-center p-4 box-border gap-2 text-center text-brand-colors-secondary lg:hidden'>
          <div className='self-stretch relative leading-[55px] font-semibold'>
            Comprehensive Support Services Tailored for Success
          </div>
          <div className='self-stretch relative text-justify text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray1'>{`Unlock data-driven insights & empower your decisions with expert research support. Gain a competitive edge`}</div>
        </div>
      </>
    );
}





