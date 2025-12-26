import data from '../data.json';

const TextContent = () => {
  return (
    <div className='flex justify-center items-center self-stretch md:rounded-2xl text-[#949497] md:text-[40px] md:tracking-[0.4px] md:leading-[1.36]'>
      <div className='flex justify-center items-center self-stretch flex-grow md:gap-[10px]'>
        {data.medium[3].text}
      </div>
    </div>
  )
}

export default TextContent