import vision from '../../assets/svg/vision.svg'
import mission from '../../assets/svg/mission.svg'
import values from '../../assets/svg/values.svg'

export default function CoreIdeals() {
  return (
    <>
      <div className='absolute top-[0px] left-[0px] bg-black-colors-white border-grey-colors-gray5 border-b-[1px] border-solid box-border w-[1280px] h-[85px] flex-row items-center justify-between py-4 px-[100px] text-sm hidden lg:flex'>
        <div className='absolute top-[921px] left-[0px] w-[1280px] flex flex-row items-center justify-center p-[100px] box-border text-center'>
          <div className='w-[915px] flex flex-col items-start justify-start gap-14'>
            <div className='flex flex-row items-center justify-start gap-24'>
              <div className='w-[289px] relative h-[289px] overflow-hidden shrink-0'>
                <img alt='' src={vision} />
              </div>
              <div className='w-[457px] flex flex-col items-start justify-center text-16xl gap-4'>
                <div className='relative leading-[55px] font-semibold '>
                  Our vision
                </div>
                <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 text-left'>
                  To empower businesses and communities to thrive by harnessing
                  the power of process engineering, energy, and research to
                  create new opportunities, stimulate economic development, and
                  improve quality of life.
                </div>
              </div>
            </div>
            <div className='self-stretch flex flex-row items-center justify-start gap-24'>
              <img alt='' src={mission} />
              <div className='w-[530px] flex flex-col items-start justify-center text-16xl gap-4'>
                <div className='relative leading-[55px] font-semibold'>
                  Our mission
                </div>
                <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 text-left'>
                  To partner with our clients to develop and implement
                  sustainable strategies that optimize their operations, reduce
                  costs, and enhance their competitive advantage, all while
                  minimizing their environmental footprint.
                </div>
              </div>
            </div>
            <div className='self-stretch flex flex-row items-center justify-center gap-[93px] text-left text-[19.82px] text-black-colors-white'>
              <div className='w-[290px] relative h-[200px] overflow-hidden shrink-0'>
                <img alt='' src={values} />
              </div>
              <div className='w-[532px] flex flex-col items-start justify-center gap-4 text-center text-16xl text-brand-colors-primary'>
                <div className='relative leading-[55px] font-semibold'>
                  Our value
                </div>
                <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 text-left'>
                  Pristine Probizz is dedicated to upholding the highest
                  standards of integrity, delivering reliable and efficient
                  services that exceed our clients expectations, and fostering a
                  culture of innovation to drive sustainable growth and positive
                  impact. We believe in building long-lasting relationships
                  based on trust, transparency, and a shared commitment to
                  excellence.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute top-[1019px] left-[calc(50%_-_179px)] w-full max-w-[359px] flex flex-col items-center justify-center p-4 box-border text-center lg:hidden'>
        <div className='flex-1 flex flex-col items-start justify-start gap-6'>
          <div className='flex flex-col items-center justify-center gap-8'>
            <div className='flex flex-col items-center justify-center gap-8 w-full'>
              <div className='relative w-full max-w-[290px] h-[200px] overflow-hidden'>
                <img
                  alt='Vision'
                  src={vision}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex flex-col items-start justify-center gap-4 text-center text-16xl text-brand-colors-primary'>
                <div className='relative font-semibold leading-[55px]'>
                  Our Vision
                </div>
                <div className='text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 text-left'>
                  To empower businesses and communities to thrive by harnessing
                  the power of process engineering, energy, and research to
                  create new opportunities, stimulate economic development, and
                  improve quality of life.
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-8 w-full'>
              <div className='relative w-full max-w-[290px] h-[200px] overflow-hidden'>
                <img
                  alt='Mission'
                  src={mission}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex flex-col items-start justify-center gap-4 text-center text-16xl text-brand-colors-primary'>
                <div className='relative font-semibold leading-[55px]'>
                  Our Mission
                </div>
                <div className='text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 text-left'>
                  To partner with our clients to develop and implement
                  sustainable strategies that optimize their operations, reduce
                  costs, and enhance their competitive advantage, all while
                  minimizing their environmental footprint.
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-8 w-full'>
              <div className='relative w-full max-w-[290px] h-[200px] overflow-hidden'>
                <img
                  alt='Values'
                  src={values}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex flex-col items-start justify-center gap-4 text-center text-16xl text-brand-colors-primary'>
                <div className='relative font-semibold leading-[55px]'>
                  Our Value
                </div>
                <div className='text-lg tracking-[-0.02em] leading-[32px] font-medium text-grey-colors-gray2 text-left'>
                  Pristine Probizz is dedicated to upholding the highest
                  standards of integrity, delivering reliable and efficient
                  services that exceed our clients expectations, and fostering a
                  culture of innovation to drive sustainable growth and positive
                  impact. We believe in building long-lasting relationships
                  based on trust, transparency, and a shared commitment to
                  excellence.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


