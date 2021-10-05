import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './Event.css';
import img1 from "../../img/c1.jpg";
import img2 from "../../img/c2.jpg";
import img3 from "../../img/c3.jpg";
import ScrollAnimation from 'react-animate-on-scroll';

const Event = () => {
    return (
        <div className="mb-5 mt-4">
             <ScrollAnimation animateIn="slideInLeft">
                <h1 className="event pb-3">Upcoming Events</h1>
            </ScrollAnimation>
            <Carousel fade>
                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <img
                        className="d-block w-75"
                        src={img1}
                        alt="First slide"
                        />
                        
                        <Carousel.Caption className="carousel">
                            <ScrollAnimation animateIn="slideInDown">
                                <h3 className="display-1 fw-bolder">Workshop on crafting</h3>
                                <p className="display-6 fw-bold">Starting on 10th October</p>
                            </ScrollAnimation>
                        </Carousel.Caption>
                        
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <img
                        className="d-block w-75"
                        src={img2}
                        alt="Second slide"
                        />

                        <Carousel.Caption className="carousel">
                            <ScrollAnimation animateIn="slideInDown">
                                <h3 className="display-1 fw-bolder">Competion of pottery making</h3>
                                <p className="display-6 fw-bold">Registration deadline is on 15th October</p>
                            </ScrollAnimation>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <img
                        className="d-block w-75"
                        src={img3}
                        alt="Third slide"
                        />

                        <Carousel.Caption className="carousel">
                            <ScrollAnimation animateIn="slideInDown">
                                <h3 className="display-1 fw-bolder">Exhibition of abstract painting</h3>
                                <p className="display-6 fw-bold">At Drik gallery on 20th October</p>
                            </ScrollAnimation>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Event;