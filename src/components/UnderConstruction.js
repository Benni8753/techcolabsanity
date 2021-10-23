import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../_images/tc_primary_white.png'


export default function UnderConstruction() {
  return (
    <main className='const-bg min-h-screen place-content-center flex flex-col justify-center'>
      <div className='flex items-center font-trueno pb-10 mx-auto mt-20 w-52'>
      <img src={logo} alt=''/>    this.firstLoad = truef
        {/* MOBILE MENU */}
      </div>
      <div className='max-w-screen md:m-auto flex flex-col '>
        <h3 className='text-lg md:text-2xl p-10 self-center'>
          This page/link is currently under construction and will come up soon.
        </h3>

        <h3 className='text-lg md:text-2xl p-20 self-center'>
          Use the button below to go back to the homepage.
        </h3>

        <div className='text-lg md:text-2xl self-center'>
          <Link
            className='text-lg pb-2 md:text-2xl pt-20 mb-2 self-center'
            to='/'
          >
            <button
              className=' bg-gray-500 align-middle px-10 py-4 font-black mt-10 text-xl self-center'
              type='button '
            >
              HOMEPAGE
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
