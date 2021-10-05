import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Header = () => {
    return (
        <div className="body">
            <div className="bg">
                <Navbar></Navbar>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <blockquote className="blockquote m-3 p-5">
                            <ScrollAnimation animateIn="rollIn">
                                <h1 className="quote">
                                    "Every artist was an amature"
                                </h1>
                                <footer className="blockquote-footer">
                                    <cite>Ralph Waldo Emerson</cite>
                                </footer>
                            </ScrollAnimation>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;