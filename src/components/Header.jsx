import iconSmall from '../assets/images/logo-small.svg'
import icon from '../assets/images/logo-large.svg'
import trophy from '../assets/images/icon-personal-best.svg'
const Header = () => {
  return (
    <div className='lg:mb-16 flex justify-between items-center'>
      <img src={iconSmall} className='md:hidden lg:hidden' alt="Icon" />
      <img src={icon} alt="Icon" className='hidden md:inline-block lg:inline-block'/>
      <div className='inline-flex items-center font-[16px] lg:font-[18px]'>
        <img src={trophy} alt="Personal Icon" className='mr-2.5'/>
        <p className='text-[#949497]'><span className='hidden lg:inline-block'>Personal best:</span> <span className='lg:hidden'>Best: </span><span className='text-white'>92 WPM</span></p>
      </div>
    </div>
  );
};

export default Header;
