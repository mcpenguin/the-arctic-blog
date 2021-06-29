// React component class for MyExperience section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import test image
import test_img from '../penguin-test.png'

// import stylesheet
import './MyExperience.css';

export default class MyExperience extends Component {
    render() { 
        return (
            <section class="section-my-experience">
                <Container fluid>
                    <Row className="flex-row-reverse">
                        <Col lg={6} className="col-lg-push-6 my-experience-image-div">
                            <div>
                                <img className="my-experience-image" src={test_img} />
                            </div>
                        </Col>
                        <Col lg={6} className="col-lg-pull-6 my-experience-text">
                            <div className="my-experience-text-div">
                                <h2>My Experience</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi 
                                    ut aliquip ex ea commodo consequat.
                                </p>
                                <div className="my-experience-view">
                                    <button class="noselect">View my experience</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        ); 
    }
}