import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css';

const About = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="event mt-4">About us</h1>
            <div className="about text-light m-3 p-5">
                    <h2 className="display-5">
                        Through arts and craft, children learn to value and appreciate artifacts and images across cultures and times. Experience in design, art, and crafts enable them to reflect critically on their own work and those by others. They learn to act and think like designers and artists, working intelligently and creatively. They also learn about the preservation of heritage through art. A lot of the information we have now about people that lived millions of years ago came solely from art. We're trying that this practice dosen't get lost.
                    </h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;