import sample from '../_images/OMGBG4.mov';
import React from 'react';
import { Link as SLink } from 'react-scroll';

export default function Welcome() {
  let firstLoad = true;
  class TypeWriter {
    constructor(txtElement, words, wait = 1000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 8);
      this.type();
      this.isDeleting = false;
    }

    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];

      // Check if deleting
      if (this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

      // Initial Type Speed
      let typeSpeed = 200;

      if (this.isDeleting) {
        typeSpeed /= 2;
      }

      // If word is complete
      if (!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }

      setTimeout(() => this.type(), typeSpeed);
    }
  }

  // Init On DOM Load

  // Init App
  function init() {
    if (firstLoad) {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait); 
    firstLoad = false
  }
  }

  return (
    <div className='min-h-screen object-cover' onMouseMove={init}>
      <div className='container mx-auto'>
        <div className='text-5xl absolute bg-transparent z-50 h-52 pt-72 '>
          <p>
            Your 
            <span
              className='txt-type'
              data-wait='3000'
              data-words='[" Software Partner", " Web Designer", " Marketing Expert", " Software Creator", " Tech Colab Team"]'
            ></span>
          </p>
        </div>
      </div>
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
