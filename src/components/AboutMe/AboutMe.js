// React component class for About Me section

import React, { Component } from 'react';
// import Fade from 'react-reveal';
import TypeWriterEffect from 'react-typewriter-effect';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Fade from 'react-reveal/Fade';

import personal_photo from './personal-photo.png';

import './AboutMe.scss';

const PersonalFact = (props) => {
    return (
        <>
            <h5 className="personal-facts-head">
            <div className='personal-facts-icon'><i className={props.iconName} /></div>
            <TypeWriterEffect
                text={props.title}
                typeSpeed={100}
                cursorColor={'blue'}
                hideCursorAfterText={true}
                textStyle={{
                    fontSize: "1em",
                }}
            />
            </h5>
            <Fade up delay={2000}>
                <p className="personal-facts-body">
                    {props.body}
                </p>
            </Fade>
        </>
    )
}

export default class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isElementVisible: false,
        }
    }

    // get intersection observer to see whether element is in view
    observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                this.setState({
                    isElementVisible: entry.isIntersecting,
                })
            })
        },
        {
            rootMargin: '0px',
            // percentage of the windwo you need to see for the animation to start
            threshold: 0.8,
        }
    )

    componentDidMount() {
        this.observer.observe(document.querySelector('#about-me'));
    }

    render() {
        return (
            <section className="section-about-me" id="about-me">
                <div className='sub'>
                    <Container id="container-about-me">
                        <Row>
                            <Col className="w-50">
                                <h3 id="about-me-title">Quick Facts</h3>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col lg={6}>
                                <div className='personal-photo'>
                                    <img
                                        id="personal-photo"
                                        src={personal_photo}
                                        alt="personal"
                                    />
                                </div>
                            </Col>
                            <Col lg={6} className="personal-facts-col">
                                <div className='wrapper'>
                                    <div className={`personal-facts`}>
                                        <PersonalFact 
                                            iconName='fas fa-pencil-alt'
                                            title='Current Notes Update'
                                            body={<>None (currently in work term)</>}
                                        />
                                        <PersonalFact 
                                            iconName='fas fa-briefcase'
                                            title='Current Coop'
                                            body={<>Data Analyst, eMedAsia @ Kuala Lumpur, Malaysia</>}
                                        />
                                        <PersonalFact 
                                            iconName='fas fa-graduation-cap'
                                            title='Current Education'
                                            body={<>
                                                Data Science, Honours, Co-op (2A in Fall 2021)
                                                <br />
                                                University of Waterloo @ Ontario, Canada
                                                <br />
                                                CAV: 94 | MAV: 96
                                            </>}
                                        />
                                        <PersonalFact 
                                            iconName='fas fa-code'
                                            title='Programming Expertise'
                                            body={<>
                                                HTML, CSS (Sass), JS (Node.js, Express.js, React), Python
                                                (Pandas, Numpy, Matplotlib, BeautifulSoup), Jupyter Notebook, Java (Joget DX), MySQL,
                                                Racket/Scheme/Lisp, C, Git, Tableau, Metabase
                                            </>}
                                        />
                                        <PersonalFact 
                                            iconName='far fa-futbol'
                                            title='Hobbies'
                                            body={<>
                                                Mathematics, coding, arranging/composing piano pieces,
                                                rock climbing, basketball, watching videos on YouTube
                                            </>}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        )
    }
}

