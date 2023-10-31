import React from "react";
import Layout from "../Layout/Layout";
import Link from "../Link/Link";

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
        <section className="md:mb-0 my-4">
          <p className="py-2">
            I am <span className="font-bold">Sanket Manmode</span>, a software
            engineer. Welcome to my space on internet. I am focused on learning
            how to build websites with great user experience and performance. I
            like to write code which is easy to understand and easy to maintain.
          </p>
        </section>
        <section className="mb-8 md:mb-0 my-4">
          <p className="mb-4">
            I am a Frontend Engineer at{" "}
            <Link link="https://ridecell.com/" text="Ridecell" /> building
            things for the web with some awesome people. I am also a graduate
            from <Link link="https://neog.camp/" text="neogcamp" /> where I
            learnt how to build full stack web apps.
          </p>

          <p className="mb-4">My mantra is make things easy for others.</p>
        </section>
        <section className="mb-8 md:mb-0 my-8">
          <p>You can find me at:</p>
          <div className="flex space-x-2">
            {Object.keys(socials).map((item) => (
              <span key={`${item}_link`}>
                <a href={socials[item]}>{item}</a>
              </span>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Intro;
