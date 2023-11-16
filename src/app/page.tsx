import type { Metadata, NextPage } from "next";
import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";

export const metadata: Metadata = {
  title: "Sanket Manmode - manmodesanket",
  description:
    "I am Sanket Manmode a software engineer. Welcome to my space on internet.",
};

const Home: NextPage = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-white dark:bg-navy dark:text-slate-200">
        <Header />
        <Intro />
      </div>
    </>
  );
};

export default Home;
