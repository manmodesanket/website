import { Layout } from "../../components/Index";
import { getAllPosts, Post } from "./api";

export async function getStaticProps() {
  const posts = getAllPosts(["title", "date", "slug", "description"]);
  return { props: { posts } };
}

function PostPage({ posts }: { posts: Post[] }) {
  return (
    <div>
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
  );
}

export default PostPage;
