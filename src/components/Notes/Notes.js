// React component class for Notes section
import React, { Component } from 'react';

// import Bootstrap components
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// import class data from json file
import classData from './courses.json';
// import class data pdfs (copied from notes-export-file.js)
import Chem from "./notes/AL/Chem.pdf";
import FPM1 from "./notes/AL/FPM1.pdf";
import FPM2 from "./notes/AL/FPM2.pdf";
import FPS from "./notes/AL/FPS.pdf";
import PM3 from "./notes/AL/PM3.pdf";
import M1 from "./notes/AL/M1.pdf";
import MATH145 from "./notes/1A/MATH145.pdf";
import MATH147 from "./notes/1A/MATH147.pdf";
import CS145 from "./notes/1A/CS145.pdf";
import PHIL145 from "./notes/1A/PHIL145.pdf";
import GEOG101 from "./notes/1A/GEOG101.pdf";
import MATH146 from "./notes/1B/MATH146.pdf";
import MATH148 from "./notes/1B/MATH148.pdf";
import PSYCH101 from "./notes/1B/PSYCH101.pdf";

// import stylesheet
import './Notes.css';

// get JS object of pdfs
const pdfs = { Chem, FPM1, FPM2, FPS, PM3, M1, MATH145, MATH147, CS145, PHIL145, GEOG101, MATH146, MATH148, PSYCH101 };

// class for individual course notes
// props: 
// - shortTitle: subject short title (e.g. "MATH 146")
// - longTitle: subject long title (e.g. "MATH 146 (Linear Algebra 1 (Advanced))")
// - description: description for subject
// - takenWhen: string corresponding to when course was taken (e.g. "Taken in 1B (Winter 2021) (Online)")
// - notesStatus: how complete notes are, as a string (e.g. "Notes Complete")
// - professors: course professors, as a string (e.g. "Lecturer: Yong Yau")
// - notesLink: (relative) link to notes pdf
// - eventKey: the key corresponding to the subject
class CourseNotes extends Component {

    render() {
        return (
            <Card className="notes-card">
                <Card.Header>
                    <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey={this.props.eventKey}
                        className="notes-card-link"
                    >
                        {this.props.shortTitle}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={this.props.eventKey}>
                    <Card.Body>
                        <Card.Title className="notes-subject-link">
                            <a href={pdfs[this.props.eventKey]} without rel="noopener noreferrer" target="_blank">
                                {this.props.shortTitle} - {this.props.longTitle}
                            </a>
                        </Card.Title>
                        <p className="notes-taken-when">
                            {this.props.takenWhen}
                            <br />
                            {this.props.notesStatus}
                        </p>
                        <hr />
                        <p className="notes-professors">
                            {this.props.professors}
                        </p>
                        <hr />
                        <p className="notes-description">
                            {this.props.description}
                        </p>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    }
}

export default class Notes extends Component {

    // transforms class data from json into list of Card JSX objects
    transformClassData() {
        const cols = [];
        for (let term in classData) {
            const cards = [];
            const courses = classData[term].courses;
            for (let course in courses) {
                const courseObject = courses[course];
                cards.push(<CourseNotes
                    shortTitle={courseObject['shortTitle']}
                    longTitle={courseObject['longTitle']}
                    description={courseObject['description']}
                    takenWhen={courseObject['takenWhen']}
                    notesStatus={courseObject['notesStatus']}
                    professors={courseObject['professors']}
                    notesLink={`src/notes/${term}/${course}.pdf`}
                    eventKey={course}
                />)
            }
            cols.push(
                <Col lg={4}>
                    <h4 className="notes-subject-heading">{classData[term].title}</h4>
                    <Accordion className="notes-accordion">
                        {cards}
                    </Accordion>
                </Col>)
        }
        return cols;
    }

    render() {
        return (
            <section className="section-notes">
                <Container fluid>
                    <Row>
                        <Col>
                            <h2 id="personal-notes-title">My Personal Notes</h2>
                            <p id="personal-notes-description">
                                Here I post my notes for my university courses, which were handwritten on my iPad.
                                Be wary of downloading/viewing them, as since all my notes are handwritten,
                                the file sizes are substantial. Moreover, try not to print them,
                                since I use many light colours in my notes, and these may not show if you
                                print in grayscale/B&W.
                            </p>
                            <p>
                                Click each course link to see the expanded details of that particular
                                course. Click the top hyperlink to access my notes for that course.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        {this.transformClassData()}
                    </Row>
                </Container>
            </section>
        );
    }
}