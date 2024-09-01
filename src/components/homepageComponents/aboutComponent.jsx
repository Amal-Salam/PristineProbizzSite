import { FaArrowRight } from 'react-icons/fa';
// import Solar from '../../assets/images/many-solar-panels 1.png'
export default function HomepageAbout() {
  return (
    <>
      <div className='absolute top-[831px] left-[calc(50%_-_640px)] bg-background-color w-[1280px] overflow-hidden flex-row items-center justify-end p-[100px] box-border gap-10 text-lg text-gray-gray-900 hidden lg:flex'>
        <div className='flex-1 flex flex-col items-start justify-start gap-10'>
          <div className='w-[493px] flex flex-col items-start justify-start gap-4'>
            <div className='w-[69px] relative bg-brand-colors-secondary h-[5px]' />
            <div className='w-[457px] flex flex-col items-start justify-start gap-6'>
              <div className='w-[457px] flex flex-col items-start justify-start gap-2'>
                <div className='flex flex-row items-center justify-center'>
                  <div className='relative tracking-[-0.02em] leading-[38px] font-medium'>
                    About Us
                  </div>
                </div>
                <div className='w-[457px] flex flex-row items-center justify-center text-16xl text-brand-colors-primary'>
                  <div className='flex-1 relative leading-[55px] font-semibold inline-block h-[108px]'>
                    Sustainable Solutions, Tailored for You.
                  </div>
                </div>
              </div>
              <div className='w-[455px] relative tracking-[-0.02em] leading-[38px] font-medium text-grey-colors-gray1 inline-block'>
                Pristine Probizz is a company dedicated to providing sustainable
                and customized solutions that drive progress and ensure project
                success. With their extensive knowledge and expertise, they are
                committed to helping clients achieve their goals effectively.
              </div>
            </div>
          </div>
          <div className='flex flex-row items-center justify-end gap-4 text-brand-colors-primary'>
            <div className='relative tracking-[-0.02em] leading-[24px] font-semibold'>
              See more Informations
            </div>
            <FaArrowRight />
          </div>
        </div>
        <div className='w-[547px] rounded-[20px] h-[449px] flex flex-row items-center justify-center home-about-bg bg-cover bg-no-repeat bg-[top]'>
          {/* <div className='w-20 rounded-[40px] bg-gray h-20 flex flex-col items-start justify-start p-5 box-border relative'>
            <img
              className='w-10 absolute !m-[0] top-[calc(50%_-_20px)] left-[calc(50%_-_20px)] h-10 overflow-hidden shrink-0 z-[0]'
              alt=''
              src={Solar}
            />
          </div> */}
        </div>
      </div>

      <div className='absolute top-[585px] left-[calc(50%_-_178px)] bg-background-color w-[357px] h-[959px] overflow-hidden flex flex-col items-center justify-center p-4 box-border gap-10 text-lg text-gray-gray-900 lg:hidden'>
        <div className='self-stretch flex flex-col items-start justify-start gap-10'>
          <div className='self-stretch flex flex-col items-start justify-start gap-4'>
            <div className='w-[69px] relative bg-brand-colors-secondary h-[5px]' />
            <div className='self-stretch flex flex-col items-start justify-start gap-6'>
              <div className='flex flex-col items-start justify-start gap-2'>
                <div className='flex flex-row items-center justify-center'>
                  <div className='relative tracking-[-0.02em] leading-[32px] font-medium'>
                    About Us
                  </div>
                </div>
                <div className='w-[328px] flex flex-row items-center justify-center text-16xl text-brand-colors-primary'>
                  <div className='flex-1 relative leading-[55px] font-semibold'>
                    Sustainable Solutions, Tailored for You.
                  </div>
                </div>
              </div>
              <div className='self-stretch relative tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray1'>
                Pristine Probizz is a company dedicated to providing sustainable
                and customized solutions that drive progress and ensure project
                success. With their extensive knowledge and expertise, they are
                committed to helping clients achieve their goals effectively.
              </div>
            </div>
          </div>
          <div className='flex flex-row items-center justify-end gap-4 text-brand-colors-primary'>
            <div className='relative tracking-[-0.02em] leading-[24px] font-semibold'>
              See more Informations
            </div>
             <FaArrowRight />
          </div>
        </div>
        <div className="self-stretch flex-1 rounded-[20px] flex flex-row items-center justify-center bg-[url('/public/about-us@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className='w-20 rounded-[40px] bg-gray h-20 flex flex-col items-start justify-start p-5 box-border relative'>
            <img
              className='w-10 absolute !m-[0] top-[calc(50%_-_20px)] left-[calc(50%_-_20px)] h-10 overflow-hidden shrink-0 z-[0]'
              alt=''
              src='/playcirclefill.svg'
            />
          </div>
        </div>
      </div>
    </>
  );
}
