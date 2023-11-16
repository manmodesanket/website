import Link from "next/link";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts - manmodesanket",
  description: "Posts by Sanket Manmode",
};

function PostPage() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-navy dark:text-slate-200">
      <Header />
      <Layout>
        {allPosts.map((item) => (
          <div key={item.slug} className="mb-4">
            <h3>
              <Link
                className="text-sky-700 underline decoration-sky-400 decoration-2 hover:bg-sky-200"
                href={item.slug}
              >
                {item.title}
              </Link>
            </h3>
            <p>{item.description}</p>
          </div>
        ))}
      </Layout>
    </div>
  );
}
export default PostPage;
