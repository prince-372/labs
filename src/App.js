import { useEffect, useState } from "react";
import "./App.css";
import Backtotop from "./components/Backtotop";
import Domain from "./components/Domain";
import Footer from "./components/Footer";
import Gaming from "./components/Gaming";
import Header from "./components/Header";
import Inhabited from "./components/Inhabited";
import Mynav from "./components/Mynav";
import Next from "./components/Nexsect";
import Picture from "./components/Picture";
import Priloder from "./components/Priloder";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Updated from "./components/Updated";
import Firstgame from "./components/Firstgame";

function App() {
  const [data, setdata] = useState(true);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 4000);
  }, []);
  return (
    <>
      {data ? (
        <>
          <Priloder />
        </>
      ) : (
        <>
          <div className="bg-header-sec">
            <Mynav />
            <Header />
          </div>
          <Picture />
          <Firstgame />
          <div className="bg-sec-img">
            <Gaming />
          </div>
          <Domain />
          <Inhabited />
          <Team />
          <Next />
          <Roadmap />
          <Updated />
          <Footer />
          <Backtotop />
        </>
      )}
    </>
  );
}

export default App;
