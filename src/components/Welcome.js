import sample from '../_images/OMGBG4.mov';
import React, { useState } from 'react';
import { Link as SLink } from 'react-scroll';

export default function Welcome() {
  // const [mobile, setMobile] = useState(false);

  // const changeBackground = () => {
  //   if (window.innerWidth < 750) {
  //     setMobile(true);
  //   } else {
  //     setMobile(false);
  //   }
  // };

  // window.addEventListener('load', changeBackground);

  return (
    <div className='min-h-screen object-cover '>
      {/* {!mobile ? ( */}
      <div className='media-desktop'>
        <div
          className='flex justify-between min-h-screen object-cover'
          id='welcome'
        >
          <video autoPlay loop muted className='z-30 object-cover'>
            <source
              className='z-30 min-h-screen object-cover'
              src={sample}
              type='video/mp4'
            />
          </video>
        </div>
      </div>
      {/* ) : ( */}
      <div className='media-mobile'>
        <div
          className='flex justify-between min-h-screen object-cover const-bg media-mobile'
          id='welcome'
        ></div>
      </div>
      {/* )} */}
      {/* BUTTON ARROW*/}
      <SLink
        className=' cursor-pointer hover:underline'
        activeClass='active'
        to='about'
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
      >
        {' '}
        <div className='invisible md:visible animate-bounce text-5xl margin-set absolute -mt-52 z-50 '>
          <ion-icon
            className=''
            id='ion-icon-arrow'
            name='arrow-down-circle-outline'
          ></ion-icon>
        </div>
      </SLink>
    </div>
  );
}
