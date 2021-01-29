import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import 'semantic-ui-css/semantic.min.css';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Head>
        <title>Nicolas Bruère</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
