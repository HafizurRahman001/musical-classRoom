import React from 'react';
import './Contact.css';
import mapImg from '../images/map.png';

const ContactUs = () => {
    return (
        <div style={{ backgroundColor: '#f0f0f0' }} className="container my-3 p-5">
            <h1 className="mb-4">Contact Us</h1>
            <div className="d-flex">
                <div className='py-4'>
                    <h5 className='fw-bold'>Dhaka Branch</h5>
                    <address>
                        Contact with us for any help<br />
                        124, Hatirjhil Road, Dhaka, Bangladesh<br />
                        Tel: + 7958 917 9747 2481 000<br />
                        Fax: + 7958 917 9747 2481 000<br />
                        Email: aviationschool@flying.com
                    </address><br /><br />
                    <h5 className='fw-bold'>Khulna Branch</h5>
                    <address>
                        Contact with us for any help<br />
                        50/B Mohshin Road, Khulna, Bangladesh<br />
                        Tel: + 7958 917 9747 2481 000<br />
                        Fax: + 7958 917 9747 2481 000<br />
                        Email: aviationschool@flying.com
                    </address><br /><br />
                </div>
                <div>
                    <img className='map-img' src={mapImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;