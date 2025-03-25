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
      <main className="flex flex-col justify-around">
        <section>
          <h2>Hi there!👋</h2>
        </section>
        <section className="md:mb-0 my-4">
          <p className="py-2">
            I am{" "}
            <b className="underline decoration-sky-400 decoration-2 hover:bg-sky-200">
              Sanket Manmode
            </b>
            , a software engineer. Welcome to my space on internet. I am focused
            on learning how to build websites with <b>great user experience</b>{" "}
            and <b>performance</b>. I like to write code which is{" "}
            <b>easy to understand</b> and <b>easy to maintain</b>.
          </p>
        </section>
        <section className="mb-8 md:mb-0 my-4">
          <p className="mb-4">
            I am a <b>Frontend Engineer at</b>{" "}
            <Link
              className="text-sky-700 underline decoration-sky-400 decoration-2 hover:bg-sky-200"
              link="https://appzen.com/"
              text="Appzen"
            />{" "}
            building things for the web with some awesome people. I am also a
            graduate from{" "}
            <Link
              className="text-sky-700 underline decoration-sky-400 decoration-2 hover:bg-sky-200"
              link="https://neog.camp/"
              text="neogcamp"
            />{" "}
            where I learnt how to build full stack web apps.
          </p>

          <p className="mb-4">My mantra is make things easy for others.</p>
        </section>
        <section className="mb-8 md:mb-0 my-8">
          <p>You can find me at:</p>
          <div className="flex space-x-2">
            {Object.keys(socials).map((item) => (
              <span key={`${item}_link`}>
                <Link
                  className="text-sky-700 underline decoration-sky-400 decoration-2 hover:bg-sky-200"
                  link={socials[item]}
                  text={item}
                />
              </span>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Intro;
