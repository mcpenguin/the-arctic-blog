// React component class for Myachievements section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import test image
import test_img from '../penguin-test.png'

// import stylesheet
import './MyAchievements.css';

export default class MyAchievements extends Component {
    render() { 
        return (
            <section class="section-page section-my-achievements">
                <Container fluid>
                    <Row>
                        <Col lg={6} className="page-image-div my-achievements-image-div">
                            <div>
                                <img className="page-image my-achievements-image" src={test_img} />
                            </div>
                        </Col>
                        <Col lg={6} className="page-text my-achievements-text">
                            <div className="page-text-div my-achievements-text-div">
                                <h2>My Awards</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi 
                                    ut aliquip ex ea commodo consequat.
                                </p>
                                <div className="page-view my-achievements-view">
                                    <button class="noselect">View my awards</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        ); 
    }
}