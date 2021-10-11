import React from 'react';
import './About.css';
import teacher1 from '../images/teacher1.png';
import teacher2 from '../images/teacher2.png';
import teacher3 from '../images/teacher3.png';
import teacher4 from '../images/teacher4.png';
import aboutUs from '../images/aboutUs.png';

const About = () => {
    return (
        <div className="container about-section my-2">
            <div className='d-flex mb-5 pt-4'>
                <div className='art-of-music-section'>
                    <small className='text-muted'>Unique Approach</small>
                    <h1>ART OF MUSIC</h1>
                    <h5 className='text-secondary'>Art of Music is a no-profit web radio with love and passion for good music.
                    </h5>
                    <p>
                        music, art concerned with combining vocal or instrumental sounds for beauty of form or emotional expression, usually according to cultural standards of rhythm, melody, and, in most Western music, harmony. Both the simple folk song and the complex electronic composition belong to the same activity, music.
                    </p>
                    <button className="btn btn-primary">Read More</button>
                </div>
                <div>
                    <img className='about-us-img' src={aboutUs} alt="" />
                </div>
            </div>
            <div className='text-center w-50 mx-auto'>
                <small className='text-muted'>Dadication to Teaching</small>
                <h1>MEET THE TEACHERS</h1>
                <h5 className='text-secondary'>Here is some teachers who are dedicated to teaching to learners. They are try to best to make you Experts</h5>
            </div>
            <div className='row mt-5'>
                <div className="col-3 text-center">
                    <img className='teacher-img' src={teacher1} alt="" />
                    <h3>Saima Builtee</h3>
                    <h5 className='text-secondary'>Piano Teacher</h5>
                </div>
                <div className="col-3 text-center">
                    <img className='teacher-img' src={teacher2} alt="" />
                    <h3>Robarto Riyals</h3>
                    <h5 className='text-secondary'>Guitar Teacher</h5>
                </div>
                <div className="col-3 text-center">
                    <img className='teacher-img' src={teacher3} alt="" />
                    <h3>Mariya Mimi</h3>
                    <h5 className='text-secondary'>Drums Teacher</h5>
                </div>
                <div className="col-3 text-center mb-5">
                    <img className='teacher-img' src={teacher4} alt="" />
                    <h3>Donald Desujaa</h3>
                    <h5 className='text-secondary'>Flute Teacher</h5>
                </div>
            </div>
        </div>
    );
};

export default About;