import type { NextPage } from "next";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sanket Manmode - manmodesanket</title>
        <meta
          name="description"
          content="I am Sanket Manmode a software
            engineer. Welcome to my space on internet."
        />
        <link rel="icon" href="/ms.svg" />
      </Head>
      <div className="w-full min-h-screen bg-white dark:bg-navy dark:text-slate-200">
        <Header />
        <Intro />
      </div>
      <Analytics />
    </div>
  );
};

export default Home;
