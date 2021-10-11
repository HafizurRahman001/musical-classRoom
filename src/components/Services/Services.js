import React, { useState } from 'react';
import './Services.css'
import useInstruments from '../../Hooks/UseInstruments';
import AllInstruments from '../All Instruments/AllInstruments';
import Cart from '../Cart/Cart';

const Services = () => {
    const [instruments] = useInstruments();   // fetch data by calling useInstruments function
    const [cart, setCart] = useState([]);

    // add handleAddToCartButton
    const handleAddButton = instrument => {
        const newInstrument = [...cart, instrument];
        setCart(newInstrument);
    };
    return (
        <div className="container row mt-3 mx-auto">
            {
                instruments.map(instrument => <AllInstruments
                    key={instrument.id}
                    handleAddButton={handleAddButton}
                    instrument={instrument}>
                </AllInstruments>)
            }
            {
                <Cart cart={cart}></Cart>
            }
        </div>
    );
};

export default Services;