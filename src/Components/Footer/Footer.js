import React from 'react';
import './Footer.css';
import logo from "../../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faAt} from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faFacebook} />
const element2 = <FontAwesomeIcon icon={faInstagram} />
const element3 = <FontAwesomeIcon icon={faAt} />
const Footer = () => {
    return (
        <div className="footer">
            <div className="bg3 row">
                <div className="col-md-6 col-lg-4 col-sm-12 text-light p-3">
                    <img className="w-50 mb-4" src={logo} alt="" />
                    <h2 className="fw-bold display-6">Location</h2>
                    <h5 className="h3">Dhaka, Bangladesh</h5>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12 text-light p-3 mt-5 pt-4">
                    <h2 className="display-6">Around the web</h2>
                    <a target="_blank" href="https://www.facebook.com/canvasacrylicpaintingsbysnm" className="text-light me-2 h3">
                        {element}
                    </a> 
                    <a target="_blank" href="https://www.instagram.com/story_of_canvas_art_by_snm/" className="text-light me-2 h3">
                        {element2}
                    </a>
                    <a target="_blank" href="https://myaccount.google.com/profile" className="text-light h3">
                        {element3}
                    </a>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12 text-light p-5">
                    <h2 className="display-6">About</h2>
                    <p className="h3"> You'll find here the best service</p>
                    <p className="h3"> to explore your creativity.</p>
                </div>
            </div>
            <div className="bg-dark text-light p-2 h5 mb-0">
                <p>&copy; farzanamou773@gmail.com</p>
            </div>
        </div>
    );
};

export default Footer;