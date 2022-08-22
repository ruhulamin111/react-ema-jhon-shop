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

    return (
        <div className='container'>
            <div className='shop'>
                <div className="products">
                    {
                        products.slice(0, 30).map(product => <Products
                            key={product.id}
                            product={product}
                        ></Products>)
                    }
                </div>
                <div className="orders">
                    <h2>orders</h2>
                </div>
            </div>

        </div>
    );
};

export default Shop;