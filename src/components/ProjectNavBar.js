import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as SLink } from 'react-scroll';
import logo from '../_images/tc_primary_white.png'
import mobileLogo from '../_images/tc_mobile.png'
import { useHistory } from 'react-router-dom';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const history = useHistory()

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
          ? 'fixed right-0 left-0 inset-x-0 bgph z-50 activeback section.open '
          : 'fixed right-0 left-0 inset-x-0 bgph z-50 section'
      }
    >
      <section className='container mx-auto'>
        <div className='sm:self-end grid md:grid-cols-1 items-center lg:grid-cols-2 gap-2'>
          <Link to='/'>
          <div
            className='hidden lg:flex items-center font-trueno mr-10 w-28 my-4'
          >
            <img src={logo} alt=''/>
            {/* MOBILE MENU */}
          </div>
          </Link>
          <div className='lg:hidden py-8 px-3'>
            <div
              className=' lg:hidden flex justify-between'
            >
              <div className='w-28 pt-1'>
                {' '}
                <img src={mobileLogo} alt=''/>
              </div>
              <button
                className='mobile-menu-button text-4xl pr-4 '
                onClick={eventHandler}
              >
                {' '}
                <ion-icon name='menu-outline'></ion-icon>
              </button>
            </div>
          </div>
          <div className='hidden lg:flex justify-end'>
            <Link
              className='py-5 px-4 cursor-pointer hover:underline'
              activeClass='active'
              to='/'
            >
              Home
            </Link>
            <Link
              className='py-5 px-4 cursor-pointer hover:underline'
              activeClass='active'
              to='/'
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
            >
              About
            </Link>
            <button
              className='py-5 px-4 cursor-pointer hover:underline font-bold'
              activeClass='active'
              onClick={() => history.goBack()}
              spy={true}
              smooth={true}
              offset={-55}
              duration={1000}
            >
              Projects
            </button>
            <button
              className='py-5 px-4 cursor-pointer hover:underline font-bold'
              activeClass='active'
              onClick={() => history.goBack()}
            >
              Students
            </button>

            <Link
              className='py-5 px-4 cursor-pointer hover:underline'
              activeClass='active'
              to='/'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Contact
            </Link>
            <Link
              className='py-5 px-4 cursor-pointer hover:underline'
              activeClass='active'
              to='/'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              |
            </Link>
            <Link
              className='py-5 pl-5 hover:underline'
              to={{ pathname: 'https://www.ara.ac.nz' }}
              target='_blank'
            >
              Ara
            </Link>
          </div>

          {/* mobile menu */}
          {mobileButton && (
            <div className='flex flex-col justify-center lg:hidden'>
              <Link
                onClick={homeClick}
                className='py-5 px-4 cursor-pointer hover:underline mx-auto'
                activeClass='active'
                to='/'
                spy={true}
                smooth={true}
                offset={-7000}
                duration={1000}
              >
                HOME
              </Link>
              <Link
                onClick={() => setMobileButton(!mobileButton)}
                className='py-5 px-4 cursor-pointer hover:underline  mx-auto'
                activeClass='active'
                to='/'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                ABOUT
              </Link>
              <Link
                onClick={() => setMobileButton(!mobileButton)}
                className='py-5 px-4 cursor-pointer hover:underline  mx-auto'
                activeClass='active'
                to='/'
                spy={true}
                smooth={true}
                offset={-55}
                duration={1000}
              >
                PROJECTS
              </Link>
              <Link
                onClick={() => setMobileButton(!mobileButton)}
                className='py-5 px-4 cursor-pointer hover:underline  mx-auto'
                activeClass='active'
                to='/'
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                STUDENTS
              </Link>

              <SLink
                onClick={() => setMobileButton(!mobileButton)}
                className='py-5 px-4 cursor-pointer hover:underline  mx-auto'
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={-100}
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
