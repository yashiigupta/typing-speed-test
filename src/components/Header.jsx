import iconSmall from '../assets/images/logo-small.svg'
import icon from '../assets/images/logo-large.svg'
import trophy from '../assets/images/icon-personal-best.svg'
const Header = () => {
  return (
    <div className='flex w-full justify-between lg:items-center items-start gap-[10px]'>
      {/* Mobile View */}
      <div className='md:hidden w-32 h-32'>
        <img src={iconSmall} className='w-25 h-25' alt="Icon" />
      </div>
      {/* Tablet and Laptop View */}
      <div className='flex flex-col items-start lg:gap-[10px] md:gap-1'>
        <img src={icon} alt="Icon" className='hidden md:inline-block'/>
      </div>

      <div className='flex justify-center items-center gap-[10px]'>
        <img src={trophy} alt="Personal Icon" className='w-[18px] h-[16px] md:w-[21px] md:h-[18px]'/>
        <span className='hidden text-[#949497] md:inline-block md:text-lg md:leading-[21.6px] md:tracking-[-0.6px]'>Personal best:</span>
        <span className='md:hidden text-[#949497] text-[16px] leading-[19.2px] tracking-[-0.48px]'>Best: </span>
        <span className='text-[#FFF] text-[16px] md:text-lg leading-[19.2px] tracking-[-0.48px] md:leading-[21.6px] md:tracking-[-0.6px]'>92 WPM</span>
      </div>
    </div>
  );
};

export default Header;