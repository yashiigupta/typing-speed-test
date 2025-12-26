const Metrics = () => {
  return (
    <div className="flex items-center md:gap-6">
      <div className="flex items-center md:gap-3">
        <p className="text-[#949497] text-center md:text-xl md:tracking-[-0.6px] md:leading-6">WPM: </p>
        <p className="text-[#FFF] text-center md:text-2xl md:leading-6 font-bold">40</p>
      </div>
      <div className="bg-[#3A3A3A] w-[1px] md:self-stretch">|</div>
      <div className="flex items-center md:gap-3">
        <p className="text-[#949497] text-center md:text-xl md:tracking-[-0.6px] md:leading-6">Accuracy: </p>
        <p className="text-[#FFF] text-center md:text-2xl md:leading-6 font-bold md:text-[#D64D5B]">94%</p>
      </div>
      <div className="bg-[#3A3A3A] w-[1px] md:self-stretch">|</div>
      <div className="flex items-center md:gap-3">
        <p className="text-[#949497] text-center md:text-xl md:tracking-[-0.6px] md:leading-6">Time: </p>
        <p className="text-[#FFF] text-center md:text-2xl md:leading-6 font-bold md:text-[#F4DC73]">0:46</p>
      </div>
    </div>
  )
}

export default Metrics