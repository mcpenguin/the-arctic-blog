// React component class for MyExperience section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import test image
import test_img from '../penguin-test.png'

// import stylesheet
import './Credits.css';

export default class Credits extends Component {
    render() {
        return (
            <section class="section-page section-credits">
                <Container fluid>
                    <Row className="flex-row-reverse">
                        <Col lg={6} className="page-image-div col-lg-push-6 credits-image-div">
                            <div>
                                <img className="page-image credits-image" src={test_img} />
                            </div>
                        </Col>
                        <Col lg={6} className="page-text col-lg-pull-6 credits-text">
                            <div className="page-text-div credits-text-div">
                                <h2>Credits & Acknowledgements</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit, sed do eiusmod tempor incididunt ut labore
                                    et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex ea commodo consequat.
                                </p>
                                <div className="page-view credits-view">
                                    <button class="noselect">View credits</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}