import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline>
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </CssBaseline>
    </StyledEngineProvider>
  );
}

export default MyApp;
