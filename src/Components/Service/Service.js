import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const {title, price, duration, img} = props.service;

    return (
        <div className="service">
             <Col>
             <Card>
                <Card.Img variant="top" className="rounded-3" src={img} />
                <Card.Text>
                    <h3 className="display-3 fw-bolder">${price}</h3>
                    <h6 className="display-6 fw-light">Duration: {duration}</h6>
                </Card.Text>
                <Card.ImgOverlay className="">
                    <Card.Title>
                        <h2 className="display-5 fw-bold">{title}</h2>
                    </Card.Title>
                </Card.ImgOverlay>
                <Card.Footer>
                <small className="text-muted h2">-by Story of Canvas</small>
                </Card.Footer>
            </Card>
            </Col>
        </div>
    );
};

export default Service;