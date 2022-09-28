import React from 'react'
import Head from 'next/head'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const resume = () => {
  return (
    <>
      <Head>
        <title>Tassanee | Resume</title>
        <meta name="description" content="I’m a full Stack Developer" />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Tassanee Atsawajuramanee</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/tassanee-atsawajuramanee-b0a72b248/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href="https://github.com/tassanee-atsa"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Tel: 07789609773 <span className="px-1">|</span> Location: London,
              UK <span className="px-1">|</span> Nationality: British Citizen
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Tel: 07789609773</p>
            <p className="py-2">Location: London, UK</p>
            <p>Nationality: British Citizen</p>
          </div>
        </div>
        <p>
          I settled in the UK in 2014 with my partner and became a British
          Citizen. After starting a family, I retrained as a full stack web
          developer. I chose this path because I wanted to work in a creative
          field where I could solve interesting problems with other people. I
          applied for and successfully completed the School of Code bootcamp. It
          gave me the opportunity to work on several coding projects in small,
          collaborative teams. Although the bootcamp was hard and I still have a
          lot to learn, I really enjoyed the experience. It gave me the
          confidence and skills I need to start working in the industry. I’m
          currently looking for my first job in my new career.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>MongoDB
            <span className="px-2">|</span>Typescript
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>Firebase
            <span className="px-2">|</span>Heroku
          </p>
          {/* <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p> */}
        </div>

        <h5 className="text-center underline text-[18px] py-4">EDUCATION</h5>
        {/* Education */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Full Stack Web Bootcamp</span>
          </p>
          <p className="py-1 italic">School of Code, Remote</p>
          <p className="py-1 italic">April 2022 - August 2022</p>
        </div>

        {/* Education */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              MSc International Management
            </span>
          </p>
          <p className="py-1 italic">Strathclyde University, Glasgow, UK</p>
          <p className="py-1 italic">September 2007 - November 2008</p>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              BEng Electronic and Computer Engineering
            </span>
          </p>
          <p className="py-1 italic">
            Nottingham University, UK & Thammasat University, Thailand
          </p>
          <p className="py-1 italic">May 2002 - July 2006</p>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">EXPERIENCE</h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Operations Manager</span>
          </p>
          <p className="py-1 italic">Sarayut Ltd, Buriram, Thailand</p>
          <p className="py-1 italic">February 2011 - June 2014</p>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold">International Marketing and Business Analyst</span>
          </p>
          <p className="py-1 italic">AP Frozen Food Co., Ltd. (Apitoon Group) Bangkok, Thailand</p>
          <p className="py-1 italic">March 2010 - January 2011</p>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold">
Sales and Marketing Associate</span>
          </p>
          <p className="py-1 italic">Foster Marketing Co., Ltd. London, UK</p>
          <p className="py-1 italic">October 2006 - March 2007</p>
        </div>
      </div>
    </>
  )
}

export default resume
