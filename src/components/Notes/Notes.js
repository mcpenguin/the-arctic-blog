// React component class for Notes section
import React, { Component } from 'react';

// import Bootstrap components
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// import get course function 
import { getCourse } from './get-course-data';

// import stylesheet
import './Notes.css';

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
                            <a href={this.props.notesLink}>
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

// course notes but for waterloo
// props:
// - course: string in the form of "<subject code> <catalog number>"
// - takenWhen: string corresponding to when course was taken (e.g. "Taken in 1B (Winter 2021) (Online)")
// - notesStatus: how complete notes are, as a string (e.g. "Notes Complete")
// - professors: course professors, as a string (e.g. "Lecturer: Yong Yau")
// - notesLink: (relative) link to notes pdf
// - eventKey: the key corresponding to the subject
class WaterlooCourseNotes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courseData: undefined,
        }
    }

    componentDidMount() {
        const course = this.props.course.split(" ");
        const subjectCode = course[0];
        const catalogNumber = course[1];
        getCourse(subjectCode, catalogNumber).then((result) => {
            this.setState(({ courseData }) => {
                return {
                    courseData: result.data[0],
                }
            })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.course !== this.props.course) {
            const course = this.props.course.split(" ");
            const subjectCode = course[0];
            const catalogNumber = course[1];
            getCourse(subjectCode, catalogNumber).then((result) => {
                this.setState(({ courseData }) => {
                    return {
                        courseData: result.data[0],
                    }
                })
            })
        }
    }

    render() {
        console.log(this.state.courseData);
        if (typeof this.state.courseNotes !== "undefined") {
            return (
                <CourseNotes
                    shortTitle={this.props.course}
                    longTitle={`${this.props.course} (${this.state.courseData.title})`}
                    description={this.state.courseData.description}
                    takenWhen={this.props.takenWhen}
                    notesStatus={this.props.notesStatus}
                    professors={this.props.professors}
                    eventKey={this.props.eventKey}
                />
            )
        }
        else {
            return (<p></p>)
        }
    }
}

export default class Notes extends Component {
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
                        <Col>
                            <Accordion>
                                <CourseNotes 
                                    shortTitle="MATH 146"
                                    longTitle="MATH 146 (Linear Algebra 1 (Advanced))"
                                    description="Hello world!"
                                    eventKey="MATH146"
                                />
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}