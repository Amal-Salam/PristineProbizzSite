import {blogs} from '../../constants/index';
import { FaArrowRight } from 'react-icons/fa';
export default function HomepageBlog (){
    return (
      <>
        <div className='absolute top-[3266px] left-[calc(50%_-_640px)] w-[1280px] overflow-hidden flex flex-col items-center justify-center p-[100px] box-border gap-14'>
          <div className='flex flex-col items-center justify-start gap-2'>
            <div className='relative leading-[55px] font-semibold'>
              Our Blog
            </div>
            <div className='w-[69px] relative bg-brand-colors-secondary h-[5px]' />
          </div>
          <div className='self-stretch flex flex-row items-center justify-between text-base text-gray-gray-800'>
            {blogs.slice(0, 4).map((blog, index) => (
              <div
                key={index}
                className='flex flex-col items-end justify-end gap-5'
              >
                <div className='flex flex-col items-start justify-start gap-5'>
                  <img
                    className='w-[254px] relative rounded-3xs h-[175px] object-cover'
                    alt=''
                    src={blog.imageUrl}
                  />
                  <div className='flex flex-row items-center justify-center'>
                    <div className='w-[254px] relative tracking-[-0.01em] leading-[28px] font-medium inline-block shrink-0'>
                      <p className='m-0'>{blog.title}</p>
                      <p className='m-0'>{blog.summary}</p>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row items-center justify-end gap-4 text-lg text-brand-colors-primary'>
                  <div className='relative tracking-[-0.02em] leading-[24px] font-semibold'>
                    Read More
                  </div>
                  <FaArrowRight />
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}