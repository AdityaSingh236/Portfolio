import React from 'react'

const InfoCard = ({ icon, title, value, label }) => {
  return (
    <div className='flex flex-col items-center'>
        {icon || (
        <h1 className='font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500'>
            {value}
        </h1>
        )}
        <p className='font-bold text-2xl text-richblack-100 mt-2'>
        {title || label}
        </p>
  </div>
  )
}
export default InfoCard
