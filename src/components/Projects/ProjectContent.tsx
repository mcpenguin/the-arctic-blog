// React component for individual projects

import { MarkdownFromFile } from "../Common/Markdown";

// import data
import projectData from "./projectsData";

import "./ProjectContent.scss";

interface ProjectContentProps {
  projectId: string;
}

const ProjectContent = (props: ProjectContentProps) => {
  const { projectId } = props;
  const projectContentLink = `/assets/Projects/content/${projectId}.md`;

  const link = projectData[projectId].projectLink;
  return (
    <section className="project-content">
      <div
        className="project-cover"
        style={{
          backgroundImage: `url(/assets/Projects/images/${projectId}.jpg)`,
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
        <MarkdownFromFile
          customClassName="description"
          markdownLink={projectContentLink}
        />
      </div>
    </section>
  );
};

export default ProjectContent;
