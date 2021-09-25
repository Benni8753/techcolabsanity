import React from 'react';
import NavBar from './NavBar';
import ProjectNavBar from './ProjectNavBar';
import { Link } from 'react-router-dom';

export default function UnderConstruction() {
  return (
    <main className='const-bg min-h-screen place-content-center flex flex-col justify-center'>
      <div className='flex items-center font-trueno pb-10 mx-auto mt-20'>
        <h2 className='text-4xl md:text-6xl logo self-center'>TECH COLAB / </h2>
        <p className='text-xs md:text-xl font-thin logo-add p-4'>
          Powered by Ara
        </p>
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
          <Link className='text-lg md:text-2xl p-20 self-center' to='/'>
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