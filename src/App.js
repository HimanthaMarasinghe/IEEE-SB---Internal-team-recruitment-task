import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ParticleBg from "./components/ParticleBg";
import TimeLine from "./components/TimeLine";

function App() {
  return (
    <div className="App">
      <ParticleBg />
      <Navbar />
      <HeroSection />
      <TimeLine />
    </div>
  );
}

export default App;
