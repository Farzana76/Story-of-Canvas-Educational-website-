import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../img/logo.png";
import './Navbar.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="container">
            <ScrollAnimation animateIn="slideInDown">
                <div className="row pt-4 pb-5">
                <div className="col-md-2">
                    <div className="logo">
                        <img className="w-100" src={logo} alt="" />
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="navbar-container">
                    <ul className="d-flex align-items-end justify-content-end">
                        <NavLink to="/home" className="items">
                        <li>Home</li>
                        </NavLink>
                        <NavLink to="/services" className="items">
                        <li>Services</li>
                        </NavLink>
                        <NavLink to="/gallery" className="items">
                        <li>Gallery</li>
                        </NavLink>
                        <NavLink to="/about" className="items">
                        <li>About us</li>
                        </NavLink>
                    </ul>
                    </div>
                </div>
                </div>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default Navbar;