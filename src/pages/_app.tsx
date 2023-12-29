import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from '@/components/provider/theme-provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute='class' defaultTheme='dark'>
        <Component {...pageProps} />
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}
