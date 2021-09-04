import React from 'react';
import { Link as SLink } from 'react-scroll';

export default function Footer() {
  return (
    <main className='bg-gray-900'>
      <div className='container mx-auto border-t border-white'>
        {/* <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-2 '>
          <div>Left section</div>
          <div>Right section</div>
        </div> */}
        <div className='flex items-baseline justify-between py-10'>
          <div className='font-trueno  '>
            <h2 className='text-2xl logo '>TECH COLAB</h2>
          </div>
          <div>
            <ul className='flex justify-between font-thin'>
              <li className='pr-10'>
                <a href='#'>Privacy Policy</a>
              </li>
              <li className='pr-10'>
                <a href='#'>Legal Terms</a>
              </li>
              <li className=''>
                <SLink
                  className='p-5 cursor-pointer hover:underline'
                  activeClass='active'
                  to='welcome'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}>
                  Back to top{' '}
                  <ion-icon
                    id='ion-icon-arrow'
                    name='arrow-up-circle-outline'></ion-icon>
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
