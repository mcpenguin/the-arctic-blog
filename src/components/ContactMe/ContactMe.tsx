// React component class for ContactMe section

// import stylesheet
import './ContactMe.scss';

interface ContactMePageProps {
    class: string,
    title: string,
    link: string,
    logo: string
}

// props: class, title, link, logo
const ContactMePage = (props: ContactMePageProps) => {
    return (
            <a href={props.link}>
                <div
                    className={`icon ${props.class}`}
                >
                    <div className="tooltip">{props.title}</div>
                    <span>
                        <i className={props.logo}></i>
                    </span>
                </div>
            </a>
    )
}

const ContactMe = () => {
    return (
        <section className="section-contact-me" id="contact-me">
            <footer>
                <h2 id="contact-me-heading">Contact Me</h2>
                <div className="contact-me-details wrapper">
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

export default ContactMe;
