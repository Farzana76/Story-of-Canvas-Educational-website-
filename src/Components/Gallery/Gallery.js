import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Card, Col, Row} from 'react-bootstrap';
import img from '../../img/c1.jpg';
import img2 from '../../img/c2.jpg';
import img3 from '../../img/c3.jpg';
import img4 from '../../img/s1.jpg';
import img5 from '../../img/s2.jpg';
import img6 from '../../img/s3.jpg';
import img7 from '../../img/s4.jpg';
import img8 from '../../img/s10.jpg';
import img9 from '../../img/s6.jpg';
import img10 from '../../img/s9.jpg';
import './Gallery.css';

const Gallery = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="event mt-3">Welcome to our gallery!</h1>
            <h2 className="text-center ms-3 fw-normal text-light gallery display-5">Explore some lovely works done by our students...</h2>
            {/* image gallery */}
            <div className="row mx-5">
                <div className="col-4">
                    <div className="row mb-3 image">
                        <img className="img-fluid" src={img9} alt=""/>
                    </div>
                    <div className="row image">
                        <img src={img6} alt=""/>
                    </div>
                </div>
                {/* middle column */}
                <div className="col-4">
                    <div className="row mb-3 image">
                        <img className="img-fluid" src={img2} alt=""/>
                    </div>
                    <div className="row mb-3 image">
                        <img src={img3} alt="" className="img-fluid"/>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6 image">
                            <img src={img4} alt="" className="img-fluid"/>
                        </div>
                        <div className="col-6 image">
                            <img src={img5} alt="" className="img-fluid"/>
                        </div>
                    </div>
                    <div className="row mb-3 image">
                        <img src={img8} alt="" className="img-fluid"/>
                    </div>
                </div>
                {/* last column */}
                <div className="col-4">
                    <div className="row mb-3 image">
                        <img className="img-fluid" src={img10} alt=""/>
                    </div>
                    <div className="row mb-3 image">
                        <img className="img-fluid" src={img7} alt=""/>
                    </div>
                    <div className="row mb-3 image">
                        <img className="img-fluid" src={img} alt=""/>
                    </div>
                    
                </div>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Gallery;