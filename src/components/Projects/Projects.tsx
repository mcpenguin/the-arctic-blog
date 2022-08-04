// React component class for Projects section
import { Link } from 'react-router-dom';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// import stylesheet
import './Projects.scss';

// filler image
import test_img from './test-img.png';

// import icons dict
import { icons_dict, icons_names_dict } from './tool_icons/tool_icons';
// import images
import project_images from './project_images/project_images';

// import project data
import project_data from './projectsData';

const renderTooltip = (props) => (
  <Tooltip {...props}>
    {props.iconName}
  </Tooltip>
);

// tooltip for icon images
// props:
// - iconId: id of icon
// - iconName: name of icon
function IconTooltip(
  props: { iconId: string, iconName: string, className: string },
) {
  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 100, hide: 100 }}
      overlay={renderTooltip(props)}
    >
      <img className={icons_dict[props.iconId]} src={icons_dict[props.iconId]} alt={props.iconId} />
    </OverlayTrigger>
  );
}

// class for 'folder' to 'store' the project
// props:
// - projectId: project id (determines image used)
// - projectName: project name (as string, max length = 25 chars)
// - iconsUsed: list of tools used (as list, max length = 4)
function ProjectFolder(props: any) {
  return (
    <Col xl={4} lg={6}>
      <div className="project-folder">
        <div className="title">
          <h4>{props.projectName}</h4>
        </div>
        <div className="project-image">
          <Link exact to={`/projects/${props.projectId}`}>
            <img src={project_images[props.projectId] || test_img} alt={props.projectId} />
          </Link>
        </div>
        <div className="tools-used">
          {props.iconsUsed.map((id) => (
            <IconTooltip
              iconId={id}
              iconName={icons_names_dict[id]}
              className="icon-tooltip"
            />
          ))}
        </div>
      </div>
    </Col>
  );
}

export default function Projects(props: any) {
  return (
    <section id="projects" className="section-projects-page">
      <div className="sub">
        <Container fluid>
          <h3>My Projects</h3>
          <Row>
            {
                        // map the projects data into respective project folders
                        Object.keys(project_data).map((project) => (
                          <ProjectFolder
                            projectId={project}
                            projectName={project_data[project].projectName}
                            iconsUsed={project_data[project].iconsUsed}
                          />
                        ))
                    }
          </Row>
        </Container>
      </div>
    </section>
  );
}
