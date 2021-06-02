// React component class for TopCarousel section
import React, { Component } from 'react';

// import Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

// import stylesheet
import './TopCarousel.css';

// proportion of carousel images: 1440x600

// import images
import notes from './notes_carousel.jpg';
import piano from './piano_carousel.jpg';
import github from './github_carousel.jpg';
import linkedin from './linkedin_carousel.jpg';

export default class TopCarousel extends Component {
    render() {
        return (
            <section class="section-top-carousel">
                {/* <Container fluid className="carousel-container"> */}
                    <Carousel>
                        <Carousel.Item>
                            <img fluid className="carousel-image" src={notes} alt="image1"></img>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img fluid className="carousel-image" src={notes} alt="image1"></img>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img fluid className="carousel-image" src={piano} alt="image1"></img>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img fluid className="carousel-image" src={github} alt="image1"></img>
                            <Carousel.Caption>
                                <h1>Want to check out my other projects?</h1>
                                <h4>Check out my <a className="carousel-link" href="https://github.com/mcpenguin">Github page</a></h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img fluid className="carousel-image" src={linkedin} alt="image1"></img>
                            <Carousel.Caption>
                                <h1>Want to connect further?</h1>
                                <h4>Check out my <a className="carousel-link" href="https://www.linkedin.com/in/marcus-chanwc/">LinkedIn page</a></h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                {/* </Container> */}
            </section>
        );
    }
}