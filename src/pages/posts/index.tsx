import Link from "next/link";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import { getAllPosts, getDateInFormat, Post } from "../../util/util";

export async function getStaticProps() {
  const posts = getAllPosts(["title", "date", "slug", "description"]);
  return { props: { posts } };
}

function PostPage({ posts }: { posts: Post[] }) {
  const sortedPosts = posts.sort((a, b) =>
    new Date(a.date) > new Date(b.date) ? -1 : 1
  );
  return (
    <div>
      <div className="w-full min-h-screen bg-white dark:bg-navy dark:text-slate-200">
        <Header />
        <Layout>
          {sortedPosts.map((item) => (
            <div key={item.slug} className="mb-4">
              <h3>
                <Link
                  className="text-black hover:underline"
                  href={`/posts/${item.slug}`}
                >
                  {item.title}
                </Link>
              </h3>
              <small>{getDateInFormat(item.date)}</small>
              <p>{item.description}</p>
            </div>
          ))}
        </Layout>
      </div>
    </div>
  );
}

export default PostPage;
