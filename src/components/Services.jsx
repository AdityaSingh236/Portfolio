import React from 'react';
import theme_pattern from '../Assets/theme_pattern.svg';
import Service_Data from '../Data/ServicesData';
import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
  return (
    <div className='mx-auto items-center justify-center mt-12 max-w-screen-xl px-4'>
        <hr className=' border-richblack-500 border-t-2 w-full mb-8'/>

      <div className='relative flex flex-col items-center mb-8'>
        <img
          src={theme_pattern}
          alt='Theme'
          height={120}
          width={120}
          className='relative translate-x-5'
        />
        <h1 className='absolute top-0 font-bold text-richblack-50 text-3xl'>
          My Services
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        {Service_Data.map((service) => (
          
          <div key={service.s_no} className=" border-richblack-500 border-[2px] p-6 rounded-lg 
            shadow-lg bg-transparent hover:bg-richblue-900 h-auto hover:shadow-blue-400 
            hover:transition duration-200 cursor-pointer">
            
            <h3 className="text-xl font-semibold text-richblack-50">{service.s_no}</h3>
            
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300 
            font-bold text-xl md:text-2xl">
                {service.s_name}
            </h2>
            
            <p className="mt-2 text-richblack-50">{service.s_desc}</p>
            
            <div className='flex justify-start h-10 mt-4 mx-auto items-center gap-x-2'>
              <h3 className=' font-bold text-richblack-50'> Read More</h3>
              <FaArrowRightLong className=' text-caribbeangreen-200 h-10'/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
