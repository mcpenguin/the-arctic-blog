// React component class for Myextracurriculars section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import test image
import test_img from '../penguin-test.png'

// import stylesheet
import './MyExtracurriculars.css';

export default class MyExtracurriculars extends Component {
    render() { 
        return (
            <section class="section-my-extracurriculars">
                <Container fluid>
                    <Row className="flex-row-reverse">
                        <Col lg={6} className="col-lg-push-6 my-extracurriculars-image-div">
                            <div>
                                <img className="my-extracurriculars-image" src={test_img} />
                            </div>
                        </Col>
                        <Col lg={6} className="col-lg-pull-6 my-extracurriculars-text">
                            <div className="my-extracurriculars-text-div">
                                <h2>My Hobbies & Extracurriculars</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi 
                                    ut aliquip ex ea commodo consequat.
                                </p>
                                <div className="my-extracurriculars-view">
                                    <button class="noselect">View my extracurriculars</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        ); 
    }
}