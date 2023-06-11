import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { components } from "./MdxComponents";
import { Layout } from "../../components/Index";
import { getAllPosts, getPostBySlug } from "./api";

type Post = {
  title: string;
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
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
  const mdxSource = await serialize(post.content);
  const postTitle = post.title;
  return {
    props: { post: { title: postTitle, source: mdxSource }, slug }, // will be passed to the page component as props
  };
}

const Intro: React.FC<{ post: Post; slug: string }> = ({ post, slug }) => {
  return (
    <Layout>
      <main className="flex flex-col justify-around md:px-0">
        <h1>{post.title}</h1>
        <MDXRemote {...post.source} components={components} />
      </main>
    </Layout>
  );
};

export default Intro;
