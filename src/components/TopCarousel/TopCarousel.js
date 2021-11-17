// React component class for TopCarousel section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Fade from 'react-reveal/Fade';

// import stylesheet
import './TopCarousel.scss';

// proportion of carousel images: 1440x600
// need to add "smaller" images for the media, so when window width gets smaller,
// the animation for the carousel does not look so bad

// import images
import * as images from './images/export_images';

// component for carousel items
class CustomCarouselContents extends Component {
    render() {
        return (
            <>
                <div className="d-flex justify-content-center">
                    <img className="carousel-image" src={this.props.image} alt="image1"></img>
                </div>
                <Carousel.Caption>
                    {this.props.heading}
                    {this.props.subheading}
                </Carousel.Caption>
            </>
        )
    }
}

export default function TopCarousel() {
    return (
        <section className="section-top-carousel">
            <div className='carousel-container'>
                <div className='description-sub'>
                    <div className='description'>
                        <Fade bottom opposite>
                            <h1>
                                Welcome to the Arctic Blog :D
                            </h1>
                        </Fade>
                        <Fade bottom delay={500} opposite>
                            <h5>
                                I'm Marcus Chan, a 2A Computer Science student
                                at the University of Waterloo as well as an aspiring
                                software developer and data scientist.
                            </h5>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}
