const Metrics = () => {
  return (
    <div className="flex items-center gap-5 self-stretch md:gap-6">
      <div className="flex items-center gap-2 flex-col flex-grow md:flex-grow-0 md:flex-row md:gap-3">
        <p className="text-[#949497] text-center text-[16px] tracking-[-0.48px] leading-[19.2px] md:text-xl md:tracking-[-0.6px] md:leading-6">WPM: </p>
        <p className="text-[#FFF] text-center text-2xl leading-6 font-bold">40</p>
      </div>
      <div className="bg-[#3A3A3A] w-[1px] self-stretch">|</div>
      <div className="flex items-center gap-2 flex-col flex-grow md:flex-grow-0 md:flex-row md:gap-3">
        <p className="text-[#949497] text-center text-[16px] tracking-[-0.48px] leading-[19.2px] md:text-xl md:tracking-[-0.6px] md:leading-6">Accuracy: </p>
        <p className="text-[#D64D5B] text-center text-2xl leading-6 font-bold">94%</p>
      </div>
      <div className="bg-[#3A3A3A] w-[1px] self-stretch">|</div>
      <div className="flex items-center gap-2 flex-col flex-grow md:flex-grow-0 md:flex-row md:gap-3">
        <p className="text-[#949497] text-center text-[16px] tracking-[-0.48px] leading-[19.2px] md:text-xl md:tracking-[-0.6px] md:leading-6">Time: </p>
        <p className="text-[#F4DC73] text-center text-2xl leading-6 font-bold">0:46</p>
      </div>
    </div>
  )
}

export default Metrics