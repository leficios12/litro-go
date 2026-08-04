import Navbar from './components/Navbar'
import './App.css'
import HeroSection from './components/HeroSection';
import Info from './components/Info';

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
