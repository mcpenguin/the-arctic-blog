// React component class for Extracurriculars section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import stylesheet
import './Extracurriculars.scss';

export default class Extracurriculars extends Component {
    render() {
        return (
            <section className='section-extracurriculars-page'>
                <div className='sub'>
                    <h3>My Extracurriculars and Hobbies</h3>

                    <div className='extracurriculars-container'>
                        <div className='one'>
                            <div className='tedx'>
                                <div className='gradient'>

                                </div>
                            </div>
                            <div className='sue'>
                                <div className='gradient'>

                                </div>
                            </div>
                        </div>
                        <div className='two'>
                            <div className='rc'>
                                <div className='gradient'>

                                </div>
                            </div>
                        </div>
                        <div className='three'>
                            <div className='piano'>
                                <div className='gradient'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}