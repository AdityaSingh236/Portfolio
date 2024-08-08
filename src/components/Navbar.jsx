import React, { useState } from 'react';
import photo from '../Assets/photo.avif';
import { RiMenuLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { NavBarLinks } from '../Data/NavBarLinks';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 border 
        shadow-md shadow-black bg-richblue-900 h-16 fixed top-0 left-0 right-0 z-10'>
        
        <div className='flex justify-between items-center h-16'>
          
          <div className='flex space-x-2'>
            
            <img src={photo} alt='' className='h-12 w-12 rounded-full' />
            
            <h1 className='font-semibold text-xl cursor-pointer text-richblack-300'>
              Adity
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 
               text-2xl'>
                a
              </span>
              <p className='text-sm text-richblack-300'>Web Developer</p>
            </h1>
          </div>

          <div>
            {/* for desktop */}
            <ul className='hidden md:flex space-x-8 font-inter'>
              {NavBarLinks.map((link) => (
                <li key={link.id} className='text-richblack-300 hover:scale-105 duration-200 hover:ring-richblack-900 cursor-pointer font-semibold'>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>

            <div onClick={() => setMenu(!menu)} className='md:hidden cursor-pointer p-2'>
              {menu ? (
                <RxCross2 size={24} className='text-white' />
              ) : (
                <RiMenuLine size={24} className='text-white' />
              )}
            </div>
          </div>
        </div>

        {/* for mobile */}
        {menu && (
          <div className='md:hidden bg-richblue-900'>
            <ul className='flex flex-col h-screen items-center justify-center space-y-4 overflow-hidden'>
              {NavBarLinks.map((link) => (
                <li key={link.id} className='text-richblack-300 hover:scale-105 duration-200 hover:ring-richblack-900 cursor-pointer font-semibold text-2xl'>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
