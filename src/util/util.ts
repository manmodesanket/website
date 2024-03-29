import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { type Options } from "rehype-pretty-code";

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
    } else if (field === "date" && data[field]) {
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

export function getDateInFormat(inputDateString: string) {
  // Parse the input string into a Date object
  const parts = inputDateString.split("/");
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Months are zero-based in JavaScript Date objects
  const day = parseInt(parts[2], 10);
  const inputDate = new Date(year, month, day);

  // Format the date to '23 June 2023'
  const outputDateString = inputDate.toLocaleDateString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return outputDateString;
}

export const rehypePrettyCodeOptions: Partial<Options> = {
  theme: "one-dark-pro",
  tokensMap: {
    // VScode command palette: Inspect Editor Tokens and Scopes
    // https://github.com/Binaryify/OneDark-Pro/blob/47c66a2f2d3e5c85490e1aaad96f5fab3293b091/themes/OneDark-Pro.json
    fn: "entity.name.function",
    objKey: "meta.object-literal.key",
  },
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
    node.properties.className = [""];
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push("line--highlighted");
  },
};
