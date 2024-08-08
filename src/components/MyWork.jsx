import React from 'react';
import theme_pattern from '../Assets/theme_pattern.svg';
import projectData from '../Data/ProjectData';
import { FaArrowRightLong } from "react-icons/fa6";

const MyWork = () => {
  return (
    <div className='mx-auto items-center justify-center mt-12 max-w-screen-xl w-full px-4'>
      <hr className='border-richblack-500 border-t-2 w-full mb-8' />

      <div className='relative flex flex-col items-center mb-8'>
        <img
          src={theme_pattern}
          alt='Theme'
          height={120}
          width={120}
          loading='lazy'
          className='relative translate-x-5'
        />
        <h1 className='absolute top-0 font-bold text-richblack-50 text-3xl'>
          My Projects
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project) => (
          <div key={project.id} className="border-richblack-500 border-[2px] p-6 rounded-lg shadow-lg bg-transparent 
            hover:bg-richblue-900 h-auto hover:shadow-blue-400 
            hover:transition duration-200 cursor-pointer">
            
            {/* <h3 className="text-xl font-semibold text-richblack-50">{project.id}</h3> */}

            <img
              src={project.img}
              alt={project.name}
              className="w-full  object-cover rounded-md mb-4"
            />

            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300 
            font-bold text-xl md:text-2xl">
              {project.name}
            </h2>

            <p className="mt-2 text-richblack-50">{project.desc}</p>

            <div className='flex justify-start h-10 mt-4 mx-auto items-center gap-x-2'>
              <h3 className='font-bold text-richblack-50'>Read More</h3>
              <FaArrowRightLong className='text-caribbeangreen-200 h-10' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
