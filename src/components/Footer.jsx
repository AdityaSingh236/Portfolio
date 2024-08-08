import React from 'react';
import { FaFacebookF,FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='bg-richblue-900 text-richblack-200 py-12 mx-auto'>
      <div className='mx-auto max-w-screen-xl px-4 justify-between'>
       
        <hr className='border-richblack-500 border-t-2 mb-8' />

        <div className='flex flex-col md:flex-row justify-between gap-8 mx-auto'>
          
          {/* About Me Section */}
          <div className='w-full md:w-[30%]'>
            
            <h4 className='text-lg md:text-2xl font-bold mb-4 text-transparent
             bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300'>
              About Me
            </h4>
           
            <p className='text-sm md:text-base text-justify'>
              Do you want to be even more successful? Learn to love learning and growth. 
              The more effort you put into improving your skills,
            </p>
           
            <p className='text-sm md:text-base mt-4'>
              Copyright ©2024 All rights reserved | This template is made with 
              <span className='text-pink-500'>♡</span> by 
              <a href='https://www.linkedin.com/in/aditya-singh-5629a1266/' 
              className='text-blue-400'>Aditya</a>
            </p>
          </div>

          {/* Newsletter Section */}
          <div className='w-full md:w-[30%]'>
           
            <h4 className='text-lg md:text-2xl font-bold mb-4 text-transparent 
                bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300'>
              Newsletter
            </h4>
           
            <p className='text-sm md:text-base mb-4'>
              Stay updated with our latest trends
            </p>
           
            <div className='flex'>
              <input
                type='email'
                placeholder='Enter email address'
                className='w-full px-4 py-2 rounded-l-lg bg-richblue-700
                 text-richblack-100 focus:outline-none'
              />
             
              <button className='bg-gradient-to-r from-pink-500 to-yellow-300
                 px-4 py-2 rounded-r-lg text-richblack-900 font-bold'>
                →
              </button>
            </div>
          </div>

          {/* Follow Me Section */}
          <div className='w-full md:w-[30%]'>
            
            <h4 className='text-lg md:text-2xl font-bold mb-4 text-transparent 
                bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300'>
              Follow Me
            </h4>
            
            <p className='text-sm md:text-base mb-4'>
              Let us be social
            </p>
            
            <div className='flex space-x-4'>
              <a href='https://www.facebook.com/' className='text-richblack-50 text-2xl'>
                <FaFacebookF />
              </a>
              <a href='https://www.instagram.com/' className='text-richblack-50 text-2xl'>
                <FaInstagram />
              </a>
              <a href='www.linkedin.com/in/aditya-singh-5629a1266' 
              className='text-richblack-50 text-2xl'>
                <FaLinkedin />
              </a>
            
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
