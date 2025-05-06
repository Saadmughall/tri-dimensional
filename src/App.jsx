import "./App.css";
import BIO from "./Components/BIO/BIO";
import Capabilities from "./Components/Capabilities/Capabilities";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import useLenisScroll from "./hooks/useLenisScroll";
function App() {
  useLenisScroll();
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Navbar />
        <HeroSection />
        <Projects />
        <BIO />
        <Capabilities />
        <Footer/> 
      </div>
    </div>
  );
}

export default App;
