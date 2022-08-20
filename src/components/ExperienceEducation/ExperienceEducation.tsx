// React component class for combined Experience and Education section

// import stylesheet
import "./ExperienceEducation.scss";

// import timeline stuff
import { useState } from "react";
import Timeline from "./Timeline/Timeline";

// import data
import experienceData from "./experienceData";
import educationData from "./educationData";

const Experience = () => {
  const [showNonTechJobs, setShowNonTechJobs] = useState(false);

  return (
    <section className="section-experience" id="experience">
      <div className="title">
        <h2>My Experience</h2>
      </div>
      <div className="filters">
        <label className="container" htmlFor="show-non-tech-jobs">
          Show non-tech jobs
          <input
            type="checkbox"
            className="checkbox"
            id="show-non-tech-jobs"
            onClick={() => setShowNonTechJobs(!showNonTechJobs)}
          />
          <div className={`checkmark ${showNonTechJobs ? "checked" : ""}`} />
        </label>
      </div>
      <div className="timeline">
        <Timeline
          data={experienceData}
          start={160}
          range={120}
          filters={{
            showNonTechJobs,
          }}
        />
      </div>
    </section>
  );
};

const Education = () => (
  <section className="section-education" id="education">
    <div className="title">
      <h2>My Education</h2>
    </div>
    <div className="timeline">
      <Timeline data={educationData} start={280} range={40} filters={{}} />
    </div>
  </section>
);

const ExperienceEducation = () => (
  <>
    <Experience />
    <Education />
  </>
);

export default ExperienceEducation;
