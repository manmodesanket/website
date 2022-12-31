import type { NextPage } from "next";
import Head from "next/head";
import { Header, Intro } from "../components/Index";
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
            engineer. Welcome to my space on internet."
        />
        <link rel="icon" href="/ms.svg" />
      </Head>
      <div className="w-full min-h-screen bg-white dark:bg-navy dark:text-slate-200">
        <Header />
        <Intro />
      </div>
    </div>
  );
};

export default Home;
