import undo from '../assets/images/icon-restart.svg';

const RestartTest = () => {
  return (
    <div className="flex justify-center items-center lg:rounded-xl bg-[#262626] lg:gap-[10px] lg:h-14 lg:py-[10px] lg:px-[16px]">
      <p className="text-[#FFF] text-center lg:text-xl font-semibold tracking-[-0.3px] leading-[1.2]">Restart Test</p>
      <div className="flex lg:w-5 lg:h-5 flex-col justify-center items-center lg:gap-[10px]">
        <img src={undo} alt="Undo" className="lg:w-5 lg:h-5" />
      </div>
    </div>
  )
}

export default RestartTest;