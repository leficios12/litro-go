import Navbar from './components/Navbar'
import './App.css'
import HeroSection from './sections/HeroSection';
import InfoSection from './sections/InfoSection';
import Steps from './sections/Steps';
import GasWeekSection from './sections/GasWeekSection';

function App() {
  return (
    <>
      <div className="pt-40">
        <Navbar />
        <HeroSection />
        <InfoSection />
        <Steps />
        <GasWeekSection />
      </div>
    </>
  )
}

export default App;
