import type { NextPage } from "next";
import Head from "next/head";
import { Header, Intro } from "../components/Intro";
import { useData } from "../context/DataContext";

const Home: NextPage = () => {
  const {
    data: { mode },
  } = useData();
  return (
    <div className={mode === "moon" ? "dark" : ""}>
      <Head>
        <title>Sanket Manmode - manmodesanket</title>
        <meta
          name="description"
          content="I am Sanket Manmode a software
            enginner. Welcome to my space on internet."
        />
        <link rel="icon" href="/favicon-one.ico" />
      </Head>
      <div className="w-full min-h-screen bg-white dark:bg-slate-800 dark:text-slate-200">
        <Header />
        <Intro />
      </div>
    </div>
  );
};

export default Home;
