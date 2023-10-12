import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import { components } from "./MdxComponents";
import { Header, Layout } from "../../components/Index";
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
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [rehypeCodeTitles, rehypePrism],
    },
  });
  const postTitle = post.title;
  return {
    props: { post: { title: postTitle, source: mdxSource }, slug }, // will be passed to the page component as props
  };
}

const Intro: React.FC<{ post: Post; slug: string }> = ({ post, slug }) => {
  return (
    <div>
      <div className="w-full min-h-screen bg-white dark:bg-navy dark:text-slate-200">
        <Header />
        <Layout>
          <main className="flex flex-col justify-around md:px-0">
            <h1 className="mb-4">{post.title}</h1>
            <MDXRemote {...post.source} components={components} />
            <section></section>
          </main>
        </Layout>
      </div>
    </div>
  );
};

export default Intro;
