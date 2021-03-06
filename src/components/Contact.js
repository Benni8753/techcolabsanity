import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

toast.configure();

export default function Contact() {
  const [disable, setDisable] = useState(false);

  const confirm = () => {
    toast.success('Your email has been sent. We will get back to you soon.', {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 8000,
    });
  };

  function sendEmail(e) {
    console.log('Hello');
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ip09j19',
        'template_vjxl92o',
        e.target,
        'user_uSUJl0hhoaRracKVCvvnR'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    confirm();
    setDisable(true);
    console.log(disable);
  }

  return (
    <div id='contact' className='bg-gray-900 px-0 py-4 lg:p-12'>
      <section className='container mx-auto'>
        <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-2 '>
          <div
            className='flex flex-col space-y-8 justify-between '
            data-aos='fade-right'
          >
            <div>
              <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
              <p className='pt-2 pr-2 text-gray-100 text-sm'>
                Hi! Tell us how we can help you and we will answer you within
                the next 24 hours{' '}
              </p>
            </div>
            <div className='flex flex-col space-y-6 '>
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
                <span className='pr-10'>
                  {' '}
                  Madras Street, Christchurch Central City, Christchurch 8011
                </span>
              </div>
            </div>
            <div className='flex space-x-4 text-lg'>
              <Link
                to='under-construction'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <ion-icon name='logo-facebook'></ion-icon>
              </Link>
              <Link
                to='under-construction'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <ion-icon name='logo-linkedin'></ion-icon>
              </Link>
              <Link
                to='under-construction'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <ion-icon name='logo-twitter'></ion-icon>
              </Link>
              <Link
                to='under-construction'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <ion-icon name='logo-instagram'></ion-icon>
              </Link>
            </div>
          </div>
          <div>
            <div
              className=' bg-white rounded-xl shadow-lg p-4 text-gray-600 sm:p-8'
              data-aos='fade-right'
            >
              <form
                onSubmit={sendEmail}
                action=''
                className='flex flex-col space-y-4'
              >
                <div>
                  <label for='' className='text-sm'>
                    Your name
                  </label>

                  <input
                    required
                    name='name'
                    type='text'
                    placeholder='Your name'
                    class='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-900'
                  ></input>
                </div>
                <div>
                  <label for='' className='text-sm'>
                    Email Address
                  </label>

                  <input
                    required
                    name='email'
                    type='email'
                    placeholder='Email address'
                    class='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-900'
                  ></input>
                </div>
                <div>
                  <label for='' className='text-sm'>
                    Message
                  </label>

                  <textarea
                    required
                    name='text'
                    type='text'
                    placeholder='Message'
                    rows='4'
                    class='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-gray-900'
                  ></textarea>
                </div>
                <button
                  disabled={disable}
                  className={
                    !disable
                      ? 'transform hover:scale-110 motion-reduce:transform-none inline-block self-center st-back text-white font-bold rounded-lg px-6 py-2 uppercase text-sm sm:self-end'
                      : 'transform hover:scale-110 motion-reduce:transform-none inline-block self-center st-back text-white font-bold rounded-lg px-6 py-2 uppercase text-sm border disable sm:self-end'
                  }
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
