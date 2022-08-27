import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CartItem = ({ product }) => {
    const { price, name, img } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name.slice(0, 15)}</h3>
            <p>Price: <b>{price} $</b></p>
            <div className='button'>
                <button>Order Now</button>
            </div>
        </div>
    );
};

export default CartItem;