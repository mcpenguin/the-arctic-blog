// React component class for About Me section

import React, {useState, useEffect} from 'react';
import courses from '../Notes/courses.json';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import personal_photo from './personal-photo.jpeg';

import './AboutMe.scss';

const CURRENT_TERM = '2A'

interface personalFactProps {
    iconName: string,
    title: string,
    body: React.ReactNode,
}

const PersonalFact = (props: personalFactProps) => {
    return (
        <>
            <div className="personal-facts-head">
                {/* <img className={`personal-facts-icon ${props.iconName}`} src={props.icon} /> */}
                {/* <Fade up> */}
                <h5>
                    <i className={`personal-facts-icon ${props.iconName}`}></i>
                </h5>
                <h5>
                    {props.title}
                </h5>

            </div>
            <p className="personal-facts-body">
                {props.body}
            </p>
        </>
    )
}

const AboutMe = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isElementVisible: false,
    //     }
    // }
    let [isElementVisible, setIsElementVisible] = useState(false);

    // get intersection observer to see whether element is in view
    let observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                setIsElementVisible(entry.isIntersecting) 
            });
        },
        {
            rootMargin: '0px',
            // percentage of the windwo you need to see for the animation to start
            threshold: 0.8,
        }
    )

    useEffect(() =>{
        observer.observe(document.querySelector('#about-me'));
    });

    let coursesList = courses[CURRENT_TERM]['courses'];
    const coursesKeysList = Object.keys(coursesList);

    return (
        <section className="section-about-me" id="about-me">
                <Container id="container-about-me">
                    <Row>
                        <Col className="w-50">
                            <h3 id="about-me-title">Quick Facts</h3>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <div className='personal-photo'>
                            <img
                                id="personal-photo"
                                src={personal_photo}
                                alt="personal"
                            />
                        </div>
                        <div className='wrapper'>
                            <div className='personal-facts'>
                                <div className='first'>
                                    <PersonalFact
                                        iconName='fas fa-pencil-alt'
                                        // icon={NotesIcon}
                                        title='Current Notes Update'
                                        body={<>
                                            <ul className=''>{coursesKeysList.map((course_code) =>
                                                <li>{`${coursesList[course_code]['shortTitle']} - ${coursesList[course_code]['notesStatus']}`}</li>
                                            )}
                                            </ul>
                                        </>}
                                    />
                                    <PersonalFact
                                        iconName='fas fa-briefcase'
                                        title='Latest Coop'
                                        body={<>Data Analyst @ eMedAsia, Malaysia</>}
                                    />
                                    <PersonalFact
                                        iconName='fas fa-graduation-cap'
                                        title='Current Education'
                                        body={<>
                                            Computer Science, Honours, Co-op (2A in Fall 2021)
                                            <br />
                                            University of Waterloo @ Ontario, Canada
                                            <br />
                                            CAV: 94 | MAV: 96
                                        </>}
                                    />
                                </div>
                                <div className='second'>
                                    <PersonalFact
                                        iconName='fas fa-code'
                                        title='Programming Expertise'
                                        body={<>
                                            HTML, CSS (Sass), JS (Node.js, Express.js, React), Python
                                            (Pandas, Numpy, Matplotlib, BeautifulSoup), Jupyter Notebook, Java (Joget DX), MySQL,
                                            MongoDB, Racket/Scheme/Lisp, C/C++, Git, Tableau, Metabase
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
                        </div>
                    </Row>
                </Container>
        </section>
    )
}

export default AboutMe;

