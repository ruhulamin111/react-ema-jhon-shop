import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        // cart use with spread operator 
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='container'>
            <div className='shop'>
                <div className="products">
                    {
                        products.slice(0, 18).map(product => <Products
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                        ></Products>)
                    }
                </div>
                <div className="orders">
                    <h2>Order Summery</h2>
                    <p>Order Item: {cart.length}</p>
                    <p>Order Item: {cart.length}</p>
                    <p>Order Item: {cart.length}</p>
                    <p>Order Item: {cart.length}</p>
                    <p>Order Item: {cart.length}</p>
                    <div className='order-btn'>
                        <button>Clear Cart</button>
                        <button>Confirm Order</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Shop;