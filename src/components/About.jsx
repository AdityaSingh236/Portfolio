import React from 'react';
import theme from '../Assets/theme_pattern.svg';
import image from '../Assets/Square.jpg';
import { GiSkills } from 'react-icons/gi';
import SkillBar from '../Common/SkillBar';
import InfoCard from '../Common/InfoCard';

const About = () => {
  return (
    <div className='mx-auto items-center justify-center mt-12 max-w-screen-xl px-4'>
      <hr className=' border-richblack-500 border-t-2 w-full mb-8'/>

      <div className='relative flex flex-col items-center mb-8'>
        <img
          src={theme}
          alt='theme'
          height={120}
          width={120}
          className='relative translate-x-5'
        />
        <h1 className='absolute top-0 font-bold text-richblack-50 text-3xl'>
          About Me
        </h1>
      </div>

      <div className='flex flex-col md:flex-row gap-8 mt-10 items-center'>
        {/* Left - Image */}
        <div className='flex justify-center md:justify-start'>
          <img
            src={image}
            alt='Profile'
            className='rounded-md w-[150px] h-[150px] md:w-[450px] md:h-[350px] shadow-lg
            hover:shadow-blue-400 hover:transition duration-200 cursor-pointer'
          />
        </div>

        {/* Right - Text */}
        <div className='flex flex-col gap-y-6 mt-6 md:mt-0'>
          <p className='text-sm md:text-base text-justify text-richblack-200 font-inter font-medium'>
            Hi, I’m Aditya Singh, a recent Computer Science graduate specializing in MERN stack 
            development. I’ve gained hands-on experience with MongoDB, Express.js, React, and Node.js 
            through various projects and coursework.
          </p>

          <p className='text-sm md:text-base text-justify text-richblack-200 font-inter font-medium'>
            I’m eager to apply my skills to build scalable and efficient web applications. Passionate 
            about learning and growth, I’m excited to start my career and contribute to innovative tech solutions.
          </p>

          <div className='flex flex-col space-y-8'>
            <SkillBar skill="HTML & CSS" width="80%" />
            <SkillBar skill="JavaScript" width="70%" />
            <SkillBar skill="React.js" width="65%" />
            <SkillBar skill="Node.js" width="75%" />
          </div>
        </div>
      </div>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12'>
        <InfoCard
          icon={<GiSkills className='text-3xl bg-transparent bg-gradient-to-r from-pink-500 to-yellow-500' />}
          title="MERN Stack Developer"
          className="border-richblack-500 border-[2px] p-6 rounded-lg shadow-lg bg-transparent 
          hover:bg-richblue-900 hover:shadow-blue-400 
          hover:transition duration-200 cursor-pointer"
        />
        <InfoCard
          value="3+"
          label="Academic Projects"
          className="border-richblack-500 border-[2px] p-6 rounded-lg shadow-lg bg-transparent 
          hover:bg-richblue-900 hover:shadow-blue-400 
          hover:transition duration-200 cursor-pointer"
        />
        <InfoCard
          value="2+"
          label="Certifications"
          className="border-richblack-500 border-[2px] p-6 rounded-lg shadow-lg bg-transparent 
          hover:bg-richblue-900 hover:shadow-blue-400 
          hover:transition duration-200 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default About;
