import { useState, useRef, useEffect, useContext } from "react";
import dropdown from "../../assets/icons/icon-down-arrow.svg";
import { SettingsContext } from "../../contexts/SettingsProvider";

const levels = ["Timed (60s)", "Passage"];

const ModesDropdown = () => {
  const [open, setOpen] = useState(false);
  const [level, setLevel] = useState(null);
  const ref = useRef(null);

  const { mode, setMode } = useContext(SettingsContext);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if(level === null) setLevel(mode);
    else setMode(level);
  }, [level, mode]);

  return (
    <div ref={ref} className="flex justify-center items-center py-[6px] px-[10px] gap-[10px] w-[50%] rounded-lg border border-[#717178]">
      {/* Trigger */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex justify-center gap-[10px] items-center w-full text-[#FFF] text-[16px] leading-[19.2px] tracking-[-0.48px]
        "
      >
        {level}
        <img
          src={dropdown}
          alt=""
          className={`h-[6px] w-[11px] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown menu */}
      <div
        className={`flex flex-col w-[166.5px] pt-[10px] px-0 items-start justify-center gap-3 bg-[#262626] rounded-lg absolute top-[192px] z-20
          ${open ? " opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
        `}
      >
        {levels.map((item) => (
          <button
              key={item}
              onClick={() => {
                setLevel(item);
                setOpen(false);
              }}
              className={`flex items-center self-stretch px-[10px] gap-3 pt-0 pb-[10px] text-[16px] flex-grow leading-[19.2px] tracking-[-0.48px] text-[#FFF] ${item === 'Passage' ? "" : "border-b border-[#3A3A3A]"}`}
            >
              {level === item ? <div className="flex justify-center items-center w-4 h-4 rounded-full bg-[#4CA6FF]">
                <div className="bg-black rounded-full w-[6px] h-[6px]"></div>
              </div> : <div className="w-4 h-4 rounded-full border border-[#FFF] bg-[#262626]"></div>}
              {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModesDropdown;
