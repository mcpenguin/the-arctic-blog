// React component class for Education section
import React, { Component } from 'react';

import Fade from 'react-reveal/Fade';
import TypeWriterEffect from 'react-typewriter-effect';

// import data
import data from './educationData';

// import stylesheet
import './Education.scss';

// react component class for single education section
// props:
// - educationClass: class of education (eg sunway)
// - educationTitle: title of education (eg Sunway)
// - educationDate: date of education (eg 2020 - 2025)
// - educationDescription: description of education (as JSX)
class EducationEntry extends Component {
    render() {
        return (
            <div className={`education ${this.props.educationClass}`} style={{
                // backgroundImage: `url(${images[this.props.educationClass]})`,
            }}>
                <div className='sub'>
                <div className="content">
                        <div className="title">
                            <h4>
                            <TypeWriterEffect
                                text={this.props.educationTitle}
                                typeSpeed={40}
                                cursorColor={'rgb(42, 59, 211)'}
                                hideCursorAfterText={true}
                                textStyle={{
                                    fontSize: "1em",
                                }}
                            />
                            </h4>
                        </div>
                        <div className="date">
                            <h6>
                                <Fade right delay={40 * this.props.educationTitle.length}>
                                    {this.props.educationDate}
                                </Fade>
                            </h6>
                        </div>
                        <div className="key-achievements">
                            {/* <h3>Key Achievements</h3> */}
                            <p>
                                <Fade bottom cascade delay={40 * this.props.educationTitle.length}>
                                    <ul>
                                        {this.props.educationAchievements.map(
                                            a => <li>{a}</li>
                                        )}
                                    </ul>
                                </Fade>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default class Education extends Component {
    render() {
        return (
            <section id="education" className="section-education-page">
                <div className='gradient'>
                    {/* <Cover
                    coverClass="education"
                    coverTitle="My Education"
                    coverDescription={
                        <p>
                            I have been working with React for about a year now. I am currently working on
                            a React based web app that I am building for a client. The app
                            will be a simple todo list that will allow users to add
                            tasks and mark them as complete.
                        </p>
                    }
                /> */}
                    <h3>My Education</h3>
                    {
                        Object.keys(data).map(key =>
                            <>
                                <EducationEntry
                                    educationClass={key}
                                    educationTitle={data[key].title}
                                    educationDate={data[key].date}
                                    educationDescription={data[key].description}
                                    educationAchievements={data[key].achievements}
                                />
                            </>
                        )
                    }
                </div>
            </section>
        );
    }
}