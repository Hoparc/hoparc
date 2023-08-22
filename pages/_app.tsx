import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layouts/Layout";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  const sanityLocations = pageProps.locations;
  return (
    <Layout locations={sanityLocations}>
      <DefaultSeo
        title="Hands on Physiotherapy and Rehab Centre - Markham, ON"
        description="We are a physiotherapy and rehab centre located in Markham, Ontario."
        canonical="https://hoparc.com/"
        openGraph={{
          url: "https://hoparc.com/",
          title: "Hands on Physiotherapy and Rehab Centre - Markham, ON",
          description:
            "We are a physiotherapy and rehab centre located in Markham, Ontario.",
          site_name: "Hands on Physiotherapy and Rehab Centre",
          type: "website",
          locale: "en_CA",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content: "physiotherapy, rehab centre, rehab",
          },
          {
            name: "author",
            content: "Hands on Physiotherapy and Rehab Centre",
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            property: "og:locale",
            content: "en_CA",
          },
          {
            property: "og:site_name",
            content: "Hands on Physiotherapy and Rehab Centre",
          },
        ]}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
