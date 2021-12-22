// React component class for Projects section
import React, { Component } from 'react';
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

// tooltip for icon images
// props:
// - iconId: id of icon
// - iconName: name of icon 
class IconTooltip extends Component {
    renderTooltip = (props) => (
        <Tooltip {...props}>
            {this.props.iconName}
        </Tooltip>
    );

    render() {
        return (
            <OverlayTrigger
                placement="bottom"
                delay={{ show: 100, hide: 100 }}
                overlay={this.renderTooltip}
            >
                <img className={icons_dict[this.props.iconId]} src={icons_dict[this.props.iconId]} alt={this.props.iconId}/>
            </OverlayTrigger>
        )
    }
}

// class for 'folder' to 'store' the project
// props:
// - projectId: project id (determines image used)
// - projectName: project name (as string, max length = 25 chars)
// - iconsUsed: list of tools used (as list, max length = 4)
class ProjectFolder extends Component {
    render() {
        return (
            <Col xl={4} lg={6}>
                <div className="project-folder">
                    <div className="title">
                        <h4>{this.props.projectName}</h4>
                    </div>
                    <div className="project-image">
                        <Link exact to={`/projects/${this.props.projectId}`}>
                            <img src={project_images[this.props.projectId] || test_img} alt={this.props.projectId} />
                        </Link>
                    </div>
                    <div className="tools-used">
                        {this.props.iconsUsed.map(id =>
                            <IconTooltip
                                iconId={id}
                                iconName={icons_names_dict[id]}
                                className="icon-tooltip"
                            />
                        )}
                    </div>
                </div>
            </Col>
        )
    }
}

export default class Projects extends Component {
    render() {
        return (
            <>
                <section id="projects" class="section-projects-page">
                    <div className="sub">
                        <Container fluid>
                            <h3>My Projects</h3>
                            <Row>
                                {
                                    // map the projects data into respective project folders
                                    Object.keys(project_data).map(project => (
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


            </>
        );
    }
}
