import React from 'react';
import './CartItem.css';

const CartItem = ({ product }) => {
    const { price, name, img } = product;

    return (
        <div className='item'>
            <div className='img-container'>
                <img src={img} alt="" />
            </div>
            <div className='text-container'>
                <div>
                    <h3>{name.slice(0, 15)}</h3>
                    <p>Price: <b>{price} $</b></p>
                </div>
                <div className='butto'>
                    <button>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;