import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Event from '../Event/Event';
import Service from '../Service/Service';
import { Row } from 'react-bootstrap';

const Home = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="statement mt-5">
                <div className="bg2 p-4">
                    <h1>Welcome to Story of Canvas!</h1>
                    <h2>
                        Many people believe that artists are born that way – that talent can’t be taught – and that you are just an overseer of people that have “talent”. If you believe that you must have talent to acquire artistic skill, then what business do you have in art education. Talent is a myth and you must believe this. 
                        <blockquote className="blockquote mt-2">
                            <h1 className="quote2">
                                "All children are artists. The problem is how to remain an artist once he grows up."
                            </h1>
                            <footer className="blockquote-footer">
                                <cite>Pablo Picasso</cite>
                            </footer>
                        </blockquote>
                    </h2>
                </div>
            </div>
            <Event></Event>
            <div className="services2">
                <h1 className="event">Services</h1>
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