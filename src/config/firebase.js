import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cai-project-31f19.firebaseapp.com",
  projectId: "cai-project-31f19",
  storageBucket: "cai-project-31f19.firebasestorage.app",
  messagingSenderId: "451807555734",
  appId: "1:451807555734:web:0a434001036c32fc1e52b7",
  measurementId: "G-2ZV77RY0DR"
};

// Check if all required config values are present
const requiredFields = ['apiKey', 'authDomain', 'projectId'];
requiredFields.forEach(field => {
  if (!firebaseConfig[field]) {
    throw new Error(`Missing required Firebase config field: ${field}`);
  }
});

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
