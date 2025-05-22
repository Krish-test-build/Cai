import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  const navigate = useNavigate();
  const [sections, setSections] = useState([
    { title: 'Design Your Machine', subtitle: 'AutoCAD' },
    { title: 'Program Your Machine', subtitle: '' },
    { title: 'Design your Circuit', subtitle: '' },
    { title: 'Premium Features', subtitle: '' },
    { title: 'Assemble ur Machine Simulation', subtitle: '' },
  ]);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      navigate('/signin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-auto">
      {/* Logout Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>
      
      <Hero />
      <Features />
      <Testimonials />
      <Contact />
      <div className="container mx-auto px-4 py-16 mt-8">
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index} className="space-y-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-3xl font-bold text-gray-800">{section.title}</h2>
              {section.subtitle && <p className="text-xl text-gray-600">{section.subtitle}</p>}
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Home;