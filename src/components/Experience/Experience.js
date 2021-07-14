// React component class for Experience section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import Cover
import Cover from '../Cover/Cover';

// import stylesheet
import './Experience.css';

export default class Experience extends Component {
    render() { 
        return (
            <>
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
            </>
        ); 
    }
}