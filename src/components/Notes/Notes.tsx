/* eslint-disable react/jsx-one-expression-per-line */
// React component class for Notes section
import React from "react";

// import Bootstrap components
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// import class data from json file
import classData from "./courses.json";
// import class data pdfs (copied from notes-export-file.js)

// import stylesheet
import "./Notes.scss";

export interface CourseNotesProps {
  shortTitle: string;
  longTitle: string;
  takenWhen: string;
  notesStatus: string;
  professors: string;
  notesLink: string;
  eventKey: string;
}

// class for individual course notes
// props:
// - shortTitle: subject short title (e.g. "MATH 146")
// - longTitle: subject long title (e.g. "MATH 146 (Linear Algebra 1 (Advanced))")
// - description: description for subject
// - takenWhen: string corresponding to when course was taken (e.g.
//  "Taken in 1B (Winter 2021) (Online)")
// - notesStatus: how complete notes are, as a string (e.g. "Notes Complete")
// - professors: course professors, as a string (e.g. "Lecturer: Yong Yau")
// - notesLink: (relative) link to notes pdf
// - eventKey: the key corresponding to the subject
const CourseNotes = (props: CourseNotesProps) => {
  const {
    shortTitle,
    longTitle,
    takenWhen,
    notesStatus,
    professors,
    notesLink,
    eventKey,
  } = props;
  return (
    <Card className={`notes-card ${eventKey}`}>
      <Card.Header>
        <Accordion.Toggle
          as={Button}
          variant="link"
          eventKey={eventKey}
          className="notes-card-link"
        >
          {shortTitle}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={eventKey}>
        <Card.Body className="notes-card-body">
          <Card.Title className="notes-subject-link">
            <a href={notesLink} target="_blank" rel="noreferrer">
              {shortTitle} - {longTitle}
            </a>
          </Card.Title>
          <p className="notes-taken-when">
            {takenWhen}
            <br />
            {notesStatus}
          </p>
          <hr />
          <p className="notes-professors">{professors}</p>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

const transformClassData = () => {
  const cols = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const term in classData) {
    const cards = [];
    const { courses } = classData[term];
    for (const course in courses) {
      const courseObject = courses[course];
      cards.push(
        <CourseNotes
          shortTitle={courseObject.shortTitle}
          longTitle={courseObject.longTitle}
          takenWhen={courseObject.takenWhen}
          notesStatus={courseObject.notesStatus}
          professors={courseObject.professors}
          notesLink={`/notes/${course}.pdf`}
          eventKey={course}
        />,
      );
    }
    cols.push(
      <Col lg={4}>
        {/* <Fade top cascade> */}
        <h5 className="notes-subject-heading">{classData[term].title}</h5>
        <Accordion className="notes-accordion">{cards}</Accordion>
        {/* </Fade> */}
      </Col>,
    );
  }
  return cols;
};

const Notes = () => (
  <section className="section-notes-page" id="notes">
    <Container fluid className="notes-container">
      <Row>
        <Col className="text">
          <h3 id="personal-notes-title">My Personal Notes</h3>
          <p>
            Here I post my notes for both my university and high school
            courses, which were handwritten on my iPad using the app GoodNotes
            5. These are adapted from the original professor's / lecturer's
            notes, and will often contain diagrams and screenshots from the
            reference materials. I get each professor's permission prior to posting my notes
            for the course on my website, and credit them at the front of the notes.
            Unfortunately, my notes from 4A and 4B could not be publicly posted due to
            numerous IP restrictions (e.g. diagrams from third-party textbooks).
          </p>
        </Col>
      </Row>
      <Row>{transformClassData()}</Row>
    </Container>
  </section>
);

export default Notes;
