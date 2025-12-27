import data from '../data.json';

const TextContent = () => {
  return (
    <div className='flex md:justify-center items-start md:items-center self-stretch flex-grow md:flex-grow-0 md:rounded-2xl text-[#949497] text-[32px] md:text-[40px] md:tracking-[0.4px] md:leading-[1.36]'>
      <div className='flex justify-center  items-start md:items-center self-stretch flex-grow md:gap-[10px]'>
        {data.easy[3].text}
      </div>
    </div>
  )
}

export default TextContent