import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

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

const postsDirectory = join(process.cwd(), "src/posts");

function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Post | {} = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      /* @ts-ignore */
      items[field] = realSlug;
    }
    if (field === "content") {
      /* @ts-ignore */
      items[field] = content;
    }

    if (data[field]) {
      /* @ts-ignore */
      items[field] = data[field];
    }
  });

  return items;
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
