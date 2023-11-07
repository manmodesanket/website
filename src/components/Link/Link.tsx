import React from "react";

const Link: React.FC<{ className?: string; link: string; text: string }> = ({
  className,
  link,
  text,
}) => {
  return (
    <a className={className} target="_blank" rel="noreferrer" href={link}>
      {text}
    </a>
  );
};

export default Link;
