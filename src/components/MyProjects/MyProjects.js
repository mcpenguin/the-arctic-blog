// React component class for MyProjects section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import test image
import test_img from '../penguin-test.png'

// import stylesheet
import './MyProjects.css';

export default class MyProjects extends Component {
    render() { 
        return (
            <section class="section-my-projects">
                <Container fluid>
                    <Row>
                        <Col lg={6} className="my-projects-image-div">
                            <div>
                                <img className="my-projects-image" src={test_img} />
                            </div>
                        </Col>
                        <Col lg={6} className="my-projects-text">
                            <div className="my-projects-text-div">
                                <h2>My Projects</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi 
                                    ut aliquip ex ea commodo consequat.
                                </p>
                                <div className="my-projects-view">
                                    <button class="noselect">View my projects</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        ); 
    }
}