import {useState} from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import logo from '../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

export default function Header() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  return (
    <div className='absolute top-[0px] left-[0px] bg-black-colors-white border-grey-colors-gray5 border-b-[1px] border-solid box-border w-[1280px] h-[85px] flex flex-row items-center justify-between py-4 px-[100px] text-sm'>
      <NavLink to='/'>
        <img
          className='w-[75px] relative h-[53.3px] overflow-hidden shrink-0'
          alt=''
          src={logo}
        />
      </NavLink>

      <div className='flex flex-row items-center justify-start gap-2'>
        <div className='flex flex-row items-center justify-start p-2'>
          <div className='flex flex-row items-center justify-center'>
            <div className='relative leading-[24px]'>
              <NavLink to='/about' className='no-underline'>
                About us
              </NavLink>
            </div>
          </div>
        </div>
        <div
          className='flex flex-row items-center justify-start p-2 gap-2 relative'
          onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
        >
          <div className='flex flex-row items-center justify-center'>
            <div className='relative leading-[24px]'>Services</div>
          </div>
          <FaChevronDown
          // onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
          />
          {servicesDropdownOpen && (
            <div className='absolute top-full mt-2 w-40 bg-white shadow-lg z-50 text-justify'>
              <NavLink
                to='/energy'
                className='block px-4 py-2 text-black hover:bg-gray-100 no-underline'
              >
                Energy Solutions
              </NavLink>
              <hr className='bg-slate-400' />
              <NavLink
                to='/proeng'
                className='block px-4 py-2 text-black hover:bg-gray-100 no-underline'
              >
                Process Engineering
              </NavLink>
              <hr className='bg-slate-400' />
              <NavLink
                to='/research'
                className='block px-4 py-2 text-black hover:bg-gray-100 no-underline'
              >
                Research Support
              </NavLink>
              <hr className='bg-slate-400' />
              <NavLink
                to='/training'
                className='block px-4 py-2 text-black hover:bg-gray-100 no-underline'
              >
                Training
              </NavLink>
            </div>
          )}
        </div>
        <div
          className='flex flex-row items-center justify-start p-2 gap-2'
          onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
        >
          <div className='flex flex-row items-center justify-center relative'>
            <div className='relative leading-[24px]'>Projects</div>
          </div>
          <FaChevronDown />
          {projectsDropdownOpen && (
            <div className='absolute top-full mt-2 w-40 bg-white shadow-lg z-50 text-justify'>
              <NavLink
                to='/energy'
                className='block px-4 py-2 text-black hover:bg-gray-100 no-underline'
              >
                Energy Solutions
              </NavLink>
              <hr className='bg-slate-400' />
              <NavLink
                to='/proeng'
                className='block px-4 py-2 text-black hover:bg-gray-100 no-underline'
              >
                Process Engineering
              </NavLink>
              <hr className='bg-slate-400' />
              <NavLink
                to='/research'
                className='block px-4 py-2 text-black hover:bg-gray-100 no-underline'
              >
                Research Support
              </NavLink>
              <hr className='bg-slate-400' />
              <NavLink
                to='/training'
                className='block px-4 py-2 text-black hover:bg-gray-100 no-underline'
              >
                Training
              </NavLink>
            </div>
          )}
        </div>
        <div className='flex flex-row items-center justify-start p-2'>
          <div className='flex flex-row items-center justify-center'>
            <div className='relative leading-[24px]'>
              <NavLink to='/blog'></NavLink>Blog
            </div>
          </div>
        </div>
      </div>
      <div className='rounded-lg border-brand-colors-primary border-[1px] border-solid overflow-hidden flex flex-row items-center justify-start py-2 px-6 text-xs'>
        <div className='relative leading-[18px] '>
          <NavLink to='/contact' className='no-underline'>Contact Us</NavLink>
        </div>
      </div>
    </div>
  );
}
