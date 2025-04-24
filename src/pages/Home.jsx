import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
      
      <div className="p-8">
        <h1 className="text-3xl font-bold">Welcome to Home Page</h1>
        <p className="mt-4">This is a protected page only accessible to logged-in users.</p>
      </div>
    </div>
  );
};

export default Home;
