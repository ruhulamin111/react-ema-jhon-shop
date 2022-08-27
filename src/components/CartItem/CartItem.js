import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartItem.css';

const CartItem = ({ product, removeBtn }) => {
    const { price, name, img, seller, id } = product;

    return (
        <div className='item'>
            <div className='img-container'>
                <img src={img} alt="" />
            </div>
            <div className='text-container'>
                <div>
                    <h3>{name.slice(0, 20)}</h3>
                    <p>Price: <b>{price} $</b></p>
                    <p>Company: <b>{seller}</b></p>
                </div>
                <div className='remove'>
                    <button onClick={() => removeBtn(id)}> <i><FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></i></button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;