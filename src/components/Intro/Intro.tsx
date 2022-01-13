import React from "react";
import Layout from "../../Layout/Layout";

const Intro: React.FC<{}> = () => {
  const socials: any = {
    twitter: "https://twitter.com/_manmodesanket",
    github: "https://github.com/manmodesanket",
    linkedin: "https://www.linkedin.com/in/manmodesanket/",
  };

  return (
    <Layout>
      <main className="min-h-screen flex flex-col justify-and py-16 md:py-32">
        <h1 className="text-3xl py-2">Hi there!👋</h1>
        <h2 className="text-3xl py-2">
          I am <span className="font-bold">Sanket Manmode</span>, a software
          enginner. Welcome to my space on internet. Currently I am focused on
          learning how to build websites with great user experience and
          performance. I work as a frontend engineer at Ridecell.
        </h2>
        <section className="text-2xl">
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
      </main>
    </Layout>
  );
};

export default Intro;
