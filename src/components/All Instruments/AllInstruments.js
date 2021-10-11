import React, { useContext } from 'react';
import { cartContext } from '../../App';
import './AllInstruments.css'

const AllInstruments = (props) => {


    const { img, title, desc, rating, price, video, time } = props.instrument; //Destructuring
    return (
        <div className='col-4 mb-3'>
            <div className="card card-section" style={{ width: '400px', boxShadow: '2px 2px 7px gray', borderRadius: '10px' }}>
                <img src={img} className="card-img-top card-image" alt="..." />
                <h3 className="text-center title mt-1 py-1">{title}</h3>
                <div className="card-body">
                    <p className="card-text description">{desc.slice(0, 150)}</p>
                    <hr style={{ marginBottom: '5px', color: 'rgb(208 208 208' }} />
                    <div className='d-flex justify-content-between'>
                        <h5 className='common-style'>
                            <i className="fas fa-dollar-sign"></i> Price: {price}
                        </h5>
                        <h5 className='common-style'>
                            <i className="fas fa-smile"></i> Rating: {rating}
                        </h5>
                    </div>
                    <hr style={{ marginTop: '5px', color: 'rgb(208 208 208' }} />

                    <hr style={{ marginBottom: '5px', color: 'rgb(208 208 208' }} />
                    <div className='d-flex justify-content-between'>
                        <h5 className='common-style'>
                            <i className="fas fa-video"></i> Total: {video}
                        </h5>
                        <h5 className='common-style'>
                            <i className="fas fa-clock"></i> Total: {time}
                        </h5>
                    </div>
                    <hr style={{ marginTop: '5px', color: 'rgb(208 208 208' }} />
                    <button
                        onClick={() => props.handleAddButton(props.instrument)}
                        style={{ marginLeft: '112px', width: "150px" }} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div >
    );
};

export default AllInstruments;