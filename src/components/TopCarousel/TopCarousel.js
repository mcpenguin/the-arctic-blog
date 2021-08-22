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

export default class TopCarousel extends Component {
    render() {
        return (
            <section className="section-top-carousel">
                <div className='carousel-container'>
                    {/* {
                        Object.values(images).map(
                            image => <div className='carousel-image'>
                                <img src={image} />
                            </div>
                        )
                    } */}
                    <div className='description-sub'>
                        <div className='description'>
                            <Fade bottom opposite>
                                <h1>
                                    Welcome to the Arctic Blog :D
                                </h1>
                            </Fade>
                            <Fade bottom delay={500} opposite>
                                <h5>
                                    I'm Marcus Chan, a 2A Data Science student
                                    at the University of Waterloo as well as an aspiring
                                    software developer and data scientist.
                                </h5>
                            </Fade>
                        </div>
                    </div>
                </div>



                {/* <Carousel>
                    <Carousel.Item>
                        <CustomCarouselContents
                            image={images.notes}
                            heading={
                                <h1 className="carousel-heading">
                                    Incoming A-Levels or first-year student?
                                </h1>
                            }
                            subheading={
                                <h4>
                                    Check out the notes I did for my <a className="carousel-link" href="#notes">A-Levels</a> and 
                                    for my <a className="carousel-link" href="#notes">first-year</a> courses
                                    at Waterloo. 
                                </h4>
                            }
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CustomCarouselContents
                            image={images.notes}
                            heading={
                                <h1 className="carousel-heading">
                                    Current notes update
                                </h1>
                            }
                            subheading={
                                <h4>
                                    I am in coop right now, so I am not doing
                                    notes for any course at the moment.
                                </h4>
                            }
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CustomCarouselContents
                            image={images.piano}
                            heading={
                                <h1 className="carousel-heading">
                                    Unravel (from Tokyo Ghoul) - Original Piano Arrangement
                                </h1>
                            }
                            subheading={
                                <h4>
                                    <a className="carousel-link" href="https://www.youtube.com/watch?v=hHcHlceGFpA">180+ views</a> and counting
                                </h4>
                            }
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CustomCarouselContents
                            image={images.graph}
                            heading={
                                <h1 className="carousel-heading">
                                    Check out "My Course Graph"
                                </h1>
                            }
                            subheading={
                                <h4>
                                    and my other projects
                                    on my <a className="carousel-link" href="https://github.com/mcpenguin">Github</a> page.
                                </h4>
                            }
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CustomCarouselContents
                            image={images.penguin}
                            heading={
                                <h1 className="carousel-heading">
                                    Want to connect with me further?
                                </h1>
                            }
                            subheading={
                                <h4>
                                    Add me on <a className="carousel-link" href="https://www.linkedin.com/in/marcus-chanwc/">LinkedIn</a> or
                                    follow me on <a className="carousel-link" href="https://www.instagram.com/mcpenquin/?hl=en">Instagram</a>
                                </h4>
                            }
                        />
                    </Carousel.Item>
                </Carousel> */}
            </section>
        );
    }
}