// React component class for Education section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import Cover component
import Cover from '../Cover/Cover';

// import images
import * as images from './export_images';

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
                            <h4>{this.props.educationTitle}</h4>
                        </div>
                        <div className="date">
                            <h6>{this.props.educationDate}</h6>
                        </div>
                        {/* <div className="description">
                            {this.props.educationDescription}
                        </div> */}
                        <div className="key-achievements">
                            <p>
                                <ul>
                                    {this.props.educationAchievements.map(
                                        a => <li>{a}</li>
                                    )}
                                </ul>
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
            <section className="section-education-page">
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