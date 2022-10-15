import './App.scss';
import Hero from "../src/components/Hero";
import OverOns from "../src/components/OverOns";
import Bieren from './components/Bieren';
import Terras from './components/Terras';
import Contact from "../src/components/Contact"
import Map from "../src/components/Map";
import Reserveren from './components/Reserveren';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <Hero/>
    <OverOns/>
    <Bieren/>
    <Terras/>
    <Contact/>
    <Map/>
    <Reserveren/>
    <Footer/>
    
    </div>

    
  );
  
}

export default App;
 