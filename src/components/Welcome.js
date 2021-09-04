import sample from '../_images/OMGBG4.mov';
import React from 'react';
import { Link as SLink } from 'react-scroll';
export default function Welcome() {
  return (
    <div className='min-h-full min-w-full'>
      <div className='flex justify-between min-h-full min-w-full' id='welcome'>
        <video autoPlay loop muted className='z-30 min-w-full min-h-full'>
          <source
            className='z-30 max-w-max min-h-max'
            src={sample}
            type='video/mp4'
          />
        </video>
      </div>
      {/* BUTTON ARROW*/}
      <SLink
        className=' cursor-pointer hover:underline'
        activeClass='active'
        to='about'
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}>
        {' '}
        <div className='invisible md:visible animate-bounce text-5xl margin-set absolute -mt-52 z-50 '>
          <ion-icon
            className=''
            id='ion-icon-arrow'
            name='arrow-down-circle-outline'></ion-icon>
        </div>
      </SLink>
    </div>
  );
}
