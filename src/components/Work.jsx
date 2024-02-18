
import React from 'react';
import Car from '../assets/car.png'
import net from '../assets/netflix.png'
import e from '../assets/shop.png'
import culture from '../assets/culture.png'
import todo from '../assets/todo.png'
import weather from '../assets/climate.png'



const Work = () => {
return (
<div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
  <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div className='pb-8'>
      <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
        Projects
      </p>
      <p className='py-6'>// Check out some of my recent work</p>
    </div>

    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

      <div
        style={{ backgroundImage: `url(${Car})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
      >
    
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
          21 CARS
          </span>
          <div className='pt-8 text-center'>
            <a href='/'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo
              </button>
            </a>
            <a href='https://github.com/niganths/21cars'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' >
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${net})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
      >
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
          NEFFLIXCLONE
          </span>
          <div className='pt-8 text-center'>
            <a href='https://netflixclonebynixx.netlify.app/'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo
              </button>
            </a>
            <a href='https://github.com/niganths/netflixclone'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
        {/* Grid Item */}
      <div
        style={{ backgroundImage: `url(${e})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
      >
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
            e-commerce
          </span>
          <div className='pt-8 text-center'>
            <a href='/'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo
              </button>
            </a>
            <a href='https://github.com/niganths/shopkart'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${culture})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
      >
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
            Discover India
          </span>
          <div className='pt-8 text-center'>
            <a href='https://cultural-and-hertiage-of-india.onrender.com/'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo
              </button>
            </a>
            <a href='https://github.com/niganths/Discover-India'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${todo})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
      >
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
           React todo app
          </span>
          <div className='pt-8 text-center'>
            <a href='/'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo
              </button>
            </a>
            <a href='https://github.com/niganths/Tasker-app'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${weather})` }}
        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
      >
        {/* Hover Effects */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>
            Weather react app
          </span>
          <div className='pt-8 text-center'>
            <a href='/'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Demo
              </button>
            </a>
            <a href='https://github.com/niganths/weather-app'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
    
  
      
          </div>
        </div>
      </div>
  
);
};

export default Work;