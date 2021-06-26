// React component class for Projects section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Network from './Network';
import linear_collatz from './linear-collatz-2.png';

// import stylesheet
import './Projects.css';

export default class Projects extends Component {
    render() {
        return (
            <section class="section-projects">
                <Container fluid>
                    <h2 class="projects-header">My Projects</h2>
                    <Row>
                        <Col md={6}>
                            {/* <img className="projects-image" src={linear_collatz} /> */}
                            <div class="project-network">
                                <Network
                                    k={2}
                                    numberOfNodes={30}
                                    rules={[{ a: 1 / 2, b: 0 }, { a: 3, b: 1 }]}
                                    maxBound={10000}
                                    isHierarchical={false}
                                />
                            </div>
                            <p class="project-caption">
                                A graphical visualization of the Collatz conjecture
                                using the <code>react-graph-vis</code> library.

                            </p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <p class="project-text">
                                    In my free time, one of my favorite hobbies is
                                    developing my own programming projects, which help me
                                    to both better my coding skills and explore outside
                                    my comfort zone.
                                </p>
                                <a href="javascript:alert('Coming soon!')">
                                    <button type="button" class="slide">
                                        <div>View my personal projects</div>
                                        <span><i className="fas fa-arrow-right"></i></span>
                                    </button>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}