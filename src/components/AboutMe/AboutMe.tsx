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
        <a href="#notes"><strong>{metadata.shortTitle}</strong>: {metadata.notesStatus}</a> <br />
      </span>,
    );
  }
  return res;
};

const PersonalFact = (props: personalFactProps) => {
  const { iconName, title, body } = props;
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
              />
              {/* <PersonalFact
                iconName="fas fa-briefcase"
                title="Current Coop"
                body={<>R&D Engineer @ Ansys</>}
              /> */}
              <PersonalFact
                iconName="fas fa-graduation-cap"
                title="Current Education"
                body={(
                  <span>
                    BCS Data Science, Honours, Co-op (3B)
                    <br />
                    University of Waterloo @ Ontario, Canada
                    <br />
                    CAV: 92 | MAV: 93
                  </span>
                )}
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
                    Matplotlib, BeautifulSoup, Selenium, MongoDB
                    <br />
                    <span className="pro-title">Tools:</span> Linux, Google
                    Cloud Platform, Docker, Git, JetBrains Rider, Metabase,
                    Heroku, Tableau, Microsoft Azure
                  </>
                )}
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
              />
            </div>
          </div>
        </div>
      </Row>
    </Container>
  </section>
);

export default AboutMe;
