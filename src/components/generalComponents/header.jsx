import { FaChevronDown } from 'react-icons/fa6';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    // <div className="w-full relative bg-black-colors-white h-[4429px] overflow-hidden text-left text-16xl text-brand-colors-primary font-m-semibold">
    <div className='absolute top-[0px] left-[0px] bg-black-colors-white border-grey-colors-gray5 border-b-[1px] border-solid box-border w-[1280px] h-[85px] flex flex-row items-center justify-between py-4 px-[100px] text-sm'>
      <img
        className='w-[75px] relative h-[53.3px] overflow-hidden shrink-0'
        alt=''
        src={logo}
      />
      <div className='flex flex-row items-center justify-start gap-2'>
        <div className='flex flex-row items-center justify-start p-2'>
          <div className='flex flex-row items-center justify-center'>
            <div className='relative leading-[24px]'>About us</div>
          </div>
        </div>
        <div className='flex flex-row items-center justify-start p-2 gap-2'>
          <div className='flex flex-row items-center justify-center'>
            <div className='relative leading-[24px]'>Services</div>
          </div>
          <FaChevronDown />
          {/* <img
              className="w-6 relative h-3 overflow-hidden shrink-0 object-contain"
              alt=""
              src="/weuiarrowoutlined@2x.png"
            /> */}
        </div>
        <div className='flex flex-row items-center justify-start p-2 gap-2'>
          <div className='flex flex-row items-center justify-center'>
            <div className='relative leading-[24px]'>Projects</div>
          </div>
          <FaChevronDown />
        </div>
        <div className='flex flex-row items-center justify-start p-2'>
          <div className='flex flex-row items-center justify-center'>
            <div className='relative leading-[24px]'>Blog</div>
          </div>
        </div>
      </div>
      <div className='rounded-lg border-brand-colors-primary border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-2 px-6 text-xs'>
        <div className='relative leading-[18px]'>Contact Us</div>
      </div>
    </div>

    // </div>
  );
}
