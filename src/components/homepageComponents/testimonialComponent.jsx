import { useState, useEffect } from 'react';
import { testimonials } from "../../constants";
import Comma from '../../assets/svg/fluent_comma-24-regular (1).svg';
export default function HomepageTestimonials(){
 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000); 

    return () => clearInterval(timer); 
  }, []);
  
    return (
      <>
        <div className='absolute top-[2516px] left-[calc(50%_-_640px)] bg-background-color w-[1280px] flex-col items-center justify-start p-[100px] box-border gap-14 text-center text-grey-colors-gray1 hidden lg:flex'>
          <div className='w-[571.2px] flex flex-col items-center justify-start gap-6'>
            <div className='w-[334px] flex flex-col items-center justify-start gap-2'>
              <div className='w-[69px] relative bg-brand-colors-secondary h-[5px]' />
              <div className='self-stretch flex flex-row items-center justify-center'>
                <div className='w-[334px] flex flex-col items-center justify-start gap-4'>
                  <div className='self-stretch flex flex-row items-center justify-center text-2xl'>
                    <div className='relative'>Why customers love</div>
                  </div>
                  <div className='self-stretch relative leading-[55px] font-semibold text-brand-colors-primary text-2xl'>
                    working with us
                  </div>
                </div>
              </div>
            </div>
            <div className='self-stretch flex flex-row items-end justify-start gap-6 text-lg text-grey-colors-gray2'>
              <div className='flex flex-row items-start justify-start gap-6'>
                <img
                  className='w-[34.1px] relative h-[42px] overflow-hidden shrink-0 object-contain'
                  alt=''
                  src={Comma}
                />
                <div className='flex flex-row items-center justify-center'>
                  <div className='self-stretch w-[488px] relative tracking-[-0.02em] leading-[38px] font-medium inline-block shrink-0'>
                    {testimonials[currentIndex].text}
                  </div>
                </div>
              </div>
              <img
                className='w-[34.1px] relative h-[42px] overflow-hidden shrink-0'
                alt=''
                src={Comma}
              />
            </div>
          </div>

          <div className='self-stretch flex flex-row items-center justify-center gap-20 text-sm text-brand-colors-primary'>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center gap-[15px] text-lg transition-transform
              ${currentIndex === index ? 'transform scale-150' : ''}`}
              >
                <img
                  className='w-[100px] relative rounded-981xl h-[100px] overflow-hidden shrink-0 object-cover'
                  alt=''
                  src={testimonial.image}
                />
                <div className='flex flex-row items-center justify-start gap-[5px]'>
                  {testimonial.rating}
                </div>
                <div className='flex flex-col items-center justify-center gap-0.5'>
                  <b className='relative'>{testimonial.name}</b>
                  <div className='relative text-xs leading-[18px] text-grey-colors-gray1'>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='absolute top-[3018px] left-[calc(50%_-_180px)] bg-background-color w-[360px] flex flex-col items-center justify-start p-4 box-border gap-6 text-center text-grey-colors-gray1 lg:hidden'>
          <div className='self-stretch flex flex-col items-center justify-start gap-6'>
            <div className='w-[334px] flex flex-col items-center justify-start gap-2'>
              <div className='w-[69px] relative bg-brand-colors-secondary h-[5px]' />
              <div className='self-stretch flex flex-row items-center justify-center'>
                <div className='w-[334px] flex flex-col items-center justify-start gap-4'>
                  <div className='self-stretch flex flex-row items-center justify-center'>
                    <div className='relative'>Why customers love</div>
                  </div>
                  <div className='self-stretch relative leading-[55px] font-semibold text-brand-colors-primary'>
                    working with us
                  </div>
                </div>
              </div>
            </div>
            <div className='self-stretch flex flex-row items-end justify-start gap-6 text-lg text-grey-colors-gray2'>
              <div className='flex-1 flex flex-row items-start justify-start gap-6'>
                <img
                  className='w-[34.1px] relative h-[42px] overflow-hidden shrink-0 object-contain'
                  alt=''
                  src={Comma}
                />
                <div className='flex-1 flex flex-row items-center justify-center'>
                  <div className='flex-1 relative tracking-[-0.02em] leading-[32px] font-medium'>
                    {testimonials[currentIndex].text}
                  </div>
                </div>
              </div>
              <img
                className='w-[34.1px] relative h-[42px] overflow-hidden shrink-0'
                alt=''
                src={Comma}
              />
            </div>
          </div>

          <div className='w-[289px] flex flex-row items-start justify-between flex-wrap content-start text-sm text-brand-colors-primary '>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`w-[48%] space-x-6 flex flex-col items-center justify-center gap-2.5 ${currentIndex === index ? 'transform scale-150' : ''} my-4`}
              >
                <img
                  className='w-20 relative rounded-981xl h-20 overflow-hidden shrink-0 object-cover'
                  alt=''
                  src={testimonial.image}
                />
                <div className='flex flex-row items-center justify-start gap-[5px]'>
                  {testimonial.rating}
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <div className='relative leading-[24px] font-semibold'>
                    {testimonial.name}
                  </div>
                  <div className='relative text-xs leading-[18px] text-grey-colors-gray1'>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}