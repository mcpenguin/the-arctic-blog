// React component class for Notes section
import React from 'react';

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

// import stylesheet
import './Notes.scss';

interface CourseNotesProps {
    shortTitle: string,
    longTitle: string,
    description: string,
    takenWhen: string,
    notesStatus: string,
    professors: string,
    notesLink: string,
    eventKey: string
}

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
function CourseNotes(props: CourseNotesProps) {
    return (
        <Card className="notes-card">
            <Card.Header>
                <Accordion.Toggle
                    as={Button}
                    variant="link"
                    eventKey={props.eventKey}
                    className="notes-card-link"
                >
                    {props.shortTitle}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={props.eventKey}>
                <Card.Body className="notes-card-body">
                    <Card.Title className="notes-subject-link">
                        <a href={props.notesLink} target="_blank" rel="noreferrer">
                            {props.shortTitle} - {props.longTitle}
                        </a>
                    </Card.Title>
                    <p className="notes-taken-when">
                        {props.takenWhen}
                        <br />
                        {props.notesStatus}
                    </p>
                    <hr />
                    <p className="notes-professors">
                        {props.professors}
                    </p>
                    <hr />
                    <p className="notes-description">
                        {props.description}
                    </p>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )

}

export default function Notes() {

    // transforms class data from json into list of Card JSX objects
    function transformClassData() {
        const cols = [];
        for (let term in classData) {
            const cards = [];
            const courses = classData[term].courses;
            for (let course in courses) {
                const courseObject = courses[course];
                cards.push(
                    <CourseNotes
                        shortTitle={courseObject['shortTitle']}
                        longTitle={courseObject['longTitle']}
                        description={courseObject['description']}
                        takenWhen={courseObject['takenWhen']}
                        notesStatus={courseObject['notesStatus']}
                        professors={courseObject['professors']}
                        notesLink={`/notes/${course}.pdf`}
                        eventKey={course}
                    />
                )
            }
            cols.push(
                <Col lg={4}>
                    {/* <Fade top cascade> */}
                    <h5 className="notes-subject-heading">{classData[term].title}</h5>
                    <Accordion className="notes-accordion">
                        {cards}
                    </Accordion>
                    {/* </Fade> */}
                </Col>)
        }
        return cols;
    }

    return (
        <section className="section-notes-page" id="notes">
            <Container fluid>
                <Row>
                    <Col>
                        <div className='text'>
                            {/* <Fade top> */}
                            <h3 id="personal-notes-title">My Personal Notes</h3>
                            {/* </Fade> */}
                            {/* <Fade top> */}
                            <p>
                                Here I post my notes for both my university and high school courses,
                                which were handwritten on my iPad using the app GoodNotes 5.
                                These are adapted from the original professor's / lecturer's notes. I
                                get each professor's permission prior to posting my notes for the course on my website.
                            </p>
                            <p>
                                The course notes are designed to be Ctrl+F friendly. For the later notes (1B onwards),
                                the "key" for each theorem and statement obtained from the original professor's lecture notes are
                                highlighted in each heading (e.g. T3.1 = Theorem 3.1), making it easy for revision or reference purposes.
                                A key is located at the start of each notebook.
                            </p>
                            <p>
                                Click each course link to see the expanded details of that particular
                                course, including the full course name, the progress of the notes, the professor
                                I took the course with and a brief description of the course.
                                You can then click the blue hyperlink to download the pdf of my notes for that course.
                            </p>
                        </div>
                        {/* </Fade> */}
                    </Col>
                </Row>
                <Row>
                    {transformClassData()}
                </Row>
            </Container>
        </section>
    );
    
}
