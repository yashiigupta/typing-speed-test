import React, { useState, useEffect } from 'react';
import completed from '../../assets/icons/icon-completed.svg';
import goldenStar from '../../assets/icons/icon-star-1.svg';
import redStar from '../../assets/icons/icon-star-2.svg';

// For achievementStatus variable
// 1 -> Baseline
// 2 -> Normal
// 3 -> High score

const TestComplete = ({ props }) => {
  props = {...props, wpm: "50", accuracy: "94%", characters: "120/5"};
  const [pastWPM, setPastWPM] = useState(null);
  const [achievementStatus, setAchievementStatus] = useState(null);

  useEffect(() => {
    const storedWPM = localStorage.getItem("bestWPM");

    if (storedWPM !== null) {
      const bestWPM = parseInt(storedWPM, 10);
      setPastWPM(bestWPM);

      if (props.wpm > bestWPM) {
        localStorage.setItem("bestWPM", props.wpm);
        setAchievementStatus(3);
        console.log("New High Score!", props.wpm);
      } else {
        setAchievementStatus(2);
      }
    } else {
      localStorage.setItem("bestWPM", props.wpm);
      setPastWPM(props.wpm);
      setAchievementStatus(1);
    }
  }, [props.wpm]);

  console.log(props, achievementStatus, pastWPM);

  if(achievementStatus == null) return <div>Loading...</div>

  return (
    <div className='flex md:pt-6 pt-4 flex-col justify-center items-center gap-6 md:gap-8 self-stretch md:pb-16'>
      {/* Green Check Circle */}
      <div className='flex items-center gap-[7.5px] rounded-[749.25px] md:gap-[10px] md:rounded-full bg-[#121212] shadow-[0_0_0_7.5px_rgba(77,214,123,0.20),0_0_0_15px_rgba(77,214,123,0.10)] md:shadow-[0_0_0_16px_rgba(77,214,123,0.20),0_0_0_32px_rgba(77,214,123,0.10)] w-12 h-12 md:w-16 md:h-16'>
        <img src={completed} alt="Test Completed Icon" className='w-full h-full'/>
      </div>

      {/* Message Container */}
      <div className='flex pt-4 md:pt-6 flex-col items-start gap-[10px] self-stretch'>
        <p className='text-[#FFF] text-center text-2xl md:text-[40px] self-stretch font-bold leading-[28.8px] tracking-[0.32px] md:leading-[54.4px] md:tracking-[0.4px]'>
          Test Complete!
        </p>
        <p className='text-[#949497] text-center self-stretch text-[16px] md:text-xl leading-[19.2px] tracking-[-0.48px] md:leading-[24px] md:tracking-[-0.6px]'>Solid run. Keep pushing to beat your high score.</p>
      </div>

      {/* Stats Row */}
      <div className='flex flex-col md:flex-row pb-4 md:px-0 md:pt-5 md:pb-8 items-center justify-center gap-4 md:gap-5 self-stretch'>
        {/* WPM container */}
        <div className='flex lg:w-[160px] px-6 py-4 items-start justify-center self-stretch md:self-auto flex-col gap-3 sm:flex-grow-0 md:flex-grow lg:flex-grow-0 rounded-lg border border-[#3A3A3A]'>
          <p className='text-[#949497] text-center text-xl leading-[24px] tracking-[-0.6px]'>WPM:</p> 
          <p className='text-[#FFF] text-center text-2xl font-bold leading-[24px]'>{props.wpm}</p>
        </div>

        {/* Accuracy container */}
        <div className='flex lg:w-[160px] px-6 py-4 items-start justify-center self-stretch md:self-auto flex-col gap-3 sm:flex-grow-0 md:flex-grow lg:flex-grow-0 rounded-lg border border-[#3A3A3A]'>
          <p className='text-[#949497] text-center text-xl leading-[24px] tracking-[-0.6px]'>Accuracy:</p> 
          <p className='text-[#D64D5B] text-center text-2xl font-bold leading-[24px]'>{props.accuracy}</p>
        </div>

        {/* Characters container */}
        <div className='flex lg:w-[160px] px-6 py-4 items-start justify-center self-stretch md:self-auto flex-col gap-3 sm:flex-grow-0 md:flex-grow lg:flex-grow-0 rounded-lg border border-[#3A3A3A]'>
          <p className='text-[#949497] text-center text-xl leading-[24px] tracking-[-0.6px]'>Characters</p> 
          <p className='text-[#4DD67B] text-center text-2xl font-bold leading-[24px]'>{props.characters}</p>
        </div>
      </div>

      <button className='flex h-14 py-[10px] px-4 items-center justify-center gap-[10px] rounded-xl bg-[#FFF] cursor-pointer focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_var(--colors-neutral-900,#121212),0_0_0_5px_var(--colors-blue-400,#4CA6FF)]'>
        <p className='text-[#121212] text-center text-xl font-semibold leading-[24px] tracking-[-0.3px]'>Go Again</p>
        <div className='flex w-5 h-5 flex-col justify-center items-center gap-[10px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M0.421875 0H1.37109C1.61719 0 1.79297 0.210938 1.79297 0.457031L1.72266 3.90234C3.26953 1.54688 5.97656 0 9 0.0351562C13.8164 0.0351562 17.7188 3.97266 17.7188 8.75391C17.6836 13.5703 13.7812 17.4375 9 17.4375C6.75 17.4375 4.67578 16.5938 3.12891 15.2227C2.95312 15.0469 2.95312 14.7656 3.12891 14.5898L3.83203 13.8867C3.97266 13.7461 4.21875 13.7461 4.39453 13.8867C5.625 14.9766 7.20703 15.6094 9 15.6094C12.7969 15.6094 15.8906 12.5508 15.8906 8.71875C15.8906 4.92188 12.7969 1.82812 9 1.82812C6.1875 1.82812 3.79688 3.51562 2.70703 5.90625L7.13672 5.80078C7.38281 5.80078 7.59375 5.97656 7.59375 6.22266V7.17188C7.59375 7.41797 7.38281 7.59375 7.17188 7.59375H0.421875C0.175781 7.59375 0 7.41797 0 7.17188V0.421875C0 0.210938 0.175781 0 0.421875 0Z" fill="#121212"/>
          </svg>
        </div>
      </button>

      <div className='w-10 h-10 md:w-[74px] md:h-[74px] absolute right-[29px] bottom-10 lg:right-[110px] lg:bottom-[429px] md:right-[32px] md:bottom-[327px] animate-star-blink'>
        <img src={goldenStar} alt="Golden Star" className='w-full h-full'/>
      </div>

      <div className='w-5 h-5 left-[18px] top-[124.5px] md:w-8 md:h-8 absolute lg:left-[109px] lg:top-[251px] md:left-[48px] md:top-[195px] animate-star-blink-slow'>
        <img src={redStar} alt="Red Star" className='w-full h-full'/>
      </div>
    </div>
  )
}

export default TestComplete