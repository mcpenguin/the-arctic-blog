// React component class for ContactMe section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import stylesheet
import './ContactMe.css';

class ContactMeBox extends Component {
    render() {
        return (
            <Col md={this.props.width} className="contact-me-box">
                <p>
                    <i class={`contact-me-logo ${this.props.logo}`}></i>
                    <a class="contact-me-link" href={this.props.link}>{this.props.name}</a>
                </p>
            </Col>
        )
    }
}

export default class ContactMe extends Component {
    render() {
        return (
            <section className="section-contact-me" id="contact-me">
                <footer>
                    <h2>Contact Me</h2>
                    <Container fluid className="contact-me-details">
                        <Row>
                            <ContactMeBox
                                name="Email"
                                link="mailto:marcus.chanwc@gmail.com"
                                logo="fas fa-envelope"
                                width={3}
                            />
                            <ContactMeBox
                                name="Instagram"
                                link="https://www.instagram.com/mcpenquin/?hl=en"
                                logo="fab fa-instagram"
                                width={3}
                            />
                            <ContactMeBox
                                name="LinkedIn"
                                link="https://www.linkedin.com/in/marcus-chanwc/"
                                logo="fab fa-linkedin"
                                width={3}
                            />
                            <ContactMeBox
                                name="Github"
                                link="https://github.com/mcpenguin"
                                logo="fab fa-github"
                                width={3}
                            />
                        </Row>
                    </Container>
                </footer>
            </section>
        );
    }
}