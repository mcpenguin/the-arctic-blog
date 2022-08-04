// React component for individual projects

import React, { useState, useEffect } from 'react';

// import markdown parser
import MarkdownIt from 'markdown-it';
import parse from 'html-react-parser';

// import data
import project_data from './projectsData';
import project_images from './project_images/project_images';
import * as project_content from './project_content/project_content';

import './ProjectContent.scss';

interface ProjectContentProps {
    projectId: string,
}

export default function ProjectContent(props: ProjectContentProps) {
  const md = new MarkdownIt();

  const [txt, setTxt] = useState('');

  useEffect(() => {
    fetch(project_content[props.projectId])
      .then((res) => res.text())
      .then((t) => setTxt(t));
  });

  const link = project_data[props.projectId].projectLink;
  return (
    <section className="project-content">
      <div
        className="project-cover"
        style={{
          backgroundImage: `url(${project_images[props.projectId]})`,
        }}
      >
        <div className="sub">
          <div className="title">
            <h1>{project_data[props.projectId].projectName}</h1>
            <h4>
              <i className="icon fas fa-globe" />
              {typeof link !== 'undefined' ? <a href={link}>Project Link</a> : 'No project link available'}
            </h4>
          </div>
        </div>
      </div>
      <div className="project-description">
        <div className="description">
          {parse(md.render(txt))}
        </div>
      </div>
    </section>
  );
}
