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
                    <h2 id="contact-me-heading">Contact Me</h2>
                    <div fluid className="contact-me-details wrapper">
                    <div class="icon email">
                            <div class="tooltip">Email</div>
                            <span><i class="fas fa-envelope"></i></span>
                        </div>
                        <div class="icon facebook">
                            <div class="tooltip">Facebook</div>
                            <span><i class="fab fa-facebook-f"></i></span>
                        </div>
                        <div class="icon instagram">
                            <div class="tooltip">Instagram</div>
                            <span><i class="fab fa-instagram"></i></span>
                        </div>
                        <div class="icon linkedin">
                            <div class="tooltip">LinkedIn</div>
                            <span><i class="fab fa-linkedin"></i></span>
                        </div>
                        <div class="icon github">
                            <div class="tooltip">Github</div>
                            <span><i class="fab fa-github"></i></span>
                        </div>
                        <div class="icon youtube">
                            <div class="tooltip">Youtube</div>
                            <span><i class="fab fa-youtube"></i></span>
                        </div>
                        {/* <Row>
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
                        </Row> */}
                    </div>
                </footer>
            </section>
        );
    }
}