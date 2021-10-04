import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Card, Col, Row} from 'react-bootstrap';
import img from '../../img/c1.jpg'
import img2 from '../../img/c2.jpg'
import img3 from '../../img/c3.jpg'
import img4 from '../../img/s1.jpg'
import img5 from '../../img/s2.jpg'
import img6 from '../../img/s3.jpg'
import img7 from '../../img/s4.jpg'
import img8 from '../../img/s5.jpg'
import img9 from '../../img/s6.jpg'
import './Gallery.css';

const Gallery = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="event mt-3">Welcome to our gallery!</h1>
            <h2 className="text-start ms-3 fw-bold">Some lovely works done by our students</h2>
            <Row xs={1} md={2} lg={4} className="g-4 ps-5 pe-5 mb-5 pt-3">
                <Col>
                    <Card>
                        <Card.Img variant="top" className="rounded-3" src={img} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" className="rounded-3" src={img2} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" className="rounded-3" src={img3} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" className="rounded-3" src={img} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" className="rounded-3" src={img2} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" className="rounded-3" src={img3} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" className="rounded-3" src={img} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" className="rounded-3" src={img2} />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" className="rounded-3" src={img3} />
                    </Card>
                </Col>
            </Row> 
            
            <Footer></Footer>
        </div>
    );
};

export default Gallery;