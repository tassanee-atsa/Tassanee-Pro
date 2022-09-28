import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tassanee from '../public/assets/tassanee.jpeg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'></h2>
          <p className='py-2 text-gray-600'>
         
          </p>
          <p className='py-2 text-gray-600'>
          I settled in the UK in 2014 with my partner and became a British Citizen. After starting a family, I retrained as a full stack web developer.
I chose this path because I wanted to work in a creative field where I could solve interesting problems with other people. I applied for and successfully completed the School of Code bootcamp. It gave me the opportunity to work on several coding projects in small, collaborative teams.
          </p>
          <p className='py-2 text-gray-600'>
          Although the bootcamp was hard and I still have a lot to learn, I really enjoyed the experience. It gave me the confidence and skills I need to start working in the industry. I’m currently looking for my first job in my new career.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={Tassanee} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
