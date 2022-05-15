import React from "react";

const Link: React.FC<{ link: string; text: string }> = ({ link, text }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={link}
      className="underline text-blue-400 hover:bg-blue-50"
    >
      {text}
    </a>
  );
};

export default Link;
