import Head from "next/head";
import Footer from "../global/Footer";
import Navbar from "../global/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-slate-150">
      <Head>
        <title>Hands on Physiotherapy and Rehab Centre</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
