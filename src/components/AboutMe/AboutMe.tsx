// React component class for About Me section

import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import personalPhoto from './personal-photo.jpg';

import './AboutMe.scss';

interface personalFactProps {
  iconName: string;
  title: string;
  body: React.ReactNode;
}

function PersonalFact(props: personalFactProps) {
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
}

// eslint-disable-next-line no-unused-vars
function AboutMe(props) {
  return (
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
                {/* <PersonalFact
                                    iconName='fas fa-pencil-alt'
                                    // icon={NotesIcon}
                                    title='Current Notes Update'
                                    body='None'
                                /> */}
                <PersonalFact
                  iconName="fas fa-briefcase"
                  title="Current Coop"
                  body={<>Software Developer @ Geotab</>}
                />
                <PersonalFact
                  iconName="fas fa-graduation-cap"
                  title="Current Education"
                  body={(
                    <>
                      BCS Data Science, Honours, Co-op (2B)
                      <br />
                      University of Waterloo @ Ontario, Canada
                      <br />
                      CAV: 93 | MAV: 94
                    </>
                  )}
                />
              </div>
              <div className="second">
                <PersonalFact
                  iconName="fas fa-code"
                  title="Programming Expertise"
                  body={(
                    <>
                      <span className="pro-title">Languages:</span>
                      {' '}
                      HTML, CSS
                      (Sass), JavaScript/TypeScript, SQL (MySQL, PostgreSQL,
                      SQLite), Python, Java (Joget DX), Bash, C/C++, C#/.NET
                      <br />
                      <span className="pro-title">Frameworks:</span>
                      {' '}
                      Node.js,
                      Express.js, React, Pandas, NumPy, Matplotlib, Jupyter
                      Notebook, MongoDB, Tableau, Metabase, Git, Heroku
                    </>
                  )}
                />
                <PersonalFact
                  iconName="far fa-futbol"
                  title="Hobbies"
                  body={(
                    <>
                      Mathematics, coding, arranging/composing piano pieces,
                      rock climbing, anime
                    </>
                  )}
                />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
