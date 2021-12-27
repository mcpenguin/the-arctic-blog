// React component class for combined Experience and Education section

// import bootstrap grid stuff
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// import stylesheet
import './ExperienceEducation.scss';

const experienceData = {};
const educationData = {};

// timeline functional component
// takes in a data object as props.data 
// and generates the "necessary timeline"
const Timeline = (props) => {
    return <>
        <p>Timeline will go here!</p>
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
            <div className='title'>
                <h2>My Education</h2>
            </div>
            <div className='timeline'>
                <Timeline data={educationData} />
            </div>
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
