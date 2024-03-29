import { Metadata } from "next";
import { cache } from "react";

import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Mdx } from "../../../components/mdx-components";
import Layout from "../../../components/Layout/Layout";
import Header from "../../../components/Header/Header";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post: any) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

const cachedGetPost = cache(getPostFromParams);

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await cachedGetPost(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post: any) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await cachedGetPost(params);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-white dark:bg-navy dark:text-slate-200">
      <Header />
      <Layout>
        <article className="py-6 prose dark:prose-invert">
          <h1 className="mb-2">{post.title}</h1>
          {post.description && (
            <p className="text-xl mt-0 text-slate-700 dark:text-slate-200">
              {post.description}
            </p>
          )}
          <hr className="my-4" />
          <Mdx code={post.body.code} />
        </article>
      </Layout>
    </div>
  );
}
