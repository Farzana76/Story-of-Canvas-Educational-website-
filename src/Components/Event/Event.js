import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import './Event.css';
import img1 from "../../img/c1.jpg";
import img2 from "../../img/c2.jpg";
import img3 from "../../img/c3.jpg";

const Event = () => {
    return (
        <div className="mb-5 mt-4">
            <h1 className="event pb-3">Upcoming Events</h1>
            <Carousel fade>
                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <img
                        className="d-block w-50"
                        src={img1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <img
                        className="d-block w-50"
                        src={img2}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <img
                        className="d-block w-50"
                        src={img3}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Event;