import Header from "./components/Header";
import Metrics from "./components/Metrics";
import Difficulty from "./components/Difficulty";
import DifficultyDropdown from "./components/DifficultyDropdown";
import Modes from "./components/Modes";
import ModesDropdown from "./components/ModesDropdown";
import TextContent from "./components/TextContent";
import RestartTest from "./components/RestartTest";

function App() {
  return (
    <div className="flex flex-col items-start lg:w-[1440px] lg:h-[1024px] lg:gap-16 lg:py-8 lg:px-28 md:w-[768px] md:h-[1024px] md:gap-10 md:px-8 md:pt-8 md:pb-10 w-[375px] h-[812px] px-4 pt-4 pb-8 gap-8">
      {/* Header content */}
      <Header />

      {/* Main content */}
      <div className="flex w-full flex-col items-start gap-8 flex-grow self-stretch">
        {/* Stats Container */}
        <div className="flex flex-col md:flex-row pb-4 gap-5 justify-between items-start md:items-center content-center md:gap-y-4 self-stretch md:flex-wrap border-b border-[#3A3A3A]">
          <Metrics />

          {/* Settings Container for tablet and laptop */}
          <div className="hidden md:flex items-center gap-[10px] sm:self-stretch md:gap-4">
            <Difficulty />
            <div className="w-[1px] self-stretch md:rounded-sm bg-[#3A3A3A]"></div>
            <Modes />
          </div>

          {/* Settings Container for Mobile */}
          <div className="md:hidden flex items-center gap-[10px] self-stretch">
            <DifficultyDropdown />
            <ModesDropdown />
          </div>
        </div>
        {/* Text Container */}
        <div className="flex flex-col items-start self-stretch gap-8 lg:gap-0">
          <TextContent />
        </div>
      </div>

      {/* Footer content */}
      <div className="flex flex-col pt-6 lg:pt-8 justify-end items-center gap-[10px] self-stretch border-t border-[#3A3A3A]">
        <RestartTest />
      </div>
    </div>
  );
}

export default App;
