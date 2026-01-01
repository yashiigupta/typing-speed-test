import React, { useContext, useState, useEffect } from "react";
import { SettingsContext } from "../../contexts/SettingsProvider"

const levels = ['Easy', 'Medium', 'Hard'];

const Difficulty = () => {
  const [previousMode, setPreviousMode] = useState(null);
  const [mode, setMode] = useState(null); 
  const { difficulty, setDifficulty} = useContext(SettingsContext);

  useEffect(() => {
    if(mode === null) {
      setMode(difficulty);
    }
    else if(mode !== previousMode) setDifficulty(mode);
    else {
      setMode(difficulty);
      setPreviousMode(mode);
    }
    console.log(mode, difficulty, "h");
  }, [difficulty, mode]);

  return (
    <div className="flex items-center md:gap-[6px]">
      <div className="flex justify-center items-center md:gap-[10px] md:pr-2">
        <p className='text-[#949497] md:text-[16px] md:tracking-[-0.48px] md:leading-[19.2px]'>Difficulty:</p>
      </div>

      {levels.map((level) => (
        <button className={`flex justify-center items-center md:gap-[10px] md:py-[6px] md:px-[10px] md:rounded-lg border ${mode === level ? "text-[#4CA6FF] border-[#4CA6FF]" : "text-[#FFF] border-[#717178]"}`} key = {level} onClick={() => setMode(level)}>
          <p className="md:text-[16px] md:tracking-[-0.48px] md:leading-[19.2px]">{level}</p>
        </button>
      ))}

    </div>
  )
}

export default Difficulty