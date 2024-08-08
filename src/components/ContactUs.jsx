import React, { useState } from 'react';
import theme from '../Assets/theme_pattern.svg';
import { IoMailOpen, IoCallSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill out all fields.');
      return;
    }

    try {
      // Send the form data using Axios
      await axios.post('https://formspree.io/f/xjkbrywr', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Show a success toast notification
      toast.success('Your message has been sent successfully!');

      // Reset the form fields
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      // Show an error toast notification
      toast.error('There was an error sending your message. Please try again.');
      console.error('Error sending form data:', error);
    }
  };

  // Check if the form is complete
  const isFormComplete = formData.name && formData.email && formData.message;

  return (
    <div className='mx-auto items-center justify-center mt-12 max-w-screen-xl px-4'>
      <hr className='border-richblack-500 border-t-2 w-full mb-8' />

      <div className='relative flex flex-col items-center mb-8'>
        <img
          src={theme}
          alt='Theme'
          height={120}
          width={120}
          className='relative translate-x-5'
        />
        <h1 className='absolute top-0 font-bold text-richblack-50 text-3xl'>
          Get In Touch
        </h1>
      </div>

      <div className='flex flex-col md:flex-row items-start justify-center md:justify-between 
        gap-8 md:gap-0'>
        <div className='w-full md:w-[40%] flex flex-col gap-y-4'>
          <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-300 
            font-bold text-xl md:text-3xl mb-4 text-center md:text-left'>
            Let's Talk
          </h1>
          <p className='text-sm md:text-base text-justify text-richblack-200 font-inter font-medium'>
            I'm currently available to take on new projects. 
            Feel free to reach out to me through the contact information below or drop me a message.
          </p>
          <div className='space-y-4'>
            <div className='flex items-center gap-x-2 text-richblack-50'>
              <IoMailOpen className='text-2xl' />
              <p>adityasamraat236@gmail.com</p>
            </div>
            <div className='flex items-center gap-x-2 text-richblack-50'>
              <IoCallSharp className='text-2xl' />
              <p>+91 74087 46198</p>
            </div>
            <div className='flex items-center gap-x-2 text-richblack-50'>
              <MdLocationOn className='text-2xl' />
              <p>Bhopal, India</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className='w-full md:w-[50%] border-richblack-500 border-[2px] 
          rounded-lg p-6'>
          <div className='space-y-4'>
            <div>
              <label htmlFor='name' className='block text-richblack-50 mb-2'>
                Your Name
              </label>
              <input
                type='text'
                placeholder='Enter Your Name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full px-4 py-2 rounded-lg bg-richblue-900
                 text-richblack-100 focus:outline-none'
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-richblack-50 mb-2'>
                Your Email
              </label>
              <input 
                type='email'
                placeholder='Enter Your Email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full px-4 py-2 rounded-lg bg-richblue-900
                 text-richblack-100 focus:outline-none'
              />
            </div>
            <div>
              <label htmlFor='message' className='block text-richblack-50 mb-2'>
                Write Your Message Here
              </label>
              <textarea 
                name='message'
                rows={8}
                placeholder='Enter Your Message...'
                value={formData.message}
                onChange={handleChange}
                className='w-full px-4 py-2 rounded-lg bg-richblue-900
                 text-richblack-100 focus:outline-none'
              />
            </div>
            <button 
              type='submit'
              disabled={!isFormComplete}
              className={`w-full px-4 py-2 mt-4 bg-gradient-to-r from-pink-500 to-yellow-300 
              text-richblack-900 font-bold rounded-lg hover:shadow-lg transition duration-200 
              ${!isFormComplete ? 'opacity-50 cursor-not-allowed' : ''}`}>
              Submit Now
            </button>
          </div>
        </form>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
