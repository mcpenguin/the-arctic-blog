// React component class for Experience section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import Cover
import Cover from '../Cover/Cover';

// import images
import * as images from './export_images';

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
                            <h1>{this.props.experienceTitle}</h1>
                        </div>
                        <div className="date">
                            <h6>{this.props.experienceDate}</h6>
                        </div>
                        {/* <div className="description">
                            <p>{this.props.experienceDescription}</p>
                        </div> */}
                        <div className="key-achievements">
                            {/* <h3>Key Achievements</h3> */}
                            <ul>
                                {this.props.experienceAchievements.map(
                                    a => <li>{a}</li>
                                )}
                            </ul>
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
            <section class='section-experience-page'>
                <Cover
                    coverClass="experience"
                    coverTitle="My Experience"
                    coverDescription={<>
                        <p>
                            I have been working with React for about a year now. I am currently working on
                            a React based web app that I am building for a client. The app
                            will be a simple todo list that will allow users to add
                            tasks and mark them as complete.
                        </p>
                    </>}
                />
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
            </section>
        );
    }
}