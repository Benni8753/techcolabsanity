import React from 'react';

export default function Contact() {
  return (
    <div id='contact' className='bg-gray-900 p-12'>
      <section className='container mx-auto'>
        <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-2 '>
          <div className='flex flex-col space-y-8 justify-between'>
            <div>
              <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
              <p className='pt-2 text-gray-100 text-sm'>
                Hi! Tell us how we can help you and we will answer you within
                the next 24 hours{' '}
              </p>
            </div>
            <div className='flex flex-col space-y-6'>
              <div className='inline-flex space-x-2 items-center'>
                <ion-icon name='call' className='text-xl'></ion-icon>
                <span> + (64) 224 321 343</span>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <ion-icon name='mail' className='text-xl'></ion-icon>
                <span>johndoe@gmail.com</span>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <ion-icon name='location' className='text-xl'></ion-icon>
                <span>
                  {' '}
                  Madras Street, Christchurch Central City, Christchurch 8011
                </span>
              </div>
            </div>
            <div className='flex space-x-4 text-lg'>
              <a href='#'>
                <ion-icon name='logo-facebook'></ion-icon>
              </a>
              <a href='#'>
                <ion-icon name='logo-linkedin'></ion-icon>
              </a>
              <a href='#'>
                <ion-icon name='logo-twitter'></ion-icon>
              </a>
              <a href='#'>
                <ion-icon name='logo-instagram'></ion-icon>
              </a>
            </div>
          </div>
          <div>Contact Right</div>
        </div>
      </section>
    </div>
  );
}
