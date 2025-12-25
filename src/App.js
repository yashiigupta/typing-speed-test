import Header from "./components/Header";
import Metrics from "./components/Metrics";
import Difficulty from "./components/Difficulty";
import Modes from "./components/Modes";
import TextContent from "./components/TextContent";
import RestartTest from "./components/RestartTest";

function App() {
  return (
    <div className="flex flex-col items-start lg:w-[1440px] lg:h-[1024px] lg:gap-16 lg:py-8 lg:px-28 md:w-[768px] md:h-[1024px] md:gap-10 md:px-8 md:pt-8 md:pb-10 py-4 px-8  ">
      {/* Header content */}
      <div className="flex justify-between items-center lg:w-[1216px] md:self-stretch">
        <Header />
      </div>

      {/* Main content */}
      <div className="flex w-full flex-col items-start gap-8">
        {/* Stats Container */}
        <div className="flex lg:pb-4 justify-between items-center content-center lg:space-y-4 self-stretch flex-wrap border-b border-[#3A3A3A]">
          <Metrics />
          {/* Settings Container */}
          <div className="flex items-center lg:gap-4">
            <Difficulty />
            <div className="w-[1px] self-stretch lg:rounded-sm bg-[#3A3A3A]">|</div>
            <Modes />
          </div>
        </div>
        {/* Text Container */}
        <div className="flex flex-col items-start self-stretch">
          <TextContent />
        </div>
      </div>
      
      {/* Footer content */}
      <div className="flex flex-col lg:pt-8 justify-end items-center lg:gap-[10px] self-stretch border-t lg:border-[#3A3A3A]">
        <RestartTest />
      </div>
    </div>
  );
}

export default App;
