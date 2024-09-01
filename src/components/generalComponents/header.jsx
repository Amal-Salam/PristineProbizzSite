import {useState} from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import logo from '../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti';
import { CiSquareRemove } from 'react-icons/ci';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  return (
    <>
      <div className='absolute top-[0px] left-[0px] bg-black-colors-white border-grey-colors-gray5 border-b-[1px] border-solid box-border w-[1280px] h-[85px] flex-row items-center justify-between py-4 px-[100px] text-sm hidden lg:flex'>
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
            <FaChevronDown />
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
            <NavLink to='/contact' className='no-underline'>
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>

      <div className='absolute top-[0px] left-[calc(50%_-_164px)] w-[360px] h-[95px] overflow-hidden text-sm font-roboto lg:hidden'>
        <div className='absolute top-[42px]  w-[328px] flex flex-row items-center justify-between space-x-[200px]'>
          <NavLink to='/'>
            <img
              className='w-[75px] relative h-[53.3px] overflow-hidden shrink-0'
              alt=''
              src={logo}
            />
          </NavLink>

          <button
            className='sm:hidden text-3xl bg-white'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <CiSquareRemove /> : <TiThMenu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            className={`fixed top-24 left-0 h-50% bg-slate-100 shadow-lg rounded-xl transform ${
              mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out z-50 w-64`}
          >
            <div className='p-4 flex flex-col'>
              <NavLink
                to='/about'
                className='no-underline py-2'
                onClick={() => setMobileMenuOpen(false)}
              >
                About us
              </NavLink>
              <div className='py-2'>
                <div
                  className='flex items-center justify-between cursor-pointer'
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  Services <FaChevronDown />
                </div>
                {servicesDropdownOpen && (
                  <div className='flex flex-col pl-4'>
                    <NavLink
                      to='/energy'
                      className='block px-4 py-2 text-black hover:bg-gray-100 no-underline'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Energy Solutions
                    </NavLink>
                    <NavLink
                      to='/proeng'
                      className='block px-4 py-2 text-black hover:bg-gray-100 no-underline'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Process Engineering
                    </NavLink>
                    <NavLink
                      to='/research'
                      className='block px-4 py-2 text-black hover:bg-gray-100 no-underline'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Research Support
                    </NavLink>
                    <NavLink
                      to='/training'
                      className='block px-4 py-2 text-black hover:bg-gray-100 no-underline'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Training
                    </NavLink>
                  </div>
                )}
              </div>
              <div className='py-2'>
                <div
                  className='flex items-center justify-between cursor-pointer'
                  onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                >
                  Projects <FaChevronDown />
                </div>
                {projectsDropdownOpen && (
                  <div className='flex flex-col pl-4'>
                    <NavLink
                      to='/'
                      className='block px-4 py-2 text-black hover:bg-gray-100 no-underline'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Project 1
                    </NavLink>
                    <NavLink
                      to='/'
                      className='block px-4 py-2 text-black hover:bg-gray-100 no-underline'
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Project 2
                    </NavLink>
                    {/* Add more projects here */}
                  </div>
                )}
              </div>
              <NavLink
                to='/'
                className='no-underline py-2'
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </NavLink>
              <NavLink
                to='/'
                className='no-underline py-2'
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

