import React from 'react';
import './NotFound.css';
import errorImg from '../images/error.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className="error-img" src={errorImg} alt="" />
            <Link to='/home'>
                <button className="btn btn-primary back-btn">Back to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;