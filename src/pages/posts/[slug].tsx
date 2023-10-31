import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypePrism from "rehype-prism-plus";
import rehypePrettyCode from "rehype-pretty-code";
import { components } from "../../components/MdxComponents";
import Layout from "../../components/Layout/Layout";
import Header from "../../components/Header/Header";
import {
  getAllPosts,
  getDateInFormat,
  getPostBySlug,
  rehypePrettyCodeOptions,
} from "../../util/util";

type Post = {
  title: string;
  date: string;
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
      rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions], rehypePrism],
    },
  });
  const postTitle = post.title;
  const postDate = post.date;
  return {
    props: {
      post: { date: postDate, title: postTitle, source: mdxSource },
      slug,
    }, // will be passed to the page component as props
  };
}

const Intro: React.FC<{ post: Post; slug: string }> = ({ post }) => {
  return (
    <div>
      <div className="w-full min-h-screen bg-white dark:bg-navy dark:text-slate-200">
        <Header />
        <Layout>
          <main className="flex flex-col justify-around md:px-0">
            <div className="mb-4">
              <h1>{post.title}</h1>
              <p className="text-sm">{getDateInFormat(post.date)}</p>
            </div>
            <MDXRemote {...post.source} components={components} />
          </main>
        </Layout>
      </div>
    </div>
  );
};

export default Intro;
