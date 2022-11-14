import Head from "next/head";
import { LocationFragment } from "../../graphql-operations";
import Footer from "../global/Footer";
import Navbar from "../global/Navbar";

type LayoutProps = {
  children: React.ReactNode;
  locations: LocationFragment[];
};

export default function Layout({ children, locations }: LayoutProps) {
  return (
    <div className="bg-blue-150 dark:bg-gray-900">
      <Head>
        <title>Hands on Physiotherapy and Rehab Centre</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer locations={locations} />
    </div>
  );
}
