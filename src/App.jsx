import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { auth } from './config/firebase';
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
import Home from './pages/Home'

import './App.css'

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
        navigate('/signin');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return authenticated ? children : null;
};

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-hidden">
        <Routes>
          <Route path="/signin" element={<AuthPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={
            <div className="relative">
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
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
