import data from '../data.json';

const TextContent = () => {
  return (
    <div className='flex justify-center items-center self-stretch text-[#949497] lg:text-[40px] lg:tracking-[0.4px] lg:leading-[1.36]'>
      {data.hard[9].text}
      </div>
  )
}

export default TextContent