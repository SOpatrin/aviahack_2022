import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        <CssBaseline>
          <Head>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </CssBaseline>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
}

export default App;
