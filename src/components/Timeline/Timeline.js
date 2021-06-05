// React component class for Timeline section
import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import material-ui icons
import WorkIcon from '@material-ui/icons/WorkRounded';
import SchoolIcon from '@material-ui/icons/School';
import AwardIcon from '@material-ui/icons/Star';
import StarIcon from '@material-ui/icons/Star';
import ActivityIcon from '@material-ui/icons/LocalActivity';

// vertical timeline cannot be wrapped in section or container

// import stylesheet
import './Timeline.css';

// generic vertical timeline element class
/* variables:
- type = "work" | "school" | "award" | "activity";
- date // date corresponding to event
- heading // string
- subheading // string
- body // html element
*/
class TimelineElement extends Component {
    // configurations for icon depending on type
    options = {
        work: {
            backgroundColor: "#781f6b", // purple
            icon: <WorkIcon />
        },
        school: {
            backgroundColor: "#ad1074", // magenta
            icon: <SchoolIcon />
        },
        award: {
            backgroundColor: "#400e96", // blue-purple
            icon: <StarIcon />
        },
        activity: {
            backgroundColor: "#0757b3", // navy blue
            icon: <ActivityIcon />
        }
    };

    render() {
        const nodeType = this.props.type;
        return (
            <VerticalTimelineElement
                className={`vertical-timeline-element--${nodeType}`}
                contentStyle={{
                    "background": "#f5f5f5",
                    "border-top": `3px solid ${this.options[nodeType].backgroundColor}`,
                    "color": "#000031",
                }}
                contentArrowStyle={{
                    borderRight: `10px solid ${this.options[nodeType].backgroundColor}`
                }}
                date={this.props.date}
                iconStyle={{
                    background: this.options[nodeType].backgroundColor,
                    color: "#f5f5f5",
                }}
                icon={
                    {
                        "work": <WorkIcon />,
                        "school": <SchoolIcon />,
                        "award": <AwardIcon />,
                        "activity": <ActivityIcon />,
                    }[this.props.type]
                }
            >
                <h3 className="vertical-timeline-element-heading">{this.props.heading}</h3>
                <h4 className="vertical-timeline-element-subheading">{this.props.subheading}</h4>
                <div className="vertical-timeline-element-body">{this.props.body}</div>
            </VerticalTimelineElement >
        )
    }
}

export default class Timeline extends Component {
    render() {
        return (
            <section className="section-timeline">
                <h2 id="timeline-header">Timeline</h2>
                <VerticalTimeline>
                    <TimelineElement
                        date="May 2021 - Aug 2021"
                        type="work"
                        heading="Data Analyst"
                        subheading="eMedAsia @ Kuala Lumpur, Malaysia"
                        body={<></>}
                    />
                    <TimelineElement
                        date="May 2021 - Aug 2021"
                        type="activity"
                        heading="MATHSOC Cartoons Writer"
                        subheading="MATHSOC Cartoons @ University of Waterloo"
                        body={<>
                            <p>Responsibilities:</p>
                            <ul>
                                <li>Create storyboards for original mathematics-based cartoons</li>
                                <li>Liaise with team to review each other's work and provide feedback</li>
                            </ul>
                            <p>Comics drawn:</p>
                            <ul>
                                <li>Comic 21 - The Riemann Integral (not published yet)</li>
                            </ul>
                        </>}
                    />
                    <TimelineElement
                        date="Apr 2021"
                        type="award"
                        heading="Top 300, Putnam Mathematics Competition"
                        subheading=""
                        body={<></>}
                    />
                    <TimelineElement
                        date="Apr 2021"
                        type="school"
                        heading="Transferred to BMath Data Science"
                        subheading="University of Waterloo"
                        body={<></>}
                    />
                    <TimelineElement
                        date="Jan 2021 - Apr 2021"
                        type="school"
                        heading="1B - Honours Mathematics"
                        subheading="University of Waterloo"
                        body={<>
                            <h6>CGPA: 96</h6>
                            <p>Courses Taken:</p>
                            <ul>
                                <li>MATH 146 - Linear Algebra 1 (Advanced)</li>
                                <li>MATH 148 - Calculus 2 (Advanced)</li>
                                <li>CS 145 - Elementary Algorithm Design and Data Abstraction (Advanced)</li>
                                <li>PSYCH 101 - Introductory Psychology</li>
                                <li>SPCOM 223 - Public Speaking</li>
                            </ul>
                        </>}
                    />
                    <TimelineElement
                        date="Sep 2020 - Dec 2020"
                        type="school"
                        heading="1A - Honours Mathematics"
                        subheading="University of Waterloo"
                        body={<>
                            <h6>CGPA: 93</h6>
                            <p>Recipient of the Faculty of Mathematics Global Scholarship</p>
                            <ul>
                                <li>Only 10 scholarships given out per year</li>
                                <li>Value of CAD$20,000</li>
                            </ul>
                            <p>Courses Taken:</p>
                            <ul>
                                <li>MATH 146 - Linear Algebra 1 (Advanced)</li>
                                <li>MATH 148 - Calculus 2 (Advanced)</li>
                                <li>CS 145 - Elementary Algorithm Design and Data Abstraction (Advanced)</li>
                                <li>PSYCH 101 - Introductory Psychology</li>
                                <li>SPCOM 223 - Public Speaking</li>
                            </ul>
                        </>}
                    />
                    <TimelineElement
                        date="Nov 2019 - June 2020"
                        type="school"
                        heading="A2"
                        subheading="Sunway College"
                        body={<>
                            <p>Subjects Taken:</p>
                            <ul>
                                <li>Chemistry (9701) - A*</li>
                                <li>Physics (9702) - A*</li>
                                <li>Mathematics (9709) - A*</li>
                                <li>Further Mathematics (9231) - A*</li>
                            </ul>
                        </>}
                    />
                    <TimelineElement
                        date="Sept 2018 - Nov 2019"
                        type="school"
                        heading="AS"
                        subheading="Sunway College"
                        body={<>
                            <p>Subjects Taken:</p>
                            <ul>
                                <li>Chemistry (9701) - A</li>
                                <li>Physics (9702) - A</li>
                                <li>Mathematics (9709) - A</li>
                            </ul>
                        </>}
                    />
                    <TimelineElement
                        date="Oct 2019"
                        type="award"
                        heading="Grade 6 in Trombone"
                        subheading="Trinity College London"
                        body={<></>}
                    />
                    <TimelineElement
                        date="June 2019 - Dec 2019"
                        type="activity"
                        heading="Mathematics Tutor"
                        subheading="Dignity for Children Foundation"
                        body={<></>}
                    />
                    <TimelineElement
                        date="Apr 2019 - Jan 2020"
                        type="activity"
                        heading="Piano Tutor"
                        subheading="Shelter Home for Children"
                        body={<></>}
                    />
                    <TimelineElement
                        date="Jan 2019 - Jan 2020"
                        type="activity"
                        heading="Curator"
                        subheading="TEDxSunwayUniversity"
                        body={<>
                            <p>Responsibilities:</p>
                            <ul>
                                <li>Finding the speakers, and working with them on the content/flow/delivery of their talks</li>
                                <li>Constructing the themes for the TEDx events</li>
                                <li>Writing descriptions for the speakers and their topic(s)</li>
                            </ul>
                        </>}
                    />
                    <TimelineElement
                        date="Dec 2018"
                        type="award"
                        heading="ATCL Diploma in Piano Recital"
                        subheading="Trinity College London"
                        body={<></>}
                    />
                    <TimelineElement
                        date="Nov 2018 - present"
                        type="activity"
                        heading="Trombonist"
                        subheading="Sunway University Ensemble"
                        body={<></>}
                    />
                </VerticalTimeline>
            </section>
        );
    }
}