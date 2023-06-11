import React from "react";
import dynamic from "next/dynamic";
import { Layout } from "../../components/Index";
import { getAllPosts } from "./api";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "closure-in-js" } },
      {
        params: {
          slug: "js-code-journey",
        },
      },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: { params: any }) {
  const { params } = context;
  const { slug } = params;
  return {
    props: { slug }, // will be passed to the page component as props
  };
}

const Intro: React.FC<{ slug: string }> = ({ slug }) => {
  const Post = dynamic(() => import(`../../posts/${slug}.mdx`));
  return (
    <Layout>
      <main className="flex flex-col justify-around md:px-0">
        <Post />
      </main>
    </Layout>
  );
};

export default Intro;
