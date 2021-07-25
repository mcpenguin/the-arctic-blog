// React component class for About Me section

import React, { Component } from 'react';
// import Fade from 'react-reveal';
import TypeWriterEffect from 'react-typewriter-effect';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import personal_photo from './personal-photo.png';

// import icons from material-ui
import WorkIcon from '@material-ui/icons/WorkRounded';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/CodeSharp';
import ActivityIcon from '@material-ui/icons/SportsSoccerSharp';
import NotesIcon from '@material-ui/icons/Create';

import './AboutMe.scss';

export default class AboutMe extends Component {
    render() {
        return (
            <section className="section-about-me" id="about-me">
                <div className='sub'>
                    <Container id="container-about-me">
                        <Row>
                            <Col className="w-50">
                                <h3 id="about-me-title">Quick Facts</h3>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col lg={6}>
                                <div className='personal-photo'>
                                    <img
                                        id="personal-photo"
                                        src={personal_photo}
                                        alt="personal"
                                    />
                                </div>
                            </Col>
                            <Col lg={6} className="personal-facts-col">
                                {/* <div className="personal-desc-section">
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
                                </div> */}
                                <div className='wrapper'>
                                    <div className="personal-facts">
                                        <h5 className="personal-facts-head">
                                            <div className='personal-facts-icon'><i className='fas fa-pencil-alt' /></div>
                                            {/* <i className='personal-facts-icon fas fa-pencil-alt' /> */}
                                            Current Notes Update
                                        </h5>
                                        <p className="personal-facts-body">
                                            None (currently in work term)
                                            {/* <ul>
                                            <li>MATH 245 (Linear Algebra 2) - Chapter 1</li>
                                        </ul> */}
                                        </p>

                                        <h5 className="personal-facts-head">
                                        <div className='personal-facts-icon'><i className='fas fa-briefcase' /></div>
                                            Current Coop
                                        </h5>
                                        <p className="personal-facts-body">
                                            Data Analyst, eMedAsia @ Kuala Lumpur, Malaysia
                                        </p>

                                        <h5 className="personal-facts-head">
                                        <div className='personal-facts-icon'><i className='fas fa-graduation-cap' /></div>
                                            Current Education
                                        </h5>
                                        <p className="personal-facts-body">
                                            Data Science, Honours, Co-op (2A in Fall 2021)
                                            <br />
                                            University of Waterloo @ Ontario, Canada
                                            <br />
                                            CAV: 94 | MAV: 96
                                        </p>

                                        <h5 className="personal-facts-head">
                                        <div className='personal-facts-icon'><i className='fas fa-code' /></div>
                                            Programming Expertise
                                        </h5>
                                        <p className="personal-facts-body">
                                            HTML, CSS (Sass), JS (Node.js, Express.js, React), Python
                                            (Pandas, Numpy, Scipy, Matplotlib, BeautifulSoup), Java (Joget DX), MySQL,
                                            Racket/Scheme/Lisp, C, Tableau, Metabase
                                        </p>

                                        <h5 className="personal-facts-head">
                                        <div className='personal-facts-icon'><i className='far fa-futbol' /></div>
                                            Hobbies
                                        </h5>
                                        <p className="personal-facts-body">
                                            Mathematics, coding, arranging/composing piano pieces,
                                            rock climbing, basketball, watching videos on YouTube
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        )
    }
}

