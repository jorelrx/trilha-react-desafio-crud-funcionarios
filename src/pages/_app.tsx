import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@/styles/globalStyles';
import theme from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
