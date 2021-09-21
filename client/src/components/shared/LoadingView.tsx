import React from 'react'

const Loader = () => {
  let circleCommonClasses = 'h-2.5 w-2.5 bg-current   rounded-full';

  return (
      <div className='flex'>
          <div className={`${circleCommonClasses} mr-1 animate-bounce background bg-green-700`}></div>
          <div
              className={`${circleCommonClasses} mr-1 animate-bounce200 bg-green-700`}
          ></div>
          <div className={`${circleCommonClasses} animate-bounce400 bg-green-700`}></div>
      </div>
  );
};

export default Loader;