import type { NextPage } from "next";
import Head from "next/head";
import { Header, Layout } from "../components/Index";
import { useData } from "../context/DataContext";

const Design: NextPage = () => {
  const {
    data: { mode },
  } = useData();
  return (
    <div className={mode === "moon" ? "dark" : ""}>
      <Head>
        <title>Design - manmodesanket</title>
        <meta
          name="description"
          content="Design of my portfolio site Sanket Manmode - manmodesanket"
        />
        <link rel="icon" href="/ms.svg" />
      </Head>
      <div className="w-full min-h-screen bg-white dark:bg-navy dark:text-slate-200">
        <Header />
        <Layout>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <h4>Lorem ipsum dolor sit amet.</h4>
          <h5>Lorem ipsum dolor sit amet.</h5>
          <h6>Lorem ipsum dolor sit amet.</h6>
        </Layout>
        <Layout>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud <b>exercitation</b> ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat{" "}
            <b>nulla culpa</b> pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in qui officia deserunt mollit anim id est laborum
          </p>
        </Layout>
        <Layout>
          <p>
            Hi I am a <code>React</code> Developer. I love{" "}
            <code>JavaScript</code>.
          </p>
        </Layout>
        <Layout>
          <p>
            Here is my{" "}
            <a href="https://github.com/manmodesanket" target="_blank">
              Github
            </a>
          </p>
        </Layout>
      </div>
    </div>
  );
};

export default Design;