import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import deliveryImg from '../public/assets/projects/delivery.jpg';
import bakeryImg from '../public/assets/projects/bakery.png'
import hoobank from '../public/assets/projects/hoobank.jpg'
import tic from '../public/assets/projects/tictactoe.jpg'
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
            title='Delivery Food'
            backgroundImg={deliveryImg}
            projectUrl='/delivery'
            tech='React JS'
          />
          <ProjectItem
            title='TH. Bakery'
            backgroundImg={bakeryImg}
            projectUrl='/bakery'
            tech='Next JS'

          />
          <ProjectItem
            title='Hoo Bank'
            backgroundImg={hoobank}
            projectUrl='/hoobank'
            tech='React JS'

          />
          <ProjectItem
            title='Tic-Tac-Toe-Game'
            backgroundImg={tic}
            projectUrl='/tictactoe'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
