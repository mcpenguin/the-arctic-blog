// React component class for Projects section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import stylesheet
import './Projects.css';

export default class Projects extends Component {
    render() { 
        return (
            <section class="section-projects-page">
                <h2>My Projects</h2>
                <p>
                    Projects description would go here.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ac odio tempor orci dapibus ultrices in 
                    iaculis nunc sed. Amet risus nullam eget felis eget nunc 
                    lobortis mattis aliquam. Orci a scelerisque purus semper eget 
                    duis. Eu augue ut lectus arcu bibendum at varius vel.
                </p>
            </section>
        ); 
    }
}