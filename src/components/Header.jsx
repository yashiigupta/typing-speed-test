import iconSmall from '../assets/images/logo-small.svg'
import icon from '../assets/images/logo-large.svg'
import trophy from '../assets/images/icon-personal-best.svg'
const Header = () => {
  return (
    <div className='flex w-full justify-between items-center'>
      <img src={iconSmall} className='md:hidden lg:hidden' alt="Icon" />
      <div className='flex items-start lg:gap-[10px]'><img src={icon} alt="Icon" className='hidden md:inline-block lg:inline-block'/></div>
      
      <div className='flex justify-center items-center lg:gap-[10px] font-[16px] lg:font-[18px]'>
        <img src={trophy} alt="Personal Icon" className='lg:w-[21px] lg:h-[18px]'/>
        <p className='text-[#949497] leading-5'><span className='hidden lg:inline-block'>Personal best:</span> <span className='lg:hidden'>Best: </span><span className='text-white'>92 WPM</span></p>
      </div>
    </div>
  );
};

export default Header;
