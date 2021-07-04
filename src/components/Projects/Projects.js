// React component class for Projects section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import stylesheet
import './Projects.css';

import test_img from './test-img.png';

// icons dict
const icons = {
    html: <i class="fab fa-html5"></i>
}

// class for 'folder' to 'store' the project
// props:
// - projectName: project name (as string)
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
                    <h5>
                        {this.props.iconsUsed.map(id => icons[id])}
                    </h5>
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
                                iconsUsed={['html']}
                            />
                        </Col>
                        <Col lg={4} md={6}>
                            <ProjectFolder 
                                projectName="Project 2"
                                iconsUsed={['html']}
                            />
                        </Col>
                        <Col lg={4} md={6}>
                            <ProjectFolder 
                                projectName="Project 3"
                                iconsUsed={['html']}
                            />
                        </Col>
                        <Col lg={4} md={6}>
                            <ProjectFolder 
                                projectName="Project 4"
                                iconsUsed={['html']}
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