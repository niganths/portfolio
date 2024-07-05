import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Express from '../assets/ex.png';
import figma from '../assets/figma.png';
import post from '../assets/postman.png';
import sql from '../assets/mysql.png';
import git from '../assets/git.png';

const techStack = [
  { image: Mongo, name: 'MONGO DB' },
  { image: Express, name: 'EXPRESS JS' },
  { image: ReactImg, name: 'REACT JS' },
  { image: Node, name: 'NODE JS' },
  { image: JavaScript, name: 'JAVASCRIPT' },
  { image: HTML, name: 'HTML' },
  { image: CSS, name: 'CSS' },
  { image: GitHub, name: 'GITHUB' },
  { image: Tailwind, name: 'TAILWIND' },
  { image: FireBase, name: 'FIREBASE' },
  { image: figma, name: 'FIGMA' },
  { image: post, name: 'POSTMAN' },
  { image: sql, name: 'MYSQL' },
  { image: git, name: 'GIT' },
];

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Tools & Tech</p>
          <p className='py-4'>These are the Tools and technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {techStack.map((tech, index) => (
            <div key={index} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer'>
              <img className='w-20 mx-auto' src={tech.image} alt={`${tech.name} icon`} />
              <p className='my-4'>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;