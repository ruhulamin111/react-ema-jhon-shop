import React from 'react';
import './Products.css';

const Products = (props) => {
    const { img, category, name, price, ratings, seller, shipping, stock } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h2>{category}</h2>
            <h3>{name.slice(0, 15)}</h3>
            <p>Price: {price} $</p>
            <p>Seller: {seller}</p>
            <p>Shipping: {shipping} $</p>
            <p>Stock: {stock}</p>
            <p>Ratings: {ratings}</p>
            <div className='button'>
                <button>Add to Cart</button>
                <button>Order Now</button>
            </div>

        </div>
    );
};

export default Products;