import Image from 'next/image';

import { ImageWrapper } from '@/app/_layout/contact/components/user-details/index.styled';
import { Transition } from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Contact',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Dennis',
};

export default function Contact() {
  return (
    <Transition>
      <section className='bg-[#1C1D20] text-white'>
        <div className='container flex pt-44  gap-16'>
          <div className=''>
            <h1 className='text-9xl'>
              Let's start a <br /> project together
            </h1>

            <form className='my-20'>
              <label className='text-2xl block mt-8' htmlFor='name'>
                What's your name? <br />
                <input
                  className='bg-transparent text-gray-600 outline-none mt-4 pl-4 border-b pb-12 w-full border-gray-500'
                  type='text'
                  id='name'
                  placeholder='Kishor Tarafder *'
                />
              </label>
              <label className='text-2xl block mt-8' htmlFor='email'>
                What's your email? <br />
                <input
                  className='bg-transparent text-gray-600 outline-none mt-4 pl-4 border-b pb-12 w-full border-gray-500'
                  type='mail'
                  id='name'
                  placeholder='kishor.tarafder@gmail.com *'
                />
              </label>
              <label className='text-2xl block mt-8' htmlFor='name'>
                What's the name of your organization? <br />
                <input
                  className='bg-transparent text-gray-600 outline-none mt-4 pl-4 border-b pb-12 w-full border-gray-500'
                  type='text'
                  id='name'
                  placeholder='Tarafder & co. *'
                />
              </label>
              <label className='text-2xl block mt-8' htmlFor='name'>
                What are you looking for? <br />
                <input
                  className='bg-transparent text-gray-600 outline-none mt-4 pl-4 border-b pb-12 w-full border-gray-500'
                  type='text'
                  id='name'
                  placeholder='C+, Software built *'
                />
              </label>
              <label className='text-2xl block mt-8' htmlFor='name'>
                Your Message? <br />
                <input
                  className='bg-transparent text-gray-600 outline-none mt-4 pl-4 border-b pb-12 w-full border-gray-500'
                  type='text'
                  id='name'
                  placeholder='Hello Kishor, can you help me with... *'
                />
              </label>

              <button className='aspect-square rounded-full bg-blue-500 p-12 text-xl mt-12 ml-80'>
                Send it !
              </button>
            </form>
          </div>
          <div className='w-56 mt-28'>
            <ImageWrapper>
              <Image
                src='/header-img.png'
                className='rounded-full object-cover object-top bg-slate-400'
                fill={true}
                alt='Dennis Snellenberg Profile Picture'
              />
            </ImageWrapper>
            <div className='mt-20'>
              <p className='text-xl text-gray-500 font-bold mb-4'>
                Contact Details
              </p>
              <p className='text-lg '>kishortarafder@gmail.com</p>
              <p className='text-lg mb-8'>+8801742992646</p>
              <p className='text-xl text-gray-500 font-bold mb-4'>
                Business Details
              </p>
              <p className='text-lg '>
                Kishor Tarafder Ltd. <br /> Business ID: 23-53520-3
              </p>
              <p className='text-lg '>VAT: NL866034080B01</p>
              <p className='text-lg '>Location: Bangladesh</p>
            </div>
          </div>
        </div>
      </section>
    </Transition>
  );
}
