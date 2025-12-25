const Modes = () => {
  return (
    <div className="flex items-center lg:gap-[6px]">
      <div className="flex lg:pr-[6px] justify-center items-center lg:gap-[10px]">
        <p className='text-[#949497] lg:text-[16px] tracking-[-0.48px] leading-[19.2px]'>Mode:</p>
      </div>
      
      <div className="flex lg:py-[6px] lg:px-[10px] justify-center items-center lg:gap-[10px] lg:rounded-lg border lg:border-[#4CA6FF]">
        <p className="tracking-[-0.48px] leading-[19.2px] lg:text-[16px] text-[#4CA6FF]">
          Timed (60s)
        </p>
      </div>

      <div className="flex lg:py-[6px] lg:px-[10px] justify-center items-center lg:gap-[10px] lg:rounded-lg border lg:border-[#717178]">
        <p className="tracking-[-0.48px] leading-[19.2px] lg:text-[16px] text-[#FFF]">
          Passage
        </p>
      </div>

    </div>
  )
}

export default Modes