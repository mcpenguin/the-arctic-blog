import Fade from 'react-reveal/Fade';

// import stylesheet
import './Welcome.scss';

export default function TopCarousel() {
  return (
    <section className="section-top-welcome">
      <div className="description">
        <Fade bottom opposite>
          <h1>
            Welcome :D
          </h1>
        </Fade>
        <Fade bottom delay={500} opposite>
          <h5>
            I'm Marcus Chan, a 2B Computer Science student
            at the University of Waterloo as well as an aspiring
            software developer and data scientist.
          </h5>
        </Fade>
      </div>
    </section>
  );
}
