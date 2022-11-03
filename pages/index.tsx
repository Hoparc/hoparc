import type { NextPage } from 'next'
import Head from "next/head";

import Hero from "../components/landing/Hero";
import LetUsHelp from "../components/landing/LetUsHelp";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-150">
      <Head>
        <title>Hands on Physiotherapy and Rehab Centre</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#0072C6" key="theme" />
        <meta
          name="description"
          content="physiotherapy and rehab centre located in Markham, Ontario"
        />
        <meta name="keywords" content="physiotherapy" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Hero />
      <LetUsHelp />
    </div>
  );
};

export default Home
