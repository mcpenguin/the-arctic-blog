// React component class for Mytimeline section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import test image
import test_img from '../penguin-test.png'

// import stylesheet
import './MyTimeline.css';

export default class MyTimeline extends Component {
    render() { 
        return (
            <section class="section-page section-my-timeline">
                <Container fluid>
                    <Row>
                        <Col lg={6} className="page-image-div my-timeline-image-div">
                            <div>
                                <img className="page-image my-timeline-image" src={test_img} />
                            </div>
                        </Col>
                        <Col lg={6} className="page-text my-timeline-text">
                            <div className="page-text-div my-timeline-text-div">
                                <h2>My Timeline</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi 
                                    ut aliquip ex ea commodo consequat.
                                </p>
                                <div className="page-view my-timeline-view">
                                    <button class="noselect">View my timeline</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        ); 
    }
}