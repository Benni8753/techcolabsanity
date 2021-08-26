import React from 'react';
import NavBar from './NavBar';

export default function Welcome() {
  return (
    <div className='bg-fixed bg-no-repeat bg-cover' id='welcome'>
      <container className='flex justify-between items-center p-12 '>
        {/* <div className='flex items-center font-trueno'>
          <h2 className='text-4xl'>TECH COLAB / </h2>
          <p className='text-xs logo-add p-4'>Powered by Ara</p>
        </div> */}
        <NavBar />
      </container>
    </div>
  );
}
