import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="body">
            <div className="bg">
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Header;