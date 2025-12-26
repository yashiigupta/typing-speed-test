const Difficulty = () => {
  return (
    <div className="flex items-center md:gap-[6px]">
      <div className="flex justify-center items-center md:gap-[10px] md:pr-2">
        <p className='text-[#949497] md:text-[16px] md:tracking-[-0.48px] md:leading-[19.2px]'>Difficulty:</p>
      </div>
      <div className="flex justify-center items-center md:gap-[10px] md:py-[6px] md:px-[10px] md:rounded-lg border md:border-[#717178]">
        <p className="text-[#FFF] md:text-[16px] md:tracking-[-0.48px] md:leading-[19.2px]">Easy</p>
      </div>

      <div className="flex justify-center items-center md:gap-[10px] md:py-[6px] md:px-[10px] md:rounded-lg border md:border-[#717178]">
        <p className="text-[#FFF] md:text-[16px] md:tracking-[-0.48px] md:leading-[19.2px]">Medium</p>
      </div>

      <div className="flex justify-center items-center md:gap-[10px] md:py-[6px] md:px-[10px] md:rounded-lg border md:border-[#717178]">
        <p className="text-[#FFF] md:text-[16px] md:tracking-[-0.48px] md:leading-[19.2px]">Hard</p>
      </div>

    </div>
  )
}

export default Difficulty