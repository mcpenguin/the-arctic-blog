// React component class for About Me section

import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import personal_photo from './personal-photo.jpg';

import './AboutMe.css';

export default class AboutMe extends Component {
    render() {
        return (
            <section className="section-about-me">
                <Container id="container-about-me">
                    <Row>
                        <Col>
                            <h2 id="about-me-title">About Me</h2>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col lg={7}>
                            <img
                                id="personal-photo"
                                src={personal_photo}
                                alt="personal photo goes here"
                            />
                        </Col>
                        <Col lg={5} className="personal-desc-section">
                            <p id="personal-description">
                                Welcome to the Arctic Blog!
                                I'm Marcus, a current Mathematics student at the University of waterloo
                                in Ontario, Canada, where I am currently in my 1B term.
                                I have decent experience with programming, most notably with the
                                languages of Python and Java, and have utilised said experience
                                to build a couple of personal projects.
                                In addition, I have used my iPad to construct handwritten (and in my opinion,
                                also aesthetically pleasing) notes that should help you learn and
                                revise for the courses quicker.
                                Lastly, apart from programming and mathematics, I have side interests in
                                music, rock climbing and basketball, and occasionally I might play
                                Minecraft as well.
                        </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

