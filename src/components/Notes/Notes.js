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
// import class data pdfs
import pdfs from './notes-export-file';

// import stylesheet
import './Notes.css';

console.log(classData);

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
            <Card>
                <Card.Header>
                    <Accordion.Toggle
                        as={Button}
                        variant="link"
                        eventKey={this.props.eventKey}
                    >
                        {this.props.shortTitle}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={this.props.eventKey}>
                    <Card.Body>
                        <h6>
                            <a href={pdfs[this.props.eventKey]}>
                                {this.props.longTitle}
                            </a>
                        </h6>
                        <p>
                            {this.props.takenWhen}
                            <br />
                            {this.props.notesStatus}
                        </p>
                        <hr />
                        <p>
                            {this.props.professors}
                        </p>
                        <hr />
                        <p>
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
            console.log(term);
            const cards = [];
            for (let course in classData[term]) {
                console.log(course);
                cards.push(<CourseNotes 
                    shortTitle={classData[term][course]['shortTitle']}
                    longTitle={classData[term][course]['longTitle']}
                    description={classData[term][course]['description']}
                    takenWhen={classData[term][course]['takenWhen']}
                    notesStatus={classData[term][course]['notesStatus']}
                    professors={classData[term][course]['professors']}
                    notesLink={`src/notes/${term}/${course}.pdf`}
                    eventKey={course}
                />)
            }
            cols.push(<Col><Accordion>{cards}</Accordion></Col>)
        }
        return cols;
    }

    render() {
        return (
            <section className="section-notes">
                <Container>
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