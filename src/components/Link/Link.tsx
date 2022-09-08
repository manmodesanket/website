import React from "react";

const Link: React.FC<{ link: string; text: string }> = ({ link, text }) => {
  return (
    <a target="_blank" rel="noreferrer" href={link}>
      {text}
    </a>
  );
};

export default Link;
