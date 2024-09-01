import AboutHero from '../../assets/images/aboutHero.png'
export default function AboutUsHero (){
  return (
    <>
      <div className='absolute top-[141px] left-[100px] w-[1080px] flex-col items-center justify-start gap-14 text-center text-26xl hidden lg:flex'>
        <div className='w-[803px] flex flex-col items-center justify-center gap-4'>
          <div className='relative font-semibold'>About us</div>
          <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[38px] font-medium text-grey-colors-gray2'>
            Pristine Probizz is a multidisciplinary consulting firm offering
            services in process engineering, energy solutions, project
            management, research, and training. With over 4 years of experience,
            we specialize in process design, business strategy, operations, and
            human capital development.
          </div>
        </div>
        <img
          className='self-stretch relative rounded-lg max-w-full overflow-hidden h-[484px] shrink-0 object-cover'
          alt=''
          src={AboutHero}
        />
      </div>

      <div className='absolute top-[95px] left-[0px] w-[360px] flex flex-col items-center justify-start p-4 box-border gap-6 text-center text-26xl lg:hidden'>
        <div className='self-stretch flex flex-col items-center justify-center gap-4'>
          <div className='relative leading-[64px] font-semibold'>About us</div>
          <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 text-left'>
            Pristine Probizz is a multidisciplinary consulting firm offering
            services in process engineering, energy solutions, project
            management, research, and training. With over 4 years of experience,
            we specialize in process design, business strategy, operations, and
            human capital development.
          </div>
        </div>
        <img
          className='self-stretch relative rounded-lg max-w-full overflow-hidden h-[484px] shrink-0 object-cover'
          alt=''
          src={AboutHero}
        />
      </div>
    </>
  );
};


