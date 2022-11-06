import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layouts/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const sanityFooter = pageProps.footer;
  return (
    <Layout footer={sanityFooter}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
