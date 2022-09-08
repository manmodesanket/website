import React from "react";
import { Link, Layout } from "../Index";

const Intro: React.FC<{}> = () => {
  const socials: any = {
    twitter: "https://twitter.com/_manmodesanket",
    github: "https://github.com/manmodesanket",
    linkedin: "https://www.linkedin.com/in/manmodesanket/",
  };

  return (
    <Layout>
      <main className="flex flex-col justify-around md:px-0">
        <section className="md:mb-0 my-8">
          <h2 className="py-2">Hi there!👋</h2>
        </section>
        <section className="md:mb-0 my-8">
          <p className="py-2">
            I am <span className="font-bold">Sanket Manmode</span>, a software
            enginner. Welcome to my space on internet. I am focused on learning
            how to build websites with great user experience and performance. I
            love JavaScript and I strive to know it better.
          </p>
        </section>
        <section className="mb-8 md:mb-0 my-8">
          <h2 className="font-bold mb-4">Background</h2>
          <p className="mb-4">
            I am a Frontend Engineer at{" "}
            <Link link="https://ridecell.com/" text="Ridecell" /> building
            things for the web with some awesome people. I am also a graduate
            from <Link link="https://neog.camp/" text="neogcamp" /> where I
            learnt how to build full stack web apps.
          </p>
          <p className="mb-4">
            I like to write code which is easy to understand and easy to
            maintain. I also try to make it efficient.
          </p>
          <p className="mb-4">My mantra is make things easy for others.</p>
        </section>
        <section className="mb-8 md:mb-0 my-8">
          <p>You can find me at:</p>
          <ul className="flex space-x-2">
            {Object.keys(socials).map((item) => (
              <li key={`${item}_link`}>
                <Link link={socials[item]} text={item} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
};

export default Intro;
