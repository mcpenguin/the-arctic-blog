// React component class for Experience section
import React, { Component } from 'react';

// import data
import data from './experienceData';

// import stylesheet
import './Experience.scss';

// react component class for single experience section
// props:
// - experienceClass: class of experience (eg emedasia)
// - experienceTitle: title of experience (eg Emedasia)
// - experienceDate: date of experience (eg May - Aug 2021)
// - experienceDescription: description of experience (as JSX)
class ExperienceEntry extends Component {
    render() {
        return (
            <div className={`experience ${this.props.experienceClass}`} style={{
                // backgroundImage: `url(${images[this.props.experienceClass]})`,
            }}>
                <div className='sub'>
                    <div className="content">
                        <div className="title">
                            <h4>
                            {/* <TypeWriterEffect
                                text={this.props.experienceTitle}
                                typeSpeed={40}
                                cursorColor={'rgb(34, 114, 218)'}
                                hideCursorAfterText={true}
                                textStyle={{
                                    fontSize: "1em",
                                }}
                            /> */}
                            {this.props.experienceTitle}
                            </h4>
                        </div>
                        <div className="date">
                            <h6>
                                {/* <Fade right delay={40 * this.props.experienceTitle.length}> */}
                                    {this.props.experienceDate}
                                {/* </Fade> */}
                            </h6>
                        </div>
                        <div className="key-achievements">
                            {/* <h3>Key Achievements</h3> */}
                            <p>
                                {/* <Fade bottom cascade delay={40 * this.props.experienceTitle.length}> */}
                                    <ul>
                                        {this.props.experienceAchievements.map(
                                            a => <li>{a}</li>
                                        )}
                                    </ul>
                                {/* </Fade> */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default class Experience extends Component {
    render() {
        return (
            <section id="experience" class='section-experience-page'>
                <div class='gradient'>
                    <h3>My Experiences</h3>
                    {
                        Object.keys(data).map(key =>
                            <>
                                <ExperienceEntry
                                    experienceClass={key}
                                    experienceTitle={data[key].title}
                                    experienceDate={data[key].date}
                                    experienceDescription={data[key].description}
                                    experienceAchievements={data[key].keyAchievements}
                                />
                            </>
                        )
                    }
                </div>
            </section>
        );
    }
}
