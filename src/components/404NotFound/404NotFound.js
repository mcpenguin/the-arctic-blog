// React component class for 404NotFound section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import stylesheet
import './404NotFound.scss';

export default class NotFound extends Component {
    render() {
        return (
            <section className='section-not-found'>
                <div className='gradient'>
                    <div className='desc'>
                        <h1>404 Error</h1>
                        <h3>Please check the page you are on is a valid page :D</h3>
                    </div>
                </div>
            </section>
        );
    }
}