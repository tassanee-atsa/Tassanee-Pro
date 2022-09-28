import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import redeem from '../public/assets/redeem.png';
import getanote from '../public/assets/getanote.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Eco Project Tutorails Sharing'
            backgroundImg={redeem}
            projectUrl='/property'
            tech='Next JS'
          />
          <ProjectItem
            title='Note App'
            backgroundImg={getanote}
            projectUrl='/note'
            tech='React JS'

          />
    

       
        </div>
      </div>
    </div>
  );
};

export default Projects;
