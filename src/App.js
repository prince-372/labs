import "./App.css";
import Domain from "./components/Domain";
import First from "./components/First";
import Footer from "./components/Footer";
import Gaming from "./components/Gaming";
import Header from "./components/Header";
import Inhabited from "./components/Inhabited";
import Mynav from "./components/Mynav";
import Next from "./components/Next";
import Picture from "./components/Picture";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Updated from "./components/Updated";

function App() {
  return (
    <div>
      <div className="header-img">
        {/* <Mynav /> */}
        <Header />
      </div>
      <Picture />
      <First />
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
    </div>
  );
}

export default App;
