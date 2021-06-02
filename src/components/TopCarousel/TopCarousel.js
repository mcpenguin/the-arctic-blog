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
import image1 from './test-1440x600.jpg';

export default class TopCarousel extends Component {
    render() {
        return (
            <section class="section-top-carousel">
                {/* <Container fluid className="carousel-container"> */}
                    <Carousel>
                        <Carousel.Item>
                            <img fluid className="carousel-image" src={image1} alt="image1"></img>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img fluid className="carousel-image" src={image1} alt="image1"></img>
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                {/* </Container> */}
            </section>
        );
    }
}