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
                                    numberOfNodes={20}
                                    rules={[{a: 1/2, b: 0}, {a: 3, b: 1}]}
                                    maxBound={10000}
                                    isHierarchical={false}
                                />
                            </div>
                        </Col>
                        <Col md={6}>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        ); 
    }
}