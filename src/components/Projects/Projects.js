// React component class for Projects section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import stylesheet
import './Projects.css';

import test_img from './test-img.png';

// import icons dict
import icons_dict from './tool_icons/tool_icons';

// class for 'folder' to 'store' the project
// props:
// - projectName: project name (as string, max length = 25 chars)
// - iconsUsed: list of tools used (as list, max length = 4)
class ProjectFolder extends Component {
    render() {
        return (
            <div className="project-folder">
                <div className="title">
                    <h4>{this.props.projectName}</h4>
                </div>
                {/* image has to be at least twice as long as high */}
                <img src={test_img} />
                <div className="tools-used">
                    {this.props.iconsUsed.map(id => <img className={icons_dict[id]} src={icons_dict[id]} />)}
                </div>
            </div>
        )
    }
}

export default class Projects extends Component {
    render() {
        return (
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
                        <Col lg={4} md={6}>
                            <ProjectFolder 
                                projectName="Project Project 1"
                                iconsUsed={['mongodb', 'expressjs', 'react', 'nodejs']}
                            />
                        </Col>
                        <Col lg={4} md={6}>
                            <ProjectFolder 
                                projectName="How Long Can Project 2?"
                                iconsUsed={['html', 'css', 'js']}
                            />
                        </Col>
                        <Col lg={4} md={6}>
                            <ProjectFolder 
                                projectName="Project 3"
                                iconsUsed={['python', 'pandas', 'mysql']}
                            />
                        </Col>
                        <Col lg={4} md={6}>
                            <ProjectFolder 
                                projectName="Project 4"
                                iconsUsed={['joget', 'java', 'mysql']}
                            />
                        </Col>
                        <Col lg={4} md={6}>
                            <ProjectFolder 
                                projectName="Project 5"
                                iconsUsed={['html']}
                            />
                        </Col>
                        <Col lg={4} md={6}>
                            <ProjectFolder 
                                projectName="Project 6"
                                iconsUsed={['html']}
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}