import "./App.css";
import AllVideos from "./Components/AllVideos";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="bg-black h-[1000px]">
        <Navbar />
        <hr />
        <AllVideos />
      </div>
    </>
  );
}

export default App;
