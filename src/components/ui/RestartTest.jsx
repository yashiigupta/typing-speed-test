import undo from '../../assets/icons/icon-restart.svg';

const RestartTest = () => {
  return (
    <div className="flex justify-center items-center rounded-xl bg-[#262626] gap-[10px] h-14 py-[10px] px-[16px]">
      <p className="text-[#FFF] text-center text-xl font-semibold tracking-[-0.3px] md:leading-[1.2]">Restart Test</p>
      <div className="flex w-5 h-5 flex-col justify-center items-center gap-[10px]">
        <img src={undo} alt="Undo" className='flex-shrink-0' />
      </div>
    </div>
  )
}

export default RestartTest;