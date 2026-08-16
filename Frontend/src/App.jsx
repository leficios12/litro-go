import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import InfoSection from './sections/InfoSection'
import Steps from './sections/Steps'
import GasWeekSection from './sections/GasWeekSection'
import AdminSection from './sections/AdminSection'

const MainPage = () => (
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

const FuelDataPage = () => (
  <>
    <div className="pt-40">
      <Navbar />
      <AdminSection />
    </div>
  </>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/fueldata" element={<FuelDataPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App