import Layout from '@/components/Layout';
import '@/styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { MantineProvider } from '@mantine/core';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    
  
  );
}
