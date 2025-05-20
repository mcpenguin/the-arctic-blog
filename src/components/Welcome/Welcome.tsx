import Fade from "react-reveal/Fade";

// import stylesheet
import "./Welcome.scss";

const TopCarousel = (): JSX.Element => (
  <section className="section-top-welcome">
    <div className="description">
      <Fade bottom opposite>
        <h1>Hello, I'm Marcus Chan :D</h1>
      </Fade>
      <Fade bottom delay={500} opposite>
        <h5>
          I'm an incoming Software Developer at Google, based in Waterloo,
          Canada! I graduated from the University of Waterloo with a joint major
          in Computer Science and Statistics (i.e. Data Science) in 2025.
        </h5>
      </Fade>
      <Fade bottom delay={1000} opposite>
        <h5>
          In my spare time I enjoy working on software projects, messing around
          with data on Kaggle, learning more about machine learning and AI,
          going rock climbing, composing and improvising new pieces on the
          piano, or just binging the latest anime show I got hooked on.
        </h5>
      </Fade>
      <Fade bottom delay={1500} opposite>
        <h5>Scroll down to learn more about me!</h5>
      </Fade>
    </div>
  </section>
);

export default TopCarousel;
