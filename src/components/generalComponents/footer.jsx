import logo from '../../assets/images/logo.svg';
export default function Footer() {
  return (
    <>
      <div className='absolute bottom-[0px] left-[calc(50%_-_640px)] w-[1280px] overflow-hidden flex flex-col items-end justify-center py-[50px] px-0 box-border gap-6 text-base text-grey-colors-gray1'>
        <div className='self-stretch border-grey-colors-gray4 border-b-[1px] border-solid flex flex-row items-end justify-between py-10 px-[100px]'>
          <div className='w-[878.4px] flex flex-row items-start justify-between'>
            <div className='flex flex-col items-start justify-start gap-4'>
              <div className='self-stretch h-[70.5px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-[5px] px-1.5 box-border'>
                <div className='w-[90.5px] relative h-[60.5px]'>
                  <div className='absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]'>
                    <img
                      className='absolute h-[77.36%] w-[52.71%] top-[0%] right-[28.3%] bottom-[22.64%] left-[19%] max-w-full overflow-hidden max-h-full'
                      alt=''
                      src={logo}
                    />
                  </div>
                </div>
              </div>
              <div className='flex flex-row items-center justify-start'>
                <div className='w-[326px] relative tracking-[-0.01em] leading-[28px] font-medium inline-block shrink-0'>
                  Pristine Probizz offers sustainable, custom solutions to power
                  your projects and ensure success.
                </div>
              </div>
            </div>
            <div className='w-[122.2px] flex flex-col items-start justify-start gap-4 text-lg'>
              <div className='self-stretch relative tracking-[-0.02em] leading-[24px] font-semibold'>
                Links
              </div>
              <div className='w-[84px] flex flex-col items-start justify-start gap-4 text-base'>
                <div className='flex flex-row items-center justify-center'>
                  <div className='relative tracking-[-0.01em] leading-[28px] font-medium'>
                    About Us
                  </div>
                </div>
                <div className='flex flex-row items-center justify-center'>
                  <div className='relative tracking-[-0.01em] leading-[28px] font-medium'>
                    Services
                  </div>
                </div>
                <div className='flex flex-row items-center justify-center'>
                  <div className='relative tracking-[-0.01em] leading-[28px] font-medium'>
                    Projects
                  </div>
                </div>
                <div className='flex flex-row items-center justify-center'>
                  <div className='relative tracking-[-0.01em] leading-[28px] font-medium'>
                    Blog
                  </div>
                </div>
                <div className='flex flex-row items-center justify-center'>
                  <div className='relative tracking-[-0.01em] leading-[28px] font-medium'>
                    Careers
                  </div>
                </div>
                <div className='self-stretch flex flex-row items-center justify-center'>
                  <div className='relative tracking-[-0.01em] leading-[28px] font-medium'>
                    Contact Us
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-start justify-start gap-4'>
              <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[24px] font-semibold'>
                Contact us
              </div>
              <div className='w-[280px] relative tracking-[-0.01em] leading-[28px] font-medium inline-block'>
                Genmin Laboratories, 1 Jan Smuts Avenue, Braamfontein,
                Johannesburg, South Africa
              </div>
              <div className='relative tracking-[-0.01em] leading-[28px] font-medium'>
                pristineprobizz@gmail.com
              </div>
              <div className='relative tracking-[-0.01em] leading-[28px] font-medium'>
                +27 717 761 510
              </div>
            </div>
          </div>
          <div className='h-10 flex flex-row items-center justify-end gap-2'>
            <img
              className='w-7 relative rounded-981xl h-7 overflow-hidden shrink-0'
              alt=''
              src='/frame-110.svg'
            />
            <img
              className='w-7 relative rounded-981xl h-7 overflow-hidden shrink-0'
              alt=''
              src='/frame-111.svg'
            />
            <img
              className='w-7 relative rounded-981xl h-7 overflow-hidden shrink-0'
              alt=''
              src='/frame-112.svg'
            />
            <img
              className='w-7 relative rounded-981xl h-7 overflow-hidden shrink-0'
              alt=''
              src='/frame-113.svg'
            />
          </div>
        </div>
        <div className='flex flex-row items-center justify-end py-0 pl-0 pr-[100px] text-center text-sm text-grey-colors-gray3'>
          <div className='relative leading-[24px]'>© 2023 Copyright</div>
        </div>
      </div>
    </>
  );
}
