import React, { useState, useEffect } from 'react';
import iconSmall from '../../assets/logo/logo-small.svg'
import icon from '../../assets/logo/logo-large.svg'
import trophy from '../../assets/icons/icon-personal-best.svg'

const HeaderCompleted = () => {
  const [personalBest, setPersonalBest] = useState(null);
  const bestWPM = localStorage.getItem("bestWPM");

  useEffect(() => {
    if(bestWPM == null) setPersonalBest(0);
    else setPersonalBest(bestWPM);
  }, [personalBest, bestWPM]);
  
  return (
    <div className='flex lg:w-[1216px] justify-between items-center self-stretch lg:self-auto'>
      {/* Mobile View */}
      <div className='md:hidden flex items-start gap-[10px] w-8 h-8'>
        <img src={iconSmall} className='w-full' alt="Icon" />
      </div>
      {/* Tablet and Laptop View */}
      <div className='hidden md:flex items-start gap-[10px]'>
        <img src={icon} alt="Icon"/>
      </div>

      <div className='flex justify-center items-center gap-[10px]'>
        <img src={trophy} alt="Personal Icon" className='w-[18px] h-[16px] md:w-[21px] md:h-[18px]'/>
        <div className='flex gap-1'>  {/* hahaha */}
          <span className='hidden text-[#949497] md:inline-block md:text-lg md:leading-[21.6px] md:tracking-[-0.6px]'>Personal best:</span>
          <span className='md:hidden text-[#949497] text-[16px] leading-[19.2px] tracking-[-0.48px]'>Best: </span>
          <span className='text-[#FFF] text-[16px] md:text-lg leading-[19.2px] tracking-[-0.48px] md:leading-[21.6px] md:tracking-[-0.6px]'>{personalBest} WPM</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderCompleted;