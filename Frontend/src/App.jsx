import Navbar from './components/Navbar'
import './App.css'
import Info from './components/Info';
import HeroSection from './sections/HeroSection';

function App() {
  return (
    <>
      <div className="pt-40">
        <Navbar />
        <HeroSection />
        <Info />
      </div>
    </>
  )
}

export default App;
