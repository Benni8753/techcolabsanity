import sample from '../_images/OMGBG4.mov';
import React from 'react';
import NavBar from './NavBarOld';
import Navbartest from './NavBar';
import Projects from './Project';
import Students from './Students';
import Contact from './Contact';
import { Link as SLink } from 'react-scroll';
export default function Welcome() {
  return (
    <div
      className='bg-fixed bg-no-repeat bg-cover max-h-screen items-center'
      id='welcome'>
      <div className='flex justify-between items-center max-h-screen'>
        <video autoPlay loop muted className='z-0  '>
          <source className='z-50' src={sample} type='video/mp4' />
        </video>
      </div>
      {/* BUTTON ARROW*/}
      <SLink
        className='p-5 cursor-pointer hover:underline'
        activeClass='active'
        to='project'
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}>
        <div className='animate-bounce text-5xl margin-set absolute -mt-14'>
          <ion-icon
            id='ion-icon-arrow'
            name='arrow-down-circle-outline'></ion-icon>
        </div>
      </SLink>
    </div>
  );
}
