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
                    borderRight: `7px solid ${this.options[nodeType].backgroundColor}`
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
                        subheading="MATHSOC Cartoons @ UW"
                        body={<>
                            <p>Responsibilities:</p>
                            <ul>
                                <li>Create storyboards for original mathematics-based cartoons</li>
                                <li>Liaise with team to review each other's work and provide feedback</li>
                            </ul> 
                        </>}
                    /> 
                    <TimelineElement
                        date="May 2021 - Aug 2021"
                        type="award"
                        heading="Data Analyst @ eMedAsia"
                        subheading="Kuala Lumpur, Malaysia"
                        body={<></>}
                    /> 
                    <TimelineElement
                        date="May 2021 - Aug 2021"
                        type="activity"
                        heading="Data Analyst @ eMedAsia"
                        subheading="Kuala Lumpur, Malaysia"
                        body={<></>}
                    />  
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - 2011"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Art Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2008 - 2010"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                        <p>
                            User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2006 - 2008"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>
                            User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="April 2013"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                        <p>
                            Strategy, Social Media
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="November 2012"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design
    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="2002 - 2006"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                        <p>
                            Creative Direction, Visual Design
    </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<StarIcon />}
                    />
                </VerticalTimeline>
            </section>
        );
    }
}