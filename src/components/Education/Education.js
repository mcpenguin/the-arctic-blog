// React component class for Education section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import Cover component
import Cover from '../Cover/Cover';

// import stylesheet
import './Education.scss';

export default class Education extends Component {
    render() { 
        return (
            <section className="section-education-page">
                <Cover 
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
                />
            </section>
        ); 
    }
}