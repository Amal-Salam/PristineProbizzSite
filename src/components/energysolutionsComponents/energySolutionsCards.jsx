import Earth from '../../assets/energySolutions/solar 1.png';
import BigLogo from '../../assets/energySolutions/g34.svg';

export default function EnergySolutionsCards () {
  return (
    <>
      <div className='absolute top-[858px] left-[100px] shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-black-colors-white border-grey-colors-gray2 border-[0.2px] border-solid box-border w-[1080px] h-[300px] flex-row items-center justify-start p-6 gap-[55px] hidden lg:flex'>
        <img
          className='w-[195px] relative h-[242px] object-cover'
          alt=''
          src={Earth}
        />
        <div className='w-[782px] h-[223px] flex flex-col items-start justify-center gap-4'>
          <div className='relative leading-[55px] font-semibold'>
            Why Solar?
          </div>
          <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 text-left'>
            Solar energy is a clean, renewable, and sustainable energy source.
            It reduces greenhouse gas emissions, mitigates climate change, and
            decreases dependence on fossil fuels. Solar power is abundant,
            accessible, and can provide affordable electricity, fostering a
            greener and more environmentally friendly future.
          </div>
        </div>
      </div>
      <div className='absolute top-[1182px] left-[100px] shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-black-colors-white border-grey-colors-gray2 border-[0.2px] border-solid box-border w-[1080px] h-[300px] flex-row items-center justify-start p-6 gap-[38px] hidden lg:flex'>
        <div className='w-[212.1px] relative h-[143px]'>
          <div className='absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]'>
            <img
              className='absolute h-[76.99%] w-[52.76%] top-[0%] right-[28.24%] bottom-[23.01%] left-[19.01%] max-w-full overflow-hidden max-h-full'
              alt=''
              src={BigLogo}
            />
            <img
              className='absolute h-[15.87%] w-full top-[84.14%] right-[0%] bottom-[-0.01%] left-[0%] max-w-full overflow-hidden max-h-full'
              alt=''
              src='/g301.svg'
            />
          </div>
        </div>
        <div className='w-[780.8px] flex flex-col items-start justify-center gap-4'>
          <div className='relative leading-[55px] font-semibold'>
            What makes us different?
          </div>
          <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 text-left'>
            Our solar energy solutions company in Africa stands out due to our
            deep understanding of the region,the unique challenges and
            opportunities. We tailor our services to address local needs,
            ensuring reliable and sustainable power supply for communities. With
            a focus on innovation, affordability, and empowering local
            economies, we drive positive change and contribute to the African
            green energy transformation.
          </div>
        </div>
      </div>

      <div className='absolute top-[1089px] left-[calc(50%_-_164px)] shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-black-colors-white border-grey-colors-gray2 border-[0.2px] border-solid box-border w-[328px] flex flex-col items-center justify-center p-4 gap-6 lg:hidden'>
        <img
          className='w-[195px] relative h-[242px] object-cover'
          alt=''
          src={Earth}
        />
        <div className='self-stretch flex flex-col items-start justify-center gap-4'>
          <div className='relative leading-[55px] font-semibold'>
            Why Solar?
          </div>
          <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 text-left'>
            Solar energy is a clean, renewable, and sustainable energy source.
            It reduces greenhouse gas emissions, mitigates climate change, and
            decreases dependence on fossil fuels. Solar power is abundant,
            accessible, and can provide affordable electricity, fostering a
            greener and more environmentally friendly future.
          </div>
        </div>
      </div>
      <div className='absolute top-[1862px] left-[calc(50%_-_164px)] shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-2xl bg-black-colors-white border-grey-colors-gray2 border-[0.2px] border-solid box-border w-[328px] flex flex-col items-center justify-center p-4 gap-6 lg:hidden'>
        <div className='w-[212.1px] relative h-[143px]'>
          <div className='absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]'>
            <img
              className='absolute h-[76.99%] w-[52.76%] top-[0%] right-[28.24%] bottom-[23.01%] left-[19.01%] max-w-full overflow-hidden max-h-full'
              alt=''
              src={BigLogo}
            />
            <img
              className='absolute h-[15.87%] w-full top-[84.14%] right-[0%] bottom-[-0.01%] left-[0%] max-w-full overflow-hidden max-h-full'
              alt=''
              src='/g301.svg'
            />
          </div>
        </div>
        <div className='self-stretch flex flex-col items-start justify-center gap-4'>
          <div className='self-stretch relative leading-[55px] font-semibold'>
            What makes us different?
          </div>
          <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 text-left'>
            Our solar energy solutions company in Africa stands out due to our
            deep understanding of the region, the unique challenges and
            opportunities. We tailor our services to address local needs,
            ensuring reliable and sustainable power supply for communities. With
            a focus on innovation, affordability, and empowering local
            economies, we drive positive change and contribute to the African
            green energy transformation.
          </div>
        </div>
      </div>
    </>
  );
}

