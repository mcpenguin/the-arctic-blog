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
import './Projects.css';

import test_img from './test-img.png';

// import icons dict
import { icons_dict, icons_names_dict } from './tool_icons/tool_icons';
// import images
import project_images from './project_images/project_images';

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
            <Col xl={4} md={6}>
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
                <section class="section-projects-page">
                    <Container fluid>
                        <h2>My Projects</h2>
                        <p>
                            Projects description would go here.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ac odio tempor orci dapibus ultrices in
                            iaculis nunc sed. Amet risus nullam eget felis eget nunc
                            lobortis mattis aliquam. Orci a scelerisque purus semper eget
                            duis. Eu augue ut lectus arcu bibendum at varius vel.
                        </p>
                        <Row>
                            <ProjectFolder
                                projectId="my_course_graph"
                                projectName="My Course Graph"
                                iconsUsed={['expressjs', 'react', 'nodejs']}
                            />
                            <ProjectFolder
                                projectId="pmc_website"
                                projectName="Pure Math Club Website"
                                iconsUsed={['react', 'sass', 'nodejs']}
                            />
                            <ProjectFolder
                                projectId="joget_fb_marketplace"
                                projectName="Joget FB Marketplace"
                                iconsUsed={['joget', 'java', 'mysql', 'js']}
                            />
                            <ProjectFolder
                                projectId="skyblock_calculator"
                                projectName="Skyblock Calculator"
                                iconsUsed={['java', 'excel']}
                            />
                            <ProjectFolder
                                projectId="malaysia_covid"
                                projectName="Malaysia COVID-19 Data"
                                iconsUsed={['mysql', 'beautifulsoup', 'jupyter', 'python']}
                            />
                            <ProjectFolder
                                projectId="student_reg_gui"
                                projectName="Student Attendance GUI"
                                iconsUsed={['java']}
                            />
                            <ProjectFolder
                                projectId="linear_collatz"
                                projectName="Linear Collatz"
                                iconsUsed={['react', 'reactbootstrap', 'nodejs']}
                            />
                            <ProjectFolder
                                projectId="compass_initiative"
                                projectName="Compass Initiative Website"
                                iconsUsed={['wordpress', 'bluehost']}
                            />
                            <ProjectFolder 
                                projectId="calculator"
                                projectName="Tkinter Calculator"
                                iconsUsed={['tkinter', 'python']}
                            />
                        </Row>
                    </Container>
                </section>


            </>
        );
    }
}