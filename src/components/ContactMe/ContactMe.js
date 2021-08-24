// React component class for ContactMe section
import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';

// import stylesheet
import './ContactMe.scss';

// props: class, title, link, logo
class ContactMePage extends Component {
    render() {
        return (
            // <Fade bottom>
                <a href={this.props.link}>
                    <div
                        class={`icon ${this.props.class}`}
                    >
                        <div class="tooltip">{this.props.title}</div>
                        <span>
                            <i class={this.props.logo}></i>
                        </span>
                    </div>
                </a>
            // </Fade>
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
                        <ContactMePage
                            class="email"
                            title="Email"
                            link="mailto:marcus.chanwc@gmail.com"
                            logo="fas fa-envelope"
                        />
                        <ContactMePage
                            class="instagram"
                            title="Instagram"
                            link="https://www.instagram.com/mcpenquin"
                            logo="fab fa-instagram"
                        />
                        <ContactMePage
                            class="linkedin"
                            title="LinkedIn"
                            link="https://www.linkedin.com/in/marcus-chanwc/"
                            logo="fab fa-linkedin"
                        />
                        <ContactMePage
                            class="github"
                            title="GitHub"
                            link="https://github.com/mcpenguin"
                            logo="fab fa-github"
                        />
                        <ContactMePage
                            class="youtube"
                            title="YouTube"
                            link="https://www.youtube.com/channel/UCIAQzTXPVtht2H0hoz8NNAg"
                            logo="fab fa-youtube"
                        />
                    </div>
                </footer>
            </section>
        );
    }
}