import React from "react";
import Layout from "../Layout/Layout";

const Intro: React.FC<{}> = () => {
  const socials: any = {
    twitter: "https://twitter.com/_manmodesanket",
    github: "https://github.com/manmodesanket",
    linkedin: "https://www.linkedin.com/in/manmodesanket/",
  };

  return (
    <Layout>
      <main className="min-h-screen flex flex-col justify-around">
        <section className="mb-4 md:mb-0">
          <h2 className="text-3xl py-2">Hi there!👋</h2>
        </section>
        <section className="mb-8 md:mb-0">
          <h2 className="text-3xl py-2">
            I am <span className="font-bold">Sanket Manmode</span>, a software
            enginner. Welcome to my space on internet. I am focused on learning
            how to build websites with great user experience and performance. I
            love JavaScript and I strive to know it better.
          </h2>
        </section>
        <section className="text-2xl mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Background</h2>
          <p className="mb-4">
            I am a Frontend Engineer at{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://ridecell.com/"
              className="underline"
            >
              Ridecell
            </a>{" "}
            building things for the web with some awesome people. I am also a
            graduate from{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://neog.camp/"
              className="underline"
            >
              neogcamp
            </a>{" "}
            where I learnt how to build full stack web apps.
          </p>
          <p className="mb-4">
            I like to write code which is easy to understand and easy to
            maintain. I also try to make it efficient.
          </p>
          <p className="mb-4">My mantra is make things easy for others.</p>
        </section>
        <section className="text-2xl mb-8 md:mb-0">
          <p>You can find me at:</p>
          <ul className="flex space-x-2">
            {Object.keys(socials).map((item) => (
              <li key={`${item}_link`} className="underline">
                <a target="_blank" rel="noreferrer" href={socials[item]}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className="text-2xl mb-8 md:mb-0">
          <p>Work in progress 🚧</p>
        </section>
      </main>
    </Layout>
  );
};

export default Intro;
