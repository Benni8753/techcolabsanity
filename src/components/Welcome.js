import React from 'react';
import NavBar from './NavBarOld';
import Navbartest from './NavBar';
import Projects from './Project';
import Students from './Students';
import Contact from './Contact';
export default function Welcome() {
  return (
    <div className='bg-fixed bg-no-repeat bg-cover' id='welcome'>
      <container className='flex justify-between items-center p-12 '>
        <svg class='animate-bounce w-6 h-6'></svg>
      </container>
    </div>
  );
}
