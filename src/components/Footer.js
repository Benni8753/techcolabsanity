import React from 'react';
import { Link as SLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import logo from '../_images/tc_primary_white.png'

export default function Footer() {
  return (
    <main className='bg-gray-900'>
      <div className='container mx-auto border-t border-white'>
        <div className='flex flex-col py-4 sm:flex sm:flex-row sm:items-baseline sm:justify-between sm:py-10  '>
          <div className='font-trueno w-24 '>
            <img src={logo} alt='ara logo' />
          </div>
          <div>
            <ul className='flex flex-col justify-center sm:p-4 sm:flex sm:justify-between sm:flex-row sm:font-thin'>
              <li className='my-4 sm:m-0 sm:pr-6'>
                <Link
                  className='py-5 px-4 cursor-pointer hover:underline mx-auto'
                  activeClass='active'
                  to='under-construction'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className='py-5 px-4 cursor-pointer hover:underline mx-auto'
                  activeClass='active'
                  to='under-construction'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  Legal Terms
                </Link>
              </li>
              <li>
                <Link
                  className='py-5 px-4 cursor-pointer hover:underline mx-auto'
                  activeClass='active'
                  to='under-construction'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  FAQs
                </Link>
              </li>
              <li className='my-4 sm:m-0'>
                <SLink
                  className='py-5 px-4 cursor-pointer hover:underline mx-auto'
                  activeClass='active'
                  to='welcome'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  Back to top{' '}
                </SLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className='text-gray-500 py-10'>
            Copyright 2021 Ara Canterbury. All Rights Reserved
          </p>
        </div>
      </div>
    </main>
  );
}
