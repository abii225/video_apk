import "./App.css";
import Footer from "./Components/Footer";

import Navbar from "./Components/Navbar";
import AllRoutes from "./Pages/AllRoutes";

function App() {
  return (
    <>
      <div className="bg-black ">
        <Navbar />
        <hr />
        <AllRoutes />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default App;
