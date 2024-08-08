import React from 'react';

const SkillBar = ({ skill, width }) => {
  return (
    <div className='flex items-center font-bold text-richblack-100 gap-4'>
      <p>{skill}</p>
      <hr
        style={{ width }}
        className='h-[5px] bg-gradient-to-r from-pink-500 to-yellow-500'
      />
    </div>
  );
};

export default SkillBar;
