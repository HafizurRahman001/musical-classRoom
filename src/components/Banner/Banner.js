import React from 'react';
import './Banner.css'
import img from '../images/banner1.jpg';

const Banner = () => {
    return (
        <div>
            <div className="hero-image">
                <img src={img} alt="" />
            </div>
            <div className="hero-text">
                <h1>Wellcome To Our Musical Class Room</h1>
                <p>Hellow Dear! This is the Musical Instrumental Learning Website for every ages people. You guys just Buy it and Enjoy. </p>
            </div>
        </div>
    );
};

export default Banner;