// React component for individual projects

import React, { useState, useEffect } from "react";

// import markdown parser
import MarkdownIt from "markdown-it";
import parse from "html-react-parser";

// import data
import projectData from "./projectsData";
import projectImages from "../../../public/assets/Projects/project_images/project_images";
import * as projectContent from "../../../public/assets/Projects/project_content/project_content";

import "./ProjectContent.scss";

interface ProjectContentProps {
  projectId: string;
}

const ProjectContent = (props: ProjectContentProps) => {
  const { projectId } = props;

  const md = new MarkdownIt();

  const [txt, setTxt] = useState("");

  useEffect(() => {
    fetch(projectContent[projectId])
      .then((res) => res.text())
      .then((t) => setTxt(t));
  });

  const link = projectData[projectId].projectLink;
  return (
    <section className="project-content">
      <div
        className="project-cover"
        style={{
          backgroundImage: `url(${projectImages[projectId]})`,
        }}
      >
        <div className="sub">
          <div className="title">
            <h1>{projectData[projectId].projectName}</h1>
            <h4>
              <i className="icon fas fa-globe" />
              {typeof link !== "undefined" ? (
                <a href={link}>Project Link</a>
              ) : (
                "No project link available"
              )}
            </h4>
          </div>
        </div>
      </div>
      <div className="project-description">
        <div className="description">{parse(md.render(txt))}</div>
      </div>
    </section>
  );
};

export default ProjectContent;
