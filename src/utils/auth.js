export const signIn = async (formData) => {
  const response = await fetch('/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    credentials: 'include', // Important for session handling
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Sign in failed');
  }
  
  const data = await response.json();
  localStorage.setItem('token', data.token); // Store auth token
  return data;
};

export const signUp = async (formData) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    credentials: 'include',
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Sign up failed');
  }
  
  const data = await response.json();
  localStorage.setItem('token', data.token);
  return data;
};

export const signInWithGoogle = async () => {
  window.location.href = '/api/auth/google';
};
