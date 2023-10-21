import NextLink from "next/link";
import Image from "next/image";

export const components = {
  Image,
  h1: (props: any) => <h2 className="mb-8" {...props} />,
  h2: (props: any) => <h3 className="mb-4" {...props} />,
  h3: (props: any) => <h4 className="mb-4" {...props} />,
  h4: (props: any) => <h5 className="mb-4" {...props} />,
  hr: (props: any) => <hr className="mb-4" {...props} />,
  p: (props: any) => <p className="mb-4" {...props} />,
  a: ({ href = "", ...props }) => {
    if (href.startsWith("http")) {
      return <a href={href} target="_blank" rel="noreferrer" {...props} />;
    }

    return <NextLink href={href} {...props} />;
  },
  ul: (props: any) => <ul className="mb-4" {...props} />,
  ol: (props: any) => <ol {...props} />,
  strong: (props: any) => <strong className="font-semibold" {...props} />,
  blockquote: (props: any) => <blockquote {...props} />,
  del: (props: any) => <del {...props} />,
};
