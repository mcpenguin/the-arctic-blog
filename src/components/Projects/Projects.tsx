// React component class for Projects section
import { Link } from "react-router-dom";

// import Bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

// import stylesheet
import "./Projects.scss";

// import icons dict
import iconsNamesDict from "./ToolIcons";

// import project data
import projectData from "./projectsData";

const renderTooltip = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Tooltip {...props}>{props.iconName}</Tooltip>
);

// tooltip for icon images
// props:
// - iconId: id of icon
// - iconName: name of icon
const IconTooltip = (props: {
  iconId: string;
  // eslint-disable-next-line react/no-unused-prop-types
  iconName: string;
  // eslint-disable-next-line react/no-unused-prop-types
  className: string;
}) => {
  const { iconId } = props;
  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 100, hide: 100 }}
      overlay={renderTooltip(props)}
    >
      <img
        className={iconId}
        src={`/assets/Projects/toolIcons/${iconId}.png`}
        alt={iconId}
      />
    </OverlayTrigger>
  );
};

// class for 'folder' to 'store' the project
// props:
// - projectId: project id (determines image used)
// - projectName: project name (as string, max length = 25 chars)
// - iconsUsed: list of tools used (as list, max length = 4)
const ProjectFolder = (props: any) => {
  const { projectName, projectId, iconsUsed } = props;
  return (
    <Col xl={4} lg={6}>
      <div className="project-folder">
        <div className="title">
          <h4>{projectName}</h4>
        </div>
        <div className="project-image">
          <Link exact to={`/projects/${projectId}`}>
            <img
              src={`/assets/Projects/images/${projectId}.jpg`}
              alt={projectId}
            />
          </Link>
        </div>
        <div className="tools-used">
          {iconsUsed.map((id) => (
            <IconTooltip
              iconId={id}
              iconName={iconsNamesDict[id]}
              className="icon-tooltip"
            />
          ))}
        </div>
      </div>
    </Col>
  );
};

const Projects = () => (
  <section id="projects" className="section-projects-page">
    <div className="sub">
      <Container fluid>
        <h3>My Projects</h3>
        <Row>
          {
            // map the projects data into respective project folders
            Object.keys(projectData).map((project) => (
              <ProjectFolder
                projectId={project}
                projectName={projectData[project].projectName}
                iconsUsed={projectData[project].iconsUsed}
              />
            ))
          }
        </Row>
      </Container>
    </div>
  </section>
);

export default Projects;
