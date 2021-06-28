// React component class for Timeline section
import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Slide from 'react-reveal/Slide'
import 'react-vertical-timeline-component/style.min.css';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';

// import material-ui icons
import WorkIcon from '@material-ui/icons/WorkRounded';
import SchoolIcon from '@material-ui/icons/School';
import AwardIcon from '@material-ui/icons/Star';
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
            icon: <AwardIcon />
        },
        activity: {
            backgroundColor: "#0757b3", // navy blue
            icon: <ActivityIcon />
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            showMore: false, // whether body text is shown
        }
    }

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
                onTimelineElementClick={() => {
                    this.setState({ showMore: !this.state.showMore });
                }}
            >
                <h3 className="vertical-timeline-element-heading">{this.props.heading}</h3>
                <h4 className="vertical-timeline-element-subheading">{this.props.subheading}</h4>
                {/* show collapsible content if body is not empty */}
                {
                    !!(this.props.body)
                        ? <>
                            <Collapse in={this.state.showMore}>
                                <div className="vertical-timeline-element-body">
                                    {this.props.body}
                                </div>
                            </Collapse>
                            <div className="vertical-timeline-element-arrow">
                                {/* animate arrow when clicked */}
                                <i
                                    className="fas fa-chevron-down fa-xs"
                                    style={{
                                        "transform": this.state.showMore ? "rotate(180deg)" : "",
                                        "transition": "transform 0.4s ease", // smooth animation
                                    }}
                                >
                                </i>
                            </div>
                        </>
                        : <></>
                }
            </VerticalTimelineElement >
        )
    }
}

export default class Timeline extends Component {
    render() {
        return (
            <section className="section-timeline" id="timeline">
                <h2 id="timeline-header">Timeline</h2>
                <VerticalTimeline>
                    {/* <TimelineElement
                        date="Sep 2021 - Dec 2021"
                        type="school"
                        heading="2A - Data Science"
                        subheading="University of Waterloo"
                        body={<>
                            <p>Planned Courses:</p>
                            <ul>
                                <li>MATH 245 - Linear Algebra 2 (Advanced)</li>
                                <li>MATH 247 - Calculus 3 (Advanced)</li>
                                <li>MATH 249 - Introduction to Combinatorics (Advanced)</li>
                                <li>CS 245 - Logic and Computation</li>
                                <li>CS 246e - Object-Oriented Programming (Enriched)</li>
                                <li>STAT 240 - Probability (Advanced)</li>
                            </ul>
                        </>}
                    /> */}
                    <TimelineElement
                        date="May 2021 - Aug 2021"
                        type="work"
                        heading="Data Analyst"
                        subheading="eMedAsia @ Kuala Lumpur, Malaysia"
                    />
                    <TimelineElement
                        date="May 2021 - Aug 2021"
                        type="activity"
                        heading="Comic Writer"
                        subheading="MATHSOC Cartoons @ University of Waterloo"
                        body={<>
                            <h6><i>
                                MathSoc Cartoons is a student-run comic series explaining undergraduate 
                                math and computer science concepts. All of our comics can be 
                                found on our <a href="https://mathsoc.uwaterloo.ca/cartoons/">website</a>, as 
                                well as on our <a href="https://www.instagram.com/mathsoccartoons/">Instagram</a> and <a href="http://www.facebook.com/mathsoccartoons">Facebook</a> pages.
                            </i></h6>
                            <h6>Responsibilities:</h6>
                            <ul>
                                <li>Create storyboards for original mathematics-based cartoons</li>
                                <li>Liaise with team to review each other's work and provide feedback</li>
                            </ul>
                            <h6>Comics drawn:</h6>
                            <ul>
                                <li>
                                    <a href="https://www.instagram.com/p/CQWYix6gv5n/">Comic 21 - The Riemann Integral</a>
                                </li>
                            </ul>
                        </>}
                    />
                    <TimelineElement
                        date="Apr 2021"
                        type="award"
                        heading="Top 20% (20/120)"
                        subheading="81st Putnam Mathematical Competition"
                    />
                    <TimelineElement
                        date="Apr 2021"
                        type="school"
                        heading="Transferred to BMath Data Science"
                        subheading="University of Waterloo"
                        body={
                            <h6>
                                Only 16 out of 500+ applicants are accepted each term
                            </h6>
                        }
    
                    />
                    <TimelineElement
                        date="Jan 2021 - Apr 2021"
                        type="school"
                        heading="1B - Honours Mathematics"
                        subheading="University of Waterloo"
                        body={<>
                            <h6><b>CGPA: 96</b></h6>
                            <p>Courses Taken:</p>
                            <ul>
                                <li>MATH 146 - Linear Algebra 1 (Advanced)</li>
                                <li>MATH 148 - Calculus 2 (Advanced)</li>
                                <li>CS 146 - Elementary Algorithm Design and Data Abstraction (Advanced)</li>
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
                            <h6><b>CGPA: 93</b></h6>
                            <h6>Recipient of the Faculty of Mathematics Global Scholarship</h6>
                            <ul>
                                <li>Only 10 scholarships given out per year</li>
                                <li>Value of CAD$20,000</li>
                            </ul>
                            <h6>Courses Taken:</h6>
                            <ul>
                                <li>MATH 145 - Algebra (Advanced)</li>
                                <li>MATH 147 - Calculus 1 (Advanced)</li>
                                <li>CS 145 - Introduction to Functional Programming (Advanced)</li>
                                <li>PHIL 145 - Critical Thinking</li>
                                <li>GEOG 101 - Human Geographies</li>
                            </ul>
                        </>}
                    />
                    <TimelineElement
                        date="Nov 2019"
                        type="award"
                        heading="Top 1% (Honour Roll - Group IV)"
                        subheading="Canadian Senior Mathematics Competition (CSMC)"
                        body={<>
                            <h6>
                                Ranked 200th out of 20000 participants, and scored
                                the second highest score in Malaysia
                            </h6>
                        </>}
                    />
                    <TimelineElement
                        date="Nov 2019 - Jun 2020"
                        type="school"
                        heading="A2"
                        subheading="Sunway College"
                        body={<>
                            <h6>Subjects Taken:</h6>
                            <ul>
                                <li>Chemistry (9701) - A*</li>
                                <li>Physics (9702) - A*</li>
                                <li>Mathematics (9709) - A*</li>
                                <li>Further Mathematics (9231) - A*</li>
                            </ul>
                        </>}
                    />
                    <TimelineElement
                        date="Oct 2019"
                        type="award"
                        heading="Perfect Score (600/600)"
                        subheading="Malaysian Computing Challenge (MCC)"
                    />
                    <TimelineElement
                        date="Oct 2019"
                        type="award"
                        heading="Grade 6 in Trombone"
                        subheading="Trinity College London"
                    />
                    <TimelineElement
                        date="Jul 2019"
                        type="award"
                        heading="Distinction"
                        subheading="Kangaroo Mathematics Competition Second Round (KMC2) - Senior Division"
                    />
                    <TimelineElement
                        date="Jun 2019"
                        type="award"
                        heading="Top 8% (73/100)"
                        subheading="Mathematics Admission Test (MAT)"
                    />
                    <TimelineElement
                        date="Jun 2019 - Dec 2019"
                        type="activity"
                        heading="Mathematics Tutor"
                        subheading="Dignity for Children Foundation"
                        body={<>
                            <h6>
                                I taught a class of Grade 5 students, many of whom were struggling with their studies.
                                Hence, I employed a cornucopia of nascent and original methods,
                                catering my teaching style to each student individually to maximize their
                                learning potential and enjoyment.
                            </h6>
                        </>}
                    />
                    <TimelineElement
                        date="Apr 2019 - Jan 2020"
                        type="activity"
                        heading="Piano Tutor"
                        subheading="Shelter Home for Children"
                        body={<>
                            <h6>
                                I taught 2 teenage boys (15 and 13 years old). Every week, I would give them new sheet music
                                containing new music concepts and, or continue off a previous piece we had already started.
                            </h6>
                        </>}
                    />
                    <TimelineElement
                        date="Mar 2019"
                        type="award"
                        heading="Gold Medallist (Top 1.3%)"
                        subheading="Kangaroo Mathematics Competition (KMC) - Senior Division"
                    />
                    <TimelineElement
                        date="Jan 2019 - Jan 2020"
                        type="activity"
                        heading="Curator"
                        subheading="TEDxSunwayUniversity"
                        body={<>
                            <h6>Responsibilities:</h6>
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
                    />
                    <TimelineElement
                        date="Nov 2018 - present"
                        type="activity"
                        heading="Trombonist"
                        subheading="Sunway University Ensemble"
                    />
                    <TimelineElement
                        date="Oct 2018"
                        type="award"
                        heading="Silver Award (540/600)"
                        subheading="Malaysian Computing Challenge (MCC)"
                    />
                    <TimelineElement
                        date="Sep 2018 - Nov 2019"
                        type="school"
                        heading="AS"
                        subheading="Sunway College"
                        body={<>
                            <h6>Subjects Taken:</h6>
                            <ul>
                                <li>Chemistry (9701) - A</li>
                                <li>Physics (9702) - A</li>
                                <li>Mathematics (9709) - A</li>
                            </ul>
                        </>}
                    />
                    <TimelineElement
                        date="Mar 2018"
                        type="award"
                        heading="Gold Medallist (Top 1.3%)"
                        subheading="Kangaroo Mathematics Competition (KMC) - Junior Division"
                    />
                    <TimelineElement
                        date="Feb 2018"
                        type="award"
                        heading="Top 5%"
                        subheading="American Mathematics Competition 10 (AMC 10)"
                    />
                    <TimelineElement
                        date="Sep 2017 - Nov 2018"
                        type="school"
                        heading="IGCSE"
                        subheading="Private Candidate"
                        body={<>
                            <h6>Subjects Taken:</h6>
                            <ul>
                                <li>Chemistry (0620) - A*</li>
                                <li>Physics (0625) - A*</li>
                                <li>Mathematics (0607) - A*</li>
                                <li>Additional Mathematics (0606) - A*</li>
                                <li>Economics (0625) - A</li>
                                <li>English (0500) - A</li>
                            </ul>
                        </>}
                    />
                    <TimelineElement
                        date="Apr 2017"
                        type="award"
                        heading="Gold Medallist"
                        subheading="Singaporean and Asian Schools Mathematics Olympiad (SASMO)"
                    />
                    <TimelineElement
                        date="Mar 2017"
                        type="award"
                        heading="Bronze Medallist"
                        subheading="Asia International Mathematics Olympiad (AIMO)"
                    />
                </VerticalTimeline>
            </section>
        );
    }
}