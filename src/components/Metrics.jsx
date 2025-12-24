const Metrics = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3">
        <p className="text-[#949497]">WPM: </p>
        <p className="text-[#FFF] lg:font-[24px] font-bold ml-3">0</p>
      </div>
      <div className="text-[#3A3A3A] w-[1px] mx-6">|</div>
       <div className="flex gap-3">
        <p className="text-[#949497]">Accuracy: </p>
        <p className="text-[#FFF] lg:font-[24px] font-bold ml-3">100%</p>
      </div>
      <div className="text-[#3A3A3A] w-[1px] mx-6">|</div>
       <div className="flex gap-3">
        <p className="text-[#949497]">Time: </p>
        <p className="text-[#FFF] lg:font-[24px] font-bold ml-3">0:60</p>
      </div>
    </div>
  )
}

export default Metrics