// React component class for combined Experience and Education section

// import stylesheet
import './ExperienceEducation.scss';

// import timeline stuff
import Timeline from './Timeline/Timeline';

// import data
import experienceData from './experienceData';
import educationData from './educationData';

function Experience(props) {
  return (
    <section className="section-experience" id="experience">
      <div className="title">
        <h2>My Experience</h2>
      </div>
      <div className="timeline">
        <Timeline
          data={experienceData}
          start={160}
          range={120}
        />
      </div>
    </section>
  );
}

function Education(props) {
  return (
    <section className="section-education" id="education">
      <div className="title">
        <h2>My Education</h2>
      </div>
      <div className="timeline">
        <Timeline
          data={educationData}
          start={280}
          range={40}
        />
      </div>
    </section>
  );
}

function ExperienceEducation(props) {
  return (
    <>
      <Experience />
      <Education />
    </>
  );
}

export default ExperienceEducation;