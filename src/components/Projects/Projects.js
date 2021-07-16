// React component class for Projects section
import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

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

// import cover component
import Cover from '../Cover/Cover';

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
                <img className={icons_dict[this.props.iconId]} src={icons_dict[this.props.iconId]} />
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
                            <img src={project_images[this.props.projectId] || test_img} />
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
                {/* <Cover 
                    coverClass='projects'
                    coverTitle="My Projects"
                    coverDescription={<>
                        <p>
                            Here, I have compiled a list of all of my programming projects, which I have done
                            either for fun, to solve a particular problem I had in my life, for work or a
                            combination of all three.
                        </p>
                        <p>
                            Click the image in the 'project folder' to learn more about that project, including a link
                            to its respective website or repository.
                        </p>
                        <p>
                            I have also included the main languages and tools utilized in each
                            project. You can hover over the logos to see the names of the languages and tools.
                        </p>
                    </>} */}
                {/* /> */}
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