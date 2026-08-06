import Navbar from './components/Navbar'
import './App.css'
import HeroSection from './sections/HeroSection';
import InfoSection from './sections/InfoSection';

function App() {
  return (
    <>
      <div className="pt-40">
        <Navbar />
        <HeroSection />
        <InfoSection />
      </div>
    </>
  )
}

export default App;
