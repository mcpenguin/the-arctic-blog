// React component class for Experience section

// import stylesheet
import "./Experience.scss";

// import timeline stuff
import { useState } from "react";
import Timeline from "./Timeline/Timeline";

// import data
import experienceData from "./experienceData";

const Experience = () => {
  const [showTechJobs, setShowTechJobs] = useState(true);
  const [showEC, setShowEC] = useState(false);
  const [showHS, setShowHS] = useState(false);

  return (
    <section className="section-experience" id="experience">
      <div className="exp-wrapper">
        <div className="title">
          <h2>My Experience</h2>
        </div>
        <div className="filters">
          <label className="cont" htmlFor="show-tech-jobs">
            Show dev roles
            <input
              type="checkbox"
              className="checkbox"
              id="show-tech-jobs"
              onClick={() => setShowTechJobs(!showTechJobs)}
            />
            <div className={`checkmark ${showTechJobs ? "checked" : ""}`} />
          </label>
          <label className="cont" htmlFor="show-ec">
            Show extra-curriculars
            <input
              type="checkbox"
              className="checkbox"
              id="show-ec"
              onClick={() => setShowEC(!showEC)}
            />
            <div className={`checkmark ${showEC ? "checked" : ""}`} />
          </label>
          <label className="cont" htmlFor="show-hs">
            Show HS experiences
            <input
              type="checkbox"
              className="checkbox"
              id="show-hs"
              onClick={() => setShowHS(!showHS)}
            />
            <div className={`checkmark ${showHS ? "checked" : ""}`} />
          </label>
        </div>
        <div className="timeline">
          <Timeline
            data={experienceData}
            start={280}
            range={-160}
            filters={{
              showTechJobs,
              showEC,
              showHS,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
