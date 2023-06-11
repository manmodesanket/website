import NextLink from "next/link";
import type { ImageProps } from "next/image";

export const components = {
  h1: (props: any) => <h2 {...props} />,
  h2: (props: any) => <h3 {...props} />,
  h3: (props: any) => <h4 {...props} />,
  h4: (props: any) => <h5 {...props} />,
  hr: (props: any) => <hr {...props} />,
  a: ({ href = "", ...props }) => {
    if (href.startsWith("http")) {
      return <a href={href} target="_blank" rel="noreferrer" {...props} />;
    }

    return <NextLink href={href} {...props} />;
  },
  ul: (props: any) => <ul {...props} />,
  ol: (props: any) => <ol {...props} />,
  strong: (props: any) => <strong className="font-semibold" {...props} />,
  blockquote: (props: any) => <blockquote {...props} />,
  del: (props: any) => <del {...props} />,
};
