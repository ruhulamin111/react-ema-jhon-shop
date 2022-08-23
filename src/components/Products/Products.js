import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Products = ({ product, addToCart }) => {
    const { img, name, price, ratings, seller, stock } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name.slice(0, 15)}</h3>
            <p>Price: <b>{price} $</b></p>
            <p>Seller: <b>{seller}</b></p>
            <p>Stock: <b>{stock}</b></p>
            <p>Ratings: <b>{ratings}</b></p>
            <div className='button'>
                <button onClick={() => addToCart(product)}>
                    Add to Cart
                    <i><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></i>
                </button>
                <button>Order Now</button>
            </div>
        </div >
    );
};

export default Products;