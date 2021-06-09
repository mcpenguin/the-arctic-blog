// React component class for About Me section

import React, { Component } from 'react';
import Fade from 'react-reveal';
import TypeWriterEffect from 'react-typewriter-effect';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import personal_photo from './personal-photo.jpg';

// import icons from material-ui
import WorkIcon from '@material-ui/icons/WorkRounded';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/CodeSharp';
import ActivityIcon from '@material-ui/icons/SportsSoccerSharp';

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
                                    My name is Marcus Chan, and I will be entering my 2A term as a Data
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
                                    <WorkIcon className="personal-facts-icon"/>
                                    Current Coop
                                </h4>
                                <p className="personal-facts-body">
                                    Data Analyst, eMedAsia @ Kuala Lumpur, Malaysia
                                </p>

                                <h4 className="personal-facts-head">
                                    <SchoolIcon className="personal-facts-icon" />
                                    Current Education
                                </h4>
                                <p className="personal-facts-body">
                                    Data Science, Honours, Co-op (2A in Fall 2021)
                                    <br />
                                    University of Waterloo @ Ontario, Canada
                                    <br />
                                    CAV: 94 | MAV: 96
                                </p>

                                <h4 className="personal-facts-head">
                                    <CodeIcon className="personal-facts-icon" />
                                    Programming Expertise
                                </h4>
                                <p className="personal-facts-body">
                                    HTML, CSS, JS, Node.js, JQuery, React, Python
                                    (Pandas, Numpy, Scipy, Matplotlib), Java, MySQL,
                                    Racket/Scheme/Lisp, C
                                </p>

                                <h4 className="personal-facts-head">
                                    <ActivityIcon className="personal-facts-icon" />
                                    Hobbies
                                </h4>
                                <p className="personal-facts-body">
                                    Mathematics, coding, arranging/composing piano pieces,
                                    rock climbing, basketball, watching videos on YouTube
                                </p>                             
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

