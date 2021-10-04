import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const {title, price, duration, img} = props.service;

    return (
        <div>
             <Col>
             <Card>
                <Card.Img variant="top" className="rounded-3" src={img} />
                <Card.Body>
                <Card.Title>
                    <h2>{title}</h2>
                </Card.Title>
                <Card.Text>
                    <h3>${price}</h3>
                    <h6 className="fw-light">Duration: {duration}</h6>
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">-by Story of Canvas</small>
                </Card.Footer>
            </Card>
            </Col>
        </div>
    );
};

export default Service;