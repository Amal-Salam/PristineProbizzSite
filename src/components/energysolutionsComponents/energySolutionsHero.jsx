import Solar from '../../assets/energySolutions/many-solar-panels.png'

export default function EnergySolutionsHero () {
  return (
    <>
      <div className='absolute top-[141px] left-[100px] w-[1080px] flex-col items-center justify-start gap-6 hidden lg:flex'>
        <div className='w-[807px] flex flex-col items-center justify-center gap-4'>
          <div className='relative leading-[55px] font-semibold'>
            Empowering Africa with the Sun
          </div>
          <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2'>
            At Pristime Probizz, we are dedicated to providing clean, reliable,
            and affordable solar energy solutions to individuals and businesses
            across Africa. Our mission is to harness the power of the sun to
            create a brighter, more sustainable future for communities
            throughout the continent.
          </div>
        </div>
        <img
          className='self-stretch relative rounded-lg max-w-full overflow-hidden h-[484px] shrink-0 object-cover'
          alt=''
          src={Solar}
        />
      </div>

      <div className='absolute top-[95px] left-[25px] w-[360px] flex flex-col items-center justify-start p-4 box-border gap-6 lg:hidden'>
        <div className='self-stretch flex flex-col items-center justify-center gap-4'>
          <div className='self-stretch relative leading-[55px] font-semibold'>
            Empowering Africa with the Sun
          </div>
          <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2'>
            At Pristime Probizz, we are dedicated to providing clean, reliable,
            and affordable solar energy solutions to individuals and businesses
            across Africa. Our mission is to harness the power of the sun to
            create a brighter, more sustainable future for communities
            throughout the continent.
          </div>
        </div>
        <img
          className='self-stretch relative rounded-lg max-w-full overflow-hidden h-[484px] shrink-0 object-cover'
          alt=''
          src={Solar}
        />
      </div>
    </>
  );
};


 
