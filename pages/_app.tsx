import { validateEnv } from '../utils/validateEnv';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

// Validate environment variables as early as possible
if (typeof window === 'undefined') {
  validateEnv();
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp