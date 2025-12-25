const Difficulty = () => {
  return (
    <div className="flex items-center lg:gap-[6px]">
      <div className="flex justify-center items-center lg:gap-[10px] lg:pr-2">
        <p className='text-[#949497] lg:text-[16px] lg:tracking-[-0.48px] lg:leading-[19.2px]'>Difficulty:</p>
      </div>

      <div className="flex justify-center items-center lg:gap-[10px] lg:py-[6px] lg:px-[10px] lg:rounded-lg border lg:border-[#717178]">
        <p className="text-[#FFF] lg:text-[16px] lg:tracking-[-0.48px] lg:leading-[19.2px]">Easy</p>
      </div>

      <div className="flex justify-center items-center lg:gap-[10px] lg:py-[6px] lg:px-[10px] lg:rounded-lg border lg:border-[#717178]">
        <p className="text-[#FFF] lg:text-[16px] lg:tracking-[-0.48px] lg:leading-[19.2px]">Medium</p>
      </div>

      <div className="flex justify-center items-center lg:gap-[10px] lg:py-[6px] lg:px-[10px] lg:rounded-lg border lg:border-[#4CA6FF]">
        <p className="text-[#4CA6FF] lg:text-[16px] lg:tracking-[-0.48px] lg:leading-[19.2px]">Hard</p>
      </div>
      
    </div>
  )
}

export default Difficulty