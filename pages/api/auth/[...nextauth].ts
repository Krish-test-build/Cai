import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { validateEnv } from '../../../utils/validateEnv';

// Validate environment variables before using them
validateEnv();

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // ...other configurations
});