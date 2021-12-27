// React component class for combined Experience and Education section

// import bootstrap grid stuff
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import stylesheet
import './ExperienceEducation.scss';

// import timeline stuff
import TimelineElement from './Timeline/TimelineElement';

const experienceData = {};
const educationData = {};

// timeline functional component
// takes in a data object as props.data 
// and generates the "necessary timeline"
const Timeline = (props) => {
    return <>
        <TimelineElement
            title='Director'
            subtitle='MATHSOC Cartoons'
            date='Jan 2022 - Apr 2022'
            color='hsla(180, 80%, 90%, 1)'
            subcolor='hsla(180, 40%, 40%, 1)'
            nextcolor='hsla(200, 40%, 40%, 1)'
        > 
        </TimelineElement>
        <TimelineElement
            title='Writer'
            subtitle='MATHSOC Cartoons'
            date='May 2021 - Dec 2021'
            color='hsla(200, 80%, 90%, 1)'
            subcolor='hsla(200, 40%, 40%, 1)'
            nextcolor='hsla(220, 40%, 40%, 1)'
        >
            <ul>
                <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
                <li>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</li>
                <li>and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
            </ul>
        </TimelineElement>
        <TimelineElement
            title='Writer'
            subtitle='MATHSOC Cartoons'
            date='May 2021 - Dec 2021'
            color='hsla(220, 80%, 90%, 1)'
            subcolor='hsla(220, 40%, 40%, 1)'
            nextcolor='hsla(240, 40%, 40%, 1)'
        >
            <ul>
                <li>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
                <li>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</li>
                <li>and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
                <li>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</li>
                <li>and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
            </ul>
        </TimelineElement>
    </>;
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
