import React, { useState, useEffect } from 'react';
import iconSmall from '../../assets/logo/logo-small.svg'
import icon from '../../assets/logo/logo-large.svg'
import trophy from '../../assets/icons/icon-personal-best.svg'

const Header = () => {
  const [personalBest, setPersonalBest] = useState(null);

  useEffect(() => {
    const wpm = parseInt(localStorage.getItem("bestWPM"));
    if(wpm == null) setPersonalBest(0);
    else setPersonalBest(wpm);
  }, [personalBest]);
  
  return (
    <div className='flex w-full justify-between items-center gap-[10px] self-stretch'>
      {/* Mobile View */}
      <div className='md:hidden flex items-start gap-[10px]'>
        <img src={iconSmall} className='w-8 h-8' alt="Icon" />
      </div>
      {/* Tablet and Laptop View */}
      <div className='hidden md:flex flex-col items-start lg:gap-[10px] md:gap-1'>
        <img src={icon} alt="Icon"/>
      </div>

      <div className='flex justify-center items-center gap-[10px]'>
        <img src={trophy} alt="Personal Icon" className='w-[18px] h-[16px] md:w-[21px] md:h-[18px]'/>
        <span className='hidden text-[#949497] md:inline-block md:text-lg md:leading-[21.6px] md:tracking-[-0.6px]'>Personal best:</span>
        <span className='md:hidden text-[#949497] text-[16px] leading-[19.2px] tracking-[-0.48px]'>Best:</span>
        <span className='text-[#FFF] text-[16px] md:text-lg leading-[19.2px] tracking-[-0.48px] md:leading-[21.6px] md:tracking-[-0.6px]'>{personalBest} WPM</span>
      </div>
    </div>
  );
};

export default Header;