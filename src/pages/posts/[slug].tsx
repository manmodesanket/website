import React from "react";
import { Layout } from "../../components/Index";
import { getAllPosts, getPostBySlug } from "./api";
import { MDXProvider } from "@mdx-js/react";
import { components } from "./MdxComponents";

type Post = {
  title: string;
  date: string;
  slug: string;
  content: string;
};

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);
  return {
    paths: posts.map((post) => {
      return {
        params: { ...post },
      };
    }),
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context: { params: any }) {
  const { params } = context;
  const { slug } = params;
  const post = getPostBySlug(slug, ["title", "date", "slug", "content"]);
  return {
    props: { post, slug }, // will be passed to the page component as props
  };
}

const Intro: React.FC<{ post: Post; slug: string }> = ({ post, slug }) => {
  console.log(post);
  return (
    <Layout>
      <main className="flex flex-col justify-around md:px-0">
        <h1>{post.title}</h1>
        <MDXProvider components={components}>{post.content}</MDXProvider>
      </main>
    </Layout>
  );
};

export default Intro;
