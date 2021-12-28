// React component class for combined Experience and Education section

// import bootstrap grid stuff
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import stylesheet
import './ExperienceEducation.scss';

// import timeline stuff
import TimelineElement from './Timeline/TimelineElement';

// import data
import experienceData from './experienceData';

// const experienceData = [];
const educationData = [];

// timeline functional component
// takes in a data object as props.data 
// and generates the "necessary timeline"
const Timeline = (props) => {
    if (props.data) {
        let result = [];
        // convert data into array of timeline elements
        for (let i = 0; i < props.data.length; i++) {
            let element = props.data[i];
            // value of hue
            let h = 160 + 100 * (i+1) / props.data.length;
            result.push(
                <TimelineElement
                    key={i}
                    title={element.title}
                    subtitle={element.subtitle}
                    date={element.date}
                    color={`hsla(${h}, 80%, 90%, 1)`}
                    subcolor={`hsla(${h}, 40%, 40%, 1)`}
                    nextcolor={`hsla(${h}, 40%, 40%, 1)`}
                >
                    {element.content}
                </TimelineElement>
            );
        }
        return result;
    }
}

const Experience = (props) => {
    return (
        <section className='section-experience'>
            <div className='title'>
                <h2>My Experience</h2>
            </div>
            <div className='timeline'>
                <Timeline data={experienceData} />
            </div>
        </section>
    );
}

const Education = (props) => {
    return (
        <section className='section-education'>
            {/* <div className='title'>
                <h2>My Education</h2>
            </div>
            <div className='timeline'>
                <Timeline data={educationData} />
            </div> */}
        </section>
    );
}

const ExperienceEducation = (props) => {
    return (
        <>
            <Experience />
            <Education />
        </>
    );
}

export default ExperienceEducation;
