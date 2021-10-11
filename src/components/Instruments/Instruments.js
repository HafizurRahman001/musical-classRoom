import React from 'react';
import { Link } from 'react-router-dom';
import './Instruments.css';

const Instruments = (props) => {
    const { img, title, desc, price, rating, video, time, teacher } = props.instrument;

    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title fs-3 mb-4 text-center card-heading">{title}</h5>
                            <div className="d-flex justify-content-between">
                                <div className="pe-5" style={{ borderRight: '1px solid #80808040' }}>
                                    <h5 className='py-3 fw-bold'> <span className="fw-normal">Teacher:</span> {teacher}</h5>
                                    <div>
                                        <div className="d-flex">
                                            <p><i className="fas fa-video"></i> Total: {video}</p>
                                            <p style={{ marginLeft: '124px' }}>
                                                <i className="fas fa-clock"></i> Total: {time} m
                                            </p>
                                        </div>
                                        <div className='d-flex'>
                                            <p><i className="fas fa-dollar-sign"></i> Price: {price}</p>
                                            <p style={{ marginLeft: '124px' }}>
                                                <i className="fas fa-smile"></i> Rating: {rating}
                                            </p>
                                        </div>
                                        <Link to='/services'>
                                            <button className="btn btn-primary add-to-cart-btn">
                                                Go to Services
                                            </button></Link>
                                    </div>
                                </div>
                                <div className="w-50 ps-3">
                                    <p className="fw-bold">Short Description:</p>
                                    <p>{desc.slice(0, 150)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Instruments;