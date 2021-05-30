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
            <section className="section-contact-me">
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
                    {/* <div class="contact-me-details row">
                        <div class="contact-me-box col-md-2">
                            <p>
                                <i class="contact-me-logo fab fa-instagram"></i>
                                <a class="contact-me-link" href="https://www.instagram.com/mcpenquin/?hl=en">Instagram</a>
                            </p>
                        </div>
                        <div class="contact-me-box col-md-4">
                            <p>
                                <i class="contact-me-logo fas fa-envelope"></i>
                                <a class="contact-me-link" href="mailto:marcus.chanwc@gmail.com">marcus.chanwc@gmail.com</a>
                            </p>
                        </div>
                        <div class="contact-me-box col-md-2">
                            <p>
                                <i class="contact-me-logo fab fa-linkedin"></i>
                                <a class="contact-me-link" href="https://www.linkedin.com/in/marcus-chanwc/">LinkedIn</a>
                            </p>
                        </div>
                        <div class="contact-me-box col-md-2">
                            <p>
                                <i class="contact-me-logo fab fa-github"></i>
                                <a class="contact-me-link" href="https://github.com/mcpenguin">GitHub</a>
                            </p>
                        </div>
                        <div class="contact-me-box col-md-2">
                            <p>
                                <i class="contact-me-logo fab fa-youtube"></i>
                                <a class="contact-me-link"
                                    href="https://www.youtube.com/channel/UCIAQzTXPVtht2H0hoz8NNAg">YouTube</a>
                            </p>
                        </div>
                    </div> */}
                </footer>
            </section>
        );
    }
}