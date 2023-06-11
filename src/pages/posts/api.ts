import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export type Post = {
  title: string;
  date: string;
  description: string;
  slug: string;
  content: string;
};

const postsDirectory = join(process.cwd(), "src/posts");

function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const postData: Post = {
    title: "",
    date: "",
    slug: "",
    content: "",
    description: "",
  };
  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      postData[field] = realSlug;
    } else if (field === "content") {
      postData[field] = content;
    } else if (field === "title" && data[field]) {
      postData[field] = data[field];
    } else if (field === "description" && data[field]) {
      postData[field] = data[field];
    }
  });

  return postData;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields));
  // // sort posts by date in descending order
  // .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
  return posts;
}

async function getStaticProps() {
  const posts = getAllPosts(["title", "date", "slug"]);
  return { props: { posts } };
}
