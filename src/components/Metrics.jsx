const Metrics = () => {
  return (
    <div className="flex items-center lg:gap-6">
      <div className="flex items-center lg:gap-3">
        <p className="text-[#949497] text-center lg:text-xl lg:tracking-[-0.6px] lg:leading-6">WPM: </p>
        <p className="text-[#FFF] text-center lg:text-2xl lg:leading-6 font-bold">40</p>
      </div>

      <div className="bg-[#3A3A3A] w-[1px]">|</div>

      <div className="flex items-center lg:gap-3">
        <p className="text-[#949497] text-center lg:text-xl lg:tracking-[-0.6px] lg:leading-6">Accuracy:</p>
        <p className="text-[#FFF] text-center lg:text-2xl lg:leading-6 font-bold">94%</p>
      </div>

      <div className="bg-[#3A3A3A] w-[1px]">|</div>

      <div className="flex items-center lg:gap-3">
        <p className="text-[#949497] text-center lg:text-xl lg:tracking-[-0.6px] lg:leading-6">Time: </p>
        <p className="text-[#FFF] text-center lg:text-2xl lg:leading-6 font-bold">0:46</p>
      </div>
    </div>
  )
}

export default Metrics