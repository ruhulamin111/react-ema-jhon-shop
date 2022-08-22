import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
                    <Cart
                        cart={cart}
                    ></Cart>

                </div>
            </div>

        </div>
    );
};

export default Shop;