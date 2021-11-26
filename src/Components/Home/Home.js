import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Event from '../Event/Event';
import Service from '../Service/Service';
import { Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPalette, faGraduationCap, faChalkboardTeacher, faRegistered} from '@fortawesome/free-solid-svg-icons'
import ScrollAnimation from 'react-animate-on-scroll';

const Home = () => {
    const element = <FontAwesomeIcon icon={faPalette} />
    const element2 = <FontAwesomeIcon icon={faGraduationCap} />
    const element3 = <FontAwesomeIcon icon={faChalkboardTeacher} />
    const element4 = <FontAwesomeIcon icon={faRegistered} />
    const [services, setServices] = useState([]);

    // loading service data
    useEffect(() => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <ScrollAnimation animateIn="fadeIn">
                <div className="statement mt-5">
                    <div className="bg2 p-4">
                        <h1 className="display-2 fw-bolder">hhtfhgvj Welcome to Story of Canvas!</h1>
                        <h2 className="display-6 fw-bold">
                            Many people believe that artists are born that way – that talent can’t be taught – and that you are just an overseer of people that have “talent”. If you believe that you must have talent to acquire artistic skill, then what business do you have in art education. Talent is a myth and you must believe this. 
                            <blockquote className="blockquote mt-2">
                                <h3 className="quote2 display-5 fw-bolder">
                                    "All children are artists. The problem is how to remain an artist once he grows up."
                                </h3>
                                <footer className="blockquote-footer2 display-6 fw-bold">
                                    <cite>- Pablo Picasso</cite>
                                </footer>
                            </blockquote>
                        </h2>
                    </div>
                </div>
            </ScrollAnimation>
            <div className="row">
                <div className="col-lg-8 col-sm-12 col-md-12">
                    <Event></Event>
                </div>
                {/* total numbers */}
                <div className="col-lg-4 col-sm-12 col-md-12 text-center mt-5 pt-2 info">
                    <ScrollAnimation animateIn="flipInX">
                        <div className="token me-5 pe-5 ps-5 mt-5">
                            <h1 className="mt-4">8</h1>
                            <h2 className="mb-4">{element} Courses</h2>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="flipInX">
                        <div className="token me-5 pe-5 ps-5">
                            <h1>15</h1>
                            <h2 className="mb-4">{element3} Instructors</h2>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="flipInX">
                        <div className="token me-5 pe-5 ps-5">
                            <h1>1085</h1>
                            <h2 className="mb-4">{element2} Students</h2>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="flipInX">
                        <div className="token me-5 pe-5 ps-5">
                        <h1>10.10.2021</h1>
                        <h2>{element4} Registration deadline</h2>
                        </div>
                    </ScrollAnimation>
                </div>
               
            </div>
            {/* passing data of services */}
            <div className="services2">
                <ScrollAnimation animateIn="slideInLeft">
                    <h1 className="event">Services</h1>
                </ScrollAnimation>
                <Row xs={1} md={2} lg={4} className="g-4 ps-5 pe-5 mb-5 pt-3">
                    {
                        services.slice(0, 4).map(service => <Service 
                            key = {service.title}
                            service={service}
                            ></Service>)
                    }
                </Row> 
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;