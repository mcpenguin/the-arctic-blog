// React component class for MyProjects section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import test image
import penguin_projects from './penguin-projects.png'
import ProjectsIcon from '@material-ui/icons/Code'
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import ChevronRight from '@material-ui/icons/ChevronRightTwoTone';

// import stylesheet
import './MyProjects.css';

export default class MyProjects extends Component {
    render() { 
        return (
            <section class="section-page section-my-projects">
                <Container fluid>
                    <Row>
                        <Col lg={6} className="page-image-div my-projects-image-div">
                            <div>
                                {/* <ProjectsIcon className="page-icon my-projects-icon" /> */}
                                <img className="page-image my-projects-image" src={penguin_projects} />
                            </div>
                        </Col>
                        <Col lg={6} className="page-text my-projects-text">
                            <div className="page-text-div my-projects-text-div">
                                <h2>My Projects</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi 
                                    ut aliquip ex ea commodo consequat.
                                </p>
                                <div className="page-view my-projects-view">
                                    <button class="noselect">Find out more <ChevronRight className="page-icon"/></button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        ); 
    }
}