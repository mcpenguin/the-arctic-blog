import MarkdownIt from "markdown-it";
import parse from "html-react-parser";
import React, { useState, useEffect } from "react";

interface MarkdownProps {
  markdownLink: string;
  customClassName: string;
}

const Markdown = (props: MarkdownProps) => {
  const { markdownLink, customClassName } = props;
  const md = new MarkdownIt();
  const [txt, setTxt] = useState("");

  useEffect(() => {
    fetch(markdownLink)
      .then((res) => res.text())
      .then((t) => setTxt(t));
  });

  return (
    <div className={customClassName}>
      {parse(md.render(txt))}
    </div>
  );
};

export default Markdown;
