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
    <div className="bg-slate-150">
      <Head>
        <title>Hands on Physiotherapy and Rehab Centre</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer footer={locations} />
    </div>
  );
}
