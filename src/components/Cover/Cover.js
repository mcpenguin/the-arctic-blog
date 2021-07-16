// React component class for Cover section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import stylesheet
import './Cover.scss';

// import cover images
import * as images from './export-images';

// props:
// - coverClass: class name for cover (ie the section which it is used for) (e.g. "projects")
// - coverTitle: title for cover
// - coverDescription: description for cover (as JSX)
export default class Cover extends Component {
    render() { 
        return (
            <section className={`section-cover section-cover--${this.props.coverClass}`} style={{
                backgroundImage: `url(${images[this.props.coverClass]})`
            }}>
                <div className='sub'>
                    <div className='description'>
                        <h1>{this.props.coverTitle}</h1>
                        {this.props.coverDescription}
                    </div>
                </div>
            </section>
        ); 
    }
}