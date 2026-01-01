const Modes = () => {
  return (
    <div className="flex items-center md:gap-[6px]">
      <div className="flex md:pr-[6px] justify-center items-center md:gap-[10px]">
        <p className='text-[#949497] md:text-[16px] md:tracking-[-0.48px] md:leading-[19.2px]'>Mode:</p>
      </div>
      
      <div className="flex md:py-[6px] md:px-[10px] justify-center items-center md:gap-[10px] md:rounded-lg border md:border-[#4CA6FF]">
        <p className="md:tracking-[-0.48px] md:leading-[19.2px] md:text-[16px] text-[#4CA6FF]">
          Timed (60s)
        </p>
      </div>

      <div className="flex md:py-[6px] md:px-[10px] justify-center items-center md:gap-[10px] md:rounded-lg border md:border-[#717178]">
        <p className="md:tracking-[-0.48px] md:leading-[19.2px] md:text-[16px] text-[#FFF]">
          Passage
        </p>
      </div>

    </div>
  )
}

export default Modes