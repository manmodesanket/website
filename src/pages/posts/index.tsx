import Link from "next/link";
import { Header, Layout } from "../../components";
import { getAllPosts, Post } from "./api";

export async function getStaticProps() {
  const posts = getAllPosts(["title", "date", "slug", "description"]);
  return { props: { posts } };
}

function PostPage({ posts }: { posts: Post[] }) {
  return (
    <div>
      <div className="w-full min-h-screen bg-white dark:bg-navy dark:text-slate-200">
        <Header />
        <Layout>
          {posts.map((item) => (
            <div key={item.slug} className="mb-4">
              <h3>
                <Link
                  className="text-black hover:underline"
                  href={`/posts/${item.slug}`}
                >
                  {item.title}
                </Link>
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </Layout>
      </div>
    </div>
  );
}

export default PostPage;
