import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import designImage from './design.jpg';
import codeImage from './code.jpg';
import circuitImage from './circuit.jpg';
import simulationImage from './simulation.jpg';


const Home = () => {
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-black relative overflow-auto">
      {/* Logout Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-black rounded-lg hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="space-y-16">
          <div className="p-4 rounded-lg hover:bg-gray-500 transition-colors cursor-pointer">
            <h2 className="text-xl font-bold text-white mb-4">Design Your Machine</h2>
            <div className="w-full">
              <img src={designImage} alt="Design Machine" className="w-full object-contain rounded-lg" />
            </div>
          </div>
          
          <div className="p-4 rounded-lg hover:bg-gray-500 transition-colors cursor-pointer">
            <h2 className="text-xl font-bold text-white mb-4">Program Your Machine</h2>
            <div className="w-full">
              <img src={codeImage} alt="Program Machine" className="w-full object-contain rounded-lg" />
            </div>
          </div>
          
          <div className="p-4 rounded-lg hover:bg-gray-500 transition-colors cursor-pointer">
            <h2 className="text-xl font-bold text-white mb-4">Design Your Circuit</h2>
            <div className="w-full">
              <img src={circuitImage} alt="Design Circuit" className="w-full object-contain rounded-lg" />
            </div>
          </div>
          
          
          <div className="space-y-0">
            <div className="p-8 rounded-lg hover:bg-gray-500 transition-colors cursor-pointer">
              <h2 className="text-xl font-bold text-white">Premium Features</h2>
            
              <div className="p-4 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <h2 className="text-l text-white">Assemble your Machine </h2>
              </div>
              <div className="p-4 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                <h2 className="text-l text-white mb-4">Simulation</h2>
                <div className="w-full">
                  <img src={simulationImage} alt="Simulation" className="w-full object-contain rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
