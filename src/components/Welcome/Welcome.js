import Fade from 'react-reveal/Fade';

// import stylesheet
import './Welcome.scss';

export default function TopCarousel() {
    return (
        <section className="section-top-carousel">
            <div className='carousel-container'>
                <div className='description-sub'>
                    <div className='description'>
                        <Fade bottom opposite>
                            <h1>
                                Welcome to the Arctic Blog :D
                            </h1>
                        </Fade>
                        <Fade bottom delay={500} opposite>
                            <h5>
                                I'm Marcus Chan, a 2A Computer Science student
                                at the University of Waterloo as well as an aspiring
                                software developer and data scientist.
                            </h5>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}
