import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as SLink } from 'react-scroll';
import * as Unicons from '@iconscout/react-unicons';

export default function ProjectNavBar() {
  const [navbar, setNavbar] = useState(false);

  const [mobileButton, setMobileButton] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 350) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const homeClick = () => {
    setNavbar(false);
    setMobileButton(false);
    setMobileNav(false);
  };

  const mobileNavBackground = () => {
    if (window.scrollY <= 300) {
      setMobileNav(!mobileButton);
    }
  };

  const eventHandler = () => {
    console.log('mobile clicked');
    setMobileButton(!mobileButton);
    mobileNavBackground();
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <nav
      className={
        navbar || mobileNav
          ? ' right-0 left-0 inset-x-0 .bg-project-nav.activeback  z-50 activeback section.open '
          : 'right-0 left-0 inset-x-0 .bg-project-nav.activeback  z-50 section'
      }
    >
      <section className='container mx-auto text-gray-700'>
        <div className='sm:self-end grid md:grid-cols-1 items-center lg:grid-cols-2 gap-2'>
          <div className='hidden md:flex items-center font-trueno mr-10'>
            <h2 className='text-4xl logo  '>TECH COLAB / </h2>
            <p className='text-xs font-thin logo-add p-4 mr-10'>
              We are Creative
            </p>
            {/* MOBILE MENU */}
          </div>
          <div className='md:hidden py-8 px-3'>
            <div className=' md:hidden flex justify-between'>
              <div className='w-30'>
                {' '}
                <h4 className='text-2xl logo pt-1  w-max'>TECH COLAB </h4>
              </div>
              <button
                className='mobile-menu-button text-4xl'
                onClick={eventHandler}
              >
                {' '}
                <ion-icon name='menu-outline'></ion-icon>
              </button>
            </div>
          </div>
          <div className='hidden lg:flex justify-end md:flex test-query font-bold'>
            <Link className='' to='/'>
              <button
                className='py-5 px-4 cursor-pointer font-bold hover:underline'
                activeClass='active'
                type='button '
              >
                HOME
              </button>
            </Link>

            <SLink
              className='py-5 px-4 cursor-pointer hover:underline'
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={1700}
              duration={1000}
            >
              CONTACT
            </SLink>
            <SLink
              className='py-5 px-4 cursor-pointer hover:underline'
              activeClass='active'
              to='navbar'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              |
            </SLink>
            <Link
              className='py-5 pl-5 hover:underline'
              to={{ pathname: 'https://www.ara.ac.nz' }}
              target='_blank'
            >
              ARA
            </Link>
          </div>

          {/* mobile menu */}
          {mobileButton && (
            <div className='flex flex-col justify-center'>
              <Link
                className=''
                className='py-5 px-4 cursor-pointer hover:underline mx-auto'
                activeClass='active'
                to='/'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                HOME
              </Link>

              <SLink
                onClick={() => setMobileButton(!mobileButton)}
                className='py-5 px-4 cursor-pointer hover:underline  mx-auto'
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={2800}
                duration={1000}
              >
                CONTACT
              </SLink>
              <Link
                onClick={() => setMobileButton(!mobileButton)}
                className='py-5 pl-5 hover:underline  mx-auto sm: py-5 px-5'
                to={{ pathname: 'https://www.ara.ac.nz' }}
                target='_blank'
              >
                ARA
              </Link>
            </div>
          )}
        </div>
      </section>
    </nav>
  );
}
