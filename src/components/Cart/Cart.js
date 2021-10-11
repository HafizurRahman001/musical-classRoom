import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    return (
        <div className="cart">
            <h4><i class="fas fa-cart-plus"></i> <sup className="fw-bold fs-5">{cart?.length}</sup></h4>
        </div>
    );
};

export default Cart;