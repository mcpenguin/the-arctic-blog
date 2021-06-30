// React component class for Myeducation section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import test image
import test_img from '../penguin-test.png'

// import stylesheet
import './MyEducation.css';

export default class MyEducation extends Component {
    render() { 
        return (
            <section class="section-page section-my-education">
                <Container fluid>
                    <Row>
                        <Col lg={6} className="page-image-div my-education-image-div">
                            <div>
                                <img className="page-image my-education-image" src={test_img} />
                            </div>
                        </Col>
                        <Col lg={6} className="page-text my-education-text">
                            <div className="page-text-div my-education-text-div">
                                <h2>My Education</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi 
                                    ut aliquip ex ea commodo consequat.
                                </p>
                                <div className="page-view my-education-view">
                                    <button class="noselect">View my education</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        ); 
    }
}