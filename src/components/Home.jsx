import React from 'react';
import profile from '../Assets/Aadi.png';
import { ReactTyped } from 'react-typed';
import About from './About';
import Services from './Services';
import MyWork from './MyWork';
import ContactUs from './ContactUs';

const Home = () => {

  
  return (
    <section id='home'
     className='flex flex-col items-center bg-richblue-700 mx-auto max-w-screen-2xl 
      gap-y-8 px-4 py-12 lg:px-8 lg:py-12'>
      
      <img 
        src={profile}
        alt='Profile'
        width={345}
        height={345}
        className='mt-10 md:mt-10 rounded-full w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80'
      />
     
      <div className='relative flex items-center gap-x-2 text-center'>
        <h1 className='font-bold text-xl md:text-2xl text-richblack-50'>
          I'm Aditya Singh and I'm a
        </h1>

        <div className='relative'>
          <ReactTyped
            className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 
              font-bold text-xl md:text-2xl absolute top-0 left-0 translate-y-[-15px]'
            strings={["Developer", "Programmer", "Coder"]}
            typeSpeed={40}
            backSpeed={50}
            loop={true}
          />
        </div>
      </div>

      <p className='text-sm sm:text-base md:text-lg text-center text-richblack-200 font-inter font-medium max-w-xl mx-auto'>
        A Passionate MERN Stack Developer from India, eager to start my journey in the tech industry.
        Driven by a love for learning and innovation, I am ready to contribute to impactful 
        projects in the tech world.
      </p>

      <div>
        <a 
          href="https://www.linkedin.com/in/aditya-singh-5629a1266" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button 
            className='bg-gradient-to-r from-pink-500 to-yellow-500 rounded-md py-2 px-4 
            text-pure-greys-100 font-bold transition-transform transform hover:scale-105 
            shadow-md hover:shadow-blue-500'
          >
            Connect With Me
          </button>
        </a>

      </div>
      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="mywork">
        <MyWork />
      </section>

      <section id="contact">
        <ContactUs />
      </section>

    </section>
  );
};

export default Home;