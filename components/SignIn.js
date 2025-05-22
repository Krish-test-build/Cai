import { GoogleLogin } from 'react-oauth/google';
import { useAuth } from '../context/AuthContext';

export default function SignIn() {
  const { login } = useAuth();

  const handleSuccess = async (credentialResponse) => {
    try {
      const response = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: credentialResponse.credential }),
      });
      
      const data = await response.json();
      if (data.user) {
        login(data.user);
      }
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  return (
    <div className="flex justify-center items-center p-4">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.log('Login Failed')}
      />
    </div>
  );
}
