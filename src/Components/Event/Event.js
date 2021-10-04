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
                        <h3>Workshop on crafting</h3>
                        <p>Starting on 10th October</p>
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
                        <h3>Competion of pottery making</h3>
                        <p>Registration deadline is on 15th October</p>
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
                        <h3>Exhibition of abstract painting</h3>
                        <p>At Drik gallery on 20th October</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Event;