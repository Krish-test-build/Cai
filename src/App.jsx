import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthPage from './components/Auth/AuthPage'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'
import FeaturesSection from './components/FeaturesSection'
import ScheduleSection from './components/ScheduleSection'
import MonitorSection from './components/MonitorSection'
import ServicesSection from './components/ServicesSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<AuthPage />} />
        <Route path="/" element={
          <main className="relative overflow-x-hidden">
            <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
            <Navbar />
            <Hero />
            <CompanyLogo />
            <PurposeSection />
            <FeaturesSection />
            <ScheduleSection />
            <MonitorSection />
            <ServicesSection />
            <TestimonialsSection />
            <Footer />
          </main>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
