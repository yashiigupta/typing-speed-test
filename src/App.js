import Header from "./components/Header";
import Metrics from "./components/Metrics";
import Difficulty from "./components/Difficulty";
import Modes from "./components/Modes";

function App() {
  return (
    <div className="flex flex-col my-4 mx-8 md:my-8 md:mx-28 lg:my-8 lg:mx-28">
      <Header />
      <div className="flex justify-between">
        <Metrics />
        <Difficulty />
        <div>|</div>
        <Modes />
      </div>
      
    </div>
  );
}

export default App;
