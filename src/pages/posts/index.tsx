import { Layout } from "../../components/Index";
import { getAllPosts } from "./api";

type Post =
  | {
      title: string;
      date: string;
      slug: string;
    }
  | {
      title: string;
      date: string;
      slug: string;
      content: string;
    };

export async function getStaticProps() {
  const posts = getAllPosts(["title", "date", "slug"]);
  return { props: { posts } };
}

function PostPage({ posts }: { posts: Post[] }) {
  console.log(posts);
  return (
    <div>
      <Layout>
        <h1>Posts</h1>
        {posts.map((item) => (
          <div key={item.slug}>
            <a href={`/posts/${item.slug}`}>{item.title}</a>
          </div>
        ))}
      </Layout>
    </div>
  );
}

export default PostPage;
