import Training from '../../assets/images/training.png'

export default function TrainingHero () {
    return (
      <>
        <div className='absolute top-[109px] left-[100px] flex-row items-center justify-start text-brand-colors-secondary hidden lg:flex'>
          <img
            className='w-[532px] relative h-[484px] overflow-hidden shrink-0 object-cover rounded-tl-2xl rounded-bl-2xl'
            alt=''
            src={Training}
          />
          <div className='w-[548px] bg-brand-colors-primary h-[484px] flex flex-col items-center justify-center p-6 box-border gap-4 rounded-tr-2xl rounded-br-2xl'>
            <div className='self-stretch relative leading-[55px] font-semibold'>
              Explore Our Training Courses
            </div>
            <div className='self-stretch relative text-lg tracking-[-0.02em] leading-[32px] font-medium text-black-colors-white'>
              We offer courses in process engineering, project management,
              entrepreneurship and research support training.📚 All of our
              courses are peer-reviewed to ensure that they reflect best
              practices and current trends as we aim to deliver exceptional
              training and skills development.
            </div>
          </div>
        </div>

        <div className='absolute top-[95px] left-[calc(50%_-_178px)] w-[360px] h-[1065px] flex flex-col items-start justify-center p-4 box-border text-brand-colors-secondary lg:hidden'>
          <img
            className='self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover'
            alt=''
            src={Training}
          />
          <div className='self-stretch bg-brand-colors-primary flex flex-col items-center justify-center p-6 gap-4'>
            <div className='self-stretch relative leading-[55px] font-semibold'>
              Explore Our Training Courses
            </div>
            <div className='self-stretch relative text-lg text-justify tracking-[-0.02em] leading-[32px] font-medium text-black-colors-white'>
              We offer courses in process engineering, project management,
              entrepreneurship and research support training.📚 All of our
              courses are peer-reviewed to ensure that they reflect best
              practices and current trends as we aim to deliver exceptional
              training and skills development.
            </div>
          </div>
        </div>
      </>
    );
}
