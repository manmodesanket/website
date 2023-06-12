import { Header, Layout } from "../../components/Index";
import { useData } from "../../context/DataContext";
import { getAllPosts, Post } from "./api";

export async function getStaticProps() {
  const posts = getAllPosts(["title", "date", "slug", "description"]);
  return { props: { posts } };
}

function PostPage({ posts }: { posts: Post[] }) {
  const {
    data: { mode },
  } = useData();

  return (
    <div className={mode === "moon" ? "dark" : ""}>
      <div className="w-full min-h-screen bg-white dark:bg-navy dark:text-slate-200">
        <Header />
        <Layout>
          <h1>Posts</h1>
          {posts.map((item) => (
            <div key={item.slug} className="mb-4">
              <h2>
                <a href={`/posts/${item.slug}`}>{item.title}</a>
              </h2>
              <p>{item.description}</p>
            </div>
          ))}
        </Layout>
      </div>
    </div>
  );
}

export default PostPage;
