// React component class for ContactMe section

// import stylesheet
import './ContactMe.scss';

interface ContactMePageProps {
  icon: string;
  title: string;
  link: string;
  logo: string;
}

// props: icon, title, link, logo
const ContactMePage = (props: ContactMePageProps) => {
  const {
    link, icon, title, logo,
  } = props;

  return (
    <a href={link}>
      <div className={`icon ${icon}`}>
        <div className="tooltip">{title}</div>
        <span>
          <i className={logo} />
        </span>
      </div>
    </a>
  );
};

const ContactMe = () => (
  <section className="section-contact-me" id="contact-me">
    <footer>
      <h2 id="contact-me-heading">Contact Me</h2>
      <div className="contact-me-details wrapper">
        <ContactMePage
          icon="email"
          title="Email"
          link="mailto:marcus.chanwc@gmail.com"
          logo="fas fa-envelope"
        />
        <ContactMePage
          icon="linkedin"
          title="LinkedIn"
          link="https://www.linkedin.com/in/marcus-chanwc/"
          logo="fab fa-linkedin"
        />
        <ContactMePage
          icon="kaggle"
          title="Kaggle"
          link="https://www.kaggle.com/mcpenguin"
          logo="fab fa-kaggle"
        />
        <ContactMePage
          icon="github"
          title="GitHub"
          link="https://github.com/mcpenguin"
          logo="fab fa-github"
        />
        <ContactMePage
          icon="youtube"
          title="YouTube"
          link="https://www.youtube.com/channel/UCIAQzTXPVtht2H0hoz8NNAg"
          logo="fab fa-youtube"
        />
      </div>
    </footer>
  </section>
);

export default ContactMe;
