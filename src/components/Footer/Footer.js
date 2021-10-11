import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer d-flex justify-content-between px-5">

            <div>
                <h4 className="text-white">Get in Touch:</h4>
                <span><i className="fab social-media-icon fa-facebook-square"></i></span>
                <span><i className="fab social-media-icon fa-twitter-square"></i></span>
                <span><i className="fab social-media-icon fa-youtube"></i></span>
            </div>
            <div>
                <ul className='unordered-list text-white'>
                    <li>Home</li>|
                    <li>About</li>|
                    <li>Services</li>|
                    <li>Contact Us</li>
                </ul>
                <p className='text-white'>Copy Right &copy;- All right resurved by Md. Hafizur Rahman</p>
            </div>
        </div>
    );
};

export default Footer;