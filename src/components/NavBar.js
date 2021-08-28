import React, { useRef, useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Link as SLink } from 'react-scroll';

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 775) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <nav
      className={
        navbar
          ? 'fixed right-0 left-0fixed inset-x-0 bgph  z-30 activeback section.open '
          : 'fixed right-0 left-0fixed inset-x-0 bgph z-30 section'
      }>
      <section className='container mx-auto'>
        <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-2 '>
          <div className='flex items-center font-trueno  '>
            <h2 className='text-4xl logo '>TECH COLAB / </h2>
            <p className='text-xs font-thin logo-add p-4'>Powered by Ara</p>
          </div>
          <div className='flex justify-end'>
            <SLink
              className='p-5 cursor-pointer hover:underline'
              activeClass='active'
              to='welcome'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}>
              HOME
            </SLink>
            <SLink
              className='p-5 cursor-pointer hover:underline'
              activeClass='active'
              to='project'
              spy={true}
              smooth={true}
              offset={-55}
              duration={1000}>
              PROJECTS
            </SLink>
            <SLink
              className='p-5 cursor-pointer hover:underline'
              activeClass='active'
              to='student'
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}>
              STUDENTS
            </SLink>

            <SLink
              className='p-5 cursor-pointer hover:underline'
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}>
              CONTACT
            </SLink>
            <SLink
              className='p-5 cursor-pointer hover:underline'
              activeClass='active'
              to='navbar'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}>
              |
            </SLink>
            <Link
              className='py-5 pl-5 hover:underline'
              to={{ pathname: 'https://www.ara.ac.nz' }}
              target='_blank'>
              ARA
            </Link>
          </div>
        </div>
      </section>
    </nav>
  );
}
