import MarkdownIt from "markdown-it";
import parse from "html-react-parser";
import React, { useState, useEffect } from "react";

interface MarkdownFromFileProps {
  markdownLink: string;
  customClassName: string;
}

export const MarkdownFromFile = (props: MarkdownFromFileProps) => {
  const { markdownLink, customClassName } = props;
  const md = new MarkdownIt();
  const [txt, setTxt] = useState("");

  useEffect(() => {
    fetch(markdownLink)
      .then((res) => res.text())
      .then((t) => setTxt(t));
  });

  return <div className={customClassName}>{parse(md.render(txt))}</div>;
};

interface MarkdownFromContentProps {
  markdownContent: string | null;
  customClassName: string;
}

export const MarkdownFromContent = (props: MarkdownFromContentProps) => {
  const { markdownContent, customClassName } = props;
  const md = new MarkdownIt();
  console.log(markdownContent);
  return <div className={customClassName}>{parse(md.render(markdownContent ?? ""))}</div>;
};
