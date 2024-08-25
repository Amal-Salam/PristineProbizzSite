import Code from '../../assets/images/Code_perspective_matte.png';
export default function HomepageServices() {
  return (
    <>
      <div className='absolute top-[1522px] left-[calc(50%_-_640px)] w-[1280px] overflow-hidden flex flex-col items-center justify-start p-[100px] box-border gap-14 text-5xl'>
        <div className='flex flex-col items-center justify-start gap-2 text-16xl'>
          <div className='relative leading-[55px] font-semibold'>{`Our Services `}</div>
          <div className='w-[69px] relative bg-brand-colors-secondary h-[5px]' />
        </div>
        <div className='flex flex-row items-center justify-center gap-[72px]'>
          <div className='w-[350px] rounded-lg bg-black-colors-white border-brand-colors-primary border-[1px] border-solid box-border flex flex-col items-start justify-start p-6 gap-4'>
            <div className='self-stretch flex flex-col items-start justify-start gap-[15px]'>
              <div className='w-[58px] relative rounded-981xl bg-black-colors-white border-brand-colors-primary border-[1px] border-solid box-border h-[58px] overflow-hidden shrink-0'>
                <img
                  className='absolute top-[calc(50%_-_17px)] left-[calc(50%_-_17px)] w-[34px] h-[34px] object-cover'
                  alt=''
                  src={Code}
                />
              </div>
              <div className='relative tracking-[-0.02em] leading-[30px] font-semibold'>
                Process Engineering
              </div>
            </div>
            <div className='self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-medium text-grey-colors-gray2'>
              A Website is an extension of yourself and we can help you to
              express it properly. Your website is your number one marketing
              asset because we live in a digital age.
            </div>
          </div>
          <div className='w-[350px] rounded-lg bg-black-colors-white border-brand-colors-primary border-[1px] border-solid box-border flex flex-col items-start justify-start p-6 gap-4'>
            <div className='self-stretch flex flex-col items-start justify-start gap-[15px]'>
              <div className='w-[58px] relative rounded-981xl bg-black-colors-white border-brand-colors-primary border-[1px] border-solid box-border h-[58px] overflow-hidden shrink-0'>
                <img
                  className='absolute top-[calc(50%_-_17px)] left-[calc(50%_-_17px)] w-[34px] h-[34px] object-cover'
                  alt=''
                  src={Code}
                />
              </div>
              <div className='relative tracking-[-0.02em] leading-[30px] font-semibold'>
                Energy Solution
              </div>
            </div>
            <div className='self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-medium text-grey-colors-gray2'>
              A Website is an extension of yourself and we can help you to
              express it properly. Your website is your number one marketing
              asset because we live in a digital age.
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center gap-[72px]'>
          <div className='w-[350px] rounded-lg bg-black-colors-white border-brand-colors-primary border-[1px] border-solid box-border flex flex-col items-start justify-start p-6 gap-4'>
            <div className='self-stretch flex flex-col items-start justify-start gap-[15px]'>
              <div className='w-[58px] relative rounded-981xl bg-black-colors-white border-brand-colors-primary border-[1px] border-solid box-border h-[58px] overflow-hidden shrink-0'>
                <img
                  className='absolute top-[calc(50%_-_17px)] left-[calc(50%_-_17px)] w-[34px] h-[34px] object-cover'
                  alt=''
                  src={Code}
                />
              </div>
              <div className='relative tracking-[-0.02em] leading-[30px] font-semibold'>
                Research support
              </div>
            </div>
            <div className='self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-medium text-grey-colors-gray2'>
              A Website is an extension of yourself and we can help you to
              express it properly. Your website is your number one marketing
              asset because we live in a digital age.
            </div>
          </div>
          <div className='flex flex-row items-center justify-center'>
            <div className='w-[350px] rounded-lg bg-black-colors-white border-brand-colors-primary border-[1px] border-solid box-border flex flex-col items-start justify-start p-6 gap-4'>
              <div className='self-stretch flex flex-col items-start justify-start gap-[15px]'>
                <div className='w-[58px] relative rounded-981xl bg-black-colors-white border-brand-colors-primary border-[1px] border-solid box-border h-[58px] overflow-hidden shrink-0'>
                  <img
                    className='absolute top-[calc(50%_-_17px)] left-[calc(50%_-_17px)] w-[34px] h-[34px] object-cover'
                    alt=''
                    src={Code}
                  />
                </div>
                <div className='relative tracking-[-0.02em] leading-[30px] font-semibold'>
                  Trainings
                </div>
              </div>
              <div className='self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-medium text-grey-colors-gray2'>
                A Website is an extension of yourself and we can help you to
                express it properly. Your website is your number one marketing
                asset because we live in a digital age.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
