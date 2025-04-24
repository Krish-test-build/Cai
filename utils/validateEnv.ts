import { loadEnvConfig } from '@next/env'
import dotenv from 'dotenv'

export function validateEnv() {
  // Load environment variables first
  if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
    loadEnvConfig(process.cwd())
  }

  // Validate environment variables
  const requiredEnvVars = [
    'GOOGLE_CLIENT_ID', 
    'GOOGLE_CLIENT_SECRET',
    'MONGO_URI',
    'SESSION_SECRET',
    'JWT_SECRET'
  ];

  const missingVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }

  // Log successful validation
  console.log('Environment variables validated successfully');
}
