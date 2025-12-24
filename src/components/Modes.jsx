const Modes = () => {
  return (
    <div className="flex justify-center items-center">
      <p className='text-[#949497] lg:text-[16px] lg:pr-[10px]'>Modes:</p>
      <div className="flex justify-between items-center gap-[6px]">
        <button className="flex justify-center items-centerlg:ml-1 lg:py-[6px] lg:px-[10px] lg:rounded-lg lg:border lg:border-[#717178] text-[#FFF]">
          Timed (60s)
        </button>
        <button className="flex justify-center items-center lg:ml-1 lg:py-[6px] lg:px-[10px] lg:rounded-lg lg:border lg:border-[#717178] text-[#FFF]">
          Passage
        </button>
      </div>
      
    </div>
  )
}

export default Modes