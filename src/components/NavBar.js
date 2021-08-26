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
    <div className='flex justify-between -mt-14'>
      <container
        className={
          navbar
            ? 'flex justify-between p-4 fixed inset-x-0 pt-6 pb-4 bgph activeback'
            : 'flex justify-between p-4 fixed inset-x-0 pt-6 pb-4 bgph'
        }>
        <div className='flex items-center font-trueno'>
          <h2 className='text-4xl logo'>TECH COLAB / </h2>
          <p className='text-xs logo-add p-4'>Powered by Ara</p>
        </div>
        <div className=''>
          <SLink
            className='p-5 cursor-pointer'
            activeClass='active'
            to='welcome'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}>
            HOME
          </SLink>
          <SLink
            className='p-5 cursor-pointer'
            activeClass='active'
            to='project'
            spy={true}
            smooth={true}
            offset={-99}
            duration={1000}>
            PROJECTS
          </SLink>
          <SLink
            className='p-5 cursor-pointer'
            activeClass='active'
            to='student'
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}>
            STUDENTS
          </SLink>

          <SLink
            className='p-5 cursor-pointer'
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}>
            CONTACT
          </SLink>
          <SLink
            className='p-5 cursor-pointer'
            activeClass='active'
            to='navbar'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}>
            |
          </SLink>
          {/* <NavLink to='/' exact className='p-4'>
            Home
          </NavLink>
          <NavLink to='/project' className='p-4'>
            Projects
          </NavLink>
          <NavLink to='/student' className='p-4'>
            Students
          </NavLink>
          <NavLink to='/contact' className='p-4'>
            Contact
          </NavLink>
          <NavLink to='/' className='p-4'></NavLink> */}
          <Link
            className='p-5'
            to={{ pathname: 'https://www.ara.ac.nz' }}
            target='_blank'>
            ARA
          </Link>
        </div>
      </container>
    </div>
  );
}
