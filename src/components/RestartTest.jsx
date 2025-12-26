import undo from '../assets/images/icon-restart.svg';

const RestartTest = () => {
  return (
    <div className="flex justify-center items-center md:rounded-xl bg-[#262626] md:gap-[10px] md:h-14 md:py-[10px] md:px-[16px]">
      <p className="text-[#FFF] text-center md:text-xl font-semibold md:tracking-[-0.3px] md:leading-[1.2]">Restart Test</p>
      <div className="flex md:w-5 md:h-5 flex-col justify-center items-center md:gap-[10px]">
        <img src={undo} alt="Undo" />
      </div>
    </div>
  )
}

export default RestartTest;