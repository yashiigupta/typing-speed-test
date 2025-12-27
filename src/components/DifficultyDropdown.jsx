import dropdown from '../assets/images/icon-down-arrow.svg';

const DifficultyDropdown = () =>  {
  return (
    <div className="flex py-[6px] px-[10px] justify-center items-center gap-[10px] flex-grow rounded-lg border border-[#717178]">
      <p className="text-[#FFF] text-[16px] leading-[19.2px] tracking-[-0.48px]">Hard</p>
      <img src={dropdown} alt="Dropdown Icon" className='w-[10.016px] h-[6px]'/>
    </div>
  )
}

export default DifficultyDropdown