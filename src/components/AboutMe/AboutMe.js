// React component class for About Me section

import React, { Component } from 'react';
import Fade from 'react-reveal';
import TypeWriterEffect from 'react-typewriter-effect';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import personal_photo from './personal-photo.png';

import './AboutMe.css';

export default class AboutMe extends Component {
    render() {
        return (
            <section className="section-about-me" id="about-me">
                <Container id="container-about-me">
                    <Row>
                        <Col className="w-50">
                            <h2 id="about-me-title">About Me</h2>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <img
                                id="personal-photo"
                                src={personal_photo}
                                alt="personal"
                            />
                        </Col>
                        <Col lg={6}>
                            <div className="personal-desc-section">
                                <p className="personal-description">
                                    Welcome to the Arctic Blog!
                                    My name is Marcus, and I am will be entering my 2A term as a Data
                                    Science student at the University of Waterloo, after my current coop
                                    term as a data analyst at eMedAsia.
                                </p>
                                <p className="personal-description">
                                    I am extremely passionate about mathematics and software
                                    development, with an aspiration to build a career in data science 
                                    and artificial intelligence after I graduate with a Master's degree or my
                                    doctorate.
                                </p>
                            </div>
                            <div className="personal-facts">
                                <h4 className="personal-facts-head">
                                    Current Position
                                </h4>
                                <p className="personal-facts-body">
                                    Data Analyst, eMedAsia @ Kuala Lumpur, Malaysia
                                </p>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

