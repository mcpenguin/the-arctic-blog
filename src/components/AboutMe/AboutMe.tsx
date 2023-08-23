// React component class for About Me section

import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import personalPhoto from "./personal-photo.jpg";

import classData from "../Notes/courses.json";

import "./AboutMe.scss";

const CURRENT_TERM = "3B";

interface personalFactProps {
  iconName: string;
  title: string;
  body: React.ReactNode;
  show: boolean;
}

interface NotesMetadata {
  shortTitle: string;
  longTitle: string;
  takenWhen: string;
  notesStatus: string;
  professors: string;
}

const getNotesStatus = () => {
  const latestCourses: { [key: string]: NotesMetadata } = classData[CURRENT_TERM].courses;
  const res = [];
  for (const metadata of Object.values(latestCourses)) {
    res.push(
      <span>
        <a href="#notes">
          <strong>{metadata.shortTitle}</strong>: {metadata.notesStatus}
        </a>{" "}
        <br />
      </span>,
    );
  }
  return res;
};

const PersonalFact = (props: personalFactProps) => {
  const {
    iconName, title, body, show,
  } = props;
  if (show) {
    return (
      <>
        <div className="personal-facts-head">
          <h5>
            <i className={`personal-facts-icon ${iconName}`} />
          </h5>
          <h5>{title}</h5>
        </div>
        <p className="personal-facts-body">{body}</p>
      </>
    );
  }
  return null;
};

// eslint-disable-next-line no-unused-vars
const AboutMe = (props) => (
  <section className="section-about-me" id="about-me">
    <Container id="container-about-me">
      <Row>
        <Col className="w-50">
          <h3 id="about-me-title">Quick Facts</h3>
        </Col>
      </Row>
      <Row className="align-items-center">
        <div className="personal-photo">
          <img id="personal-photo" src={personalPhoto} alt="personal" />
        </div>
        <div className="wrapper">
          <div className="personal-facts">
            <div className="first">
              <PersonalFact
                iconName="fas fa-pencil-alt"
                // icon={NotesIcon}
                title="Current Notes Update"
                body={getNotesStatus()}
                show={false}
              />
              <PersonalFact
                iconName="fas fa-briefcase"
                title="Current Coop"
                body={<>Software/Data Engineer @ Miovision</>}
                show
              />
              <PersonalFact
                iconName="fas fa-graduation-cap"
                title="Current Education"
                body={(
                  <span>
                    BCS Computer Science (Data Science), Honours, Co-op (
                    {CURRENT_TERM})
                    <br />
                    University of Waterloo @ Ontario, Canada
                    <br />
                    <em>
                      Recipient of $37,000+ worth of academic scholarships
                    </em>
                    <br />
                    <strong>CAV: 92 | GPA: 3.9/4.0</strong>
                  </span>
                )}
                show
              />
            </div>
            <div className="second">
              <PersonalFact
                iconName="fas fa-code"
                title="Programming Expertise"
                body={(
                  <>
                    <span className="pro-title">Languages:</span>{" "}
                    JavaScript/TypeScript, SQL (MySQL, PostgreSQL, SQLite),
                    Python, C/C++, C#/.NET, Java, Bash, HTML, CSS (Sass/SCSS)
                    <br />
                    <span className="pro-title">Frameworks:</span> Node.js,
                    Express.js, React, Angular, Next.js, Pandas, NumPy,
                    Matplotlib, SciKitLearn, PyTorch, BeautifulSoup, Selenium,
                    MongoDB
                    <br />
                    <span className="pro-title">Tools:</span> Linux, Google
                    Cloud Platform, Docker, Git, JetBrains Rider, Metabase,
                    Heroku, Tableau, Microsoft Azure
                  </>
                )}
                show
              />
              <PersonalFact
                iconName="far fa-futbol"
                title="Hobbies"
                body={(
                  <span>
                    Mathematics, coding, arranging/composing piano pieces, rock
                    climbing, anime
                  </span>
                )}
                show
              />
            </div>
          </div>
        </div>
      </Row>
    </Container>
  </section>
);

export default AboutMe;
