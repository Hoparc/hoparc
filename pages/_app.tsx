import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layouts/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const sanityLocations = pageProps.locations;
  return (
    <Layout locations={sanityLocations}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
