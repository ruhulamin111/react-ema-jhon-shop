import React from 'react';
import useCart from '../../hooks/useCart/useCart';

import { addToDb, } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useCart(products);
    const [page, setPage] = useState(0)
    const [pageNumber, setPageNumber] = useState(0)
    const [size, setSize] = useState(10)

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, size]);

    useEffect(() => {
        fetch('http://localhost:5000/productcount')
            .then(res => res.json())
            .then(data => {
                const count = data.countPage;
                const pages = Math.ceil(count / 10)
                setPage(pages)
            })
    }, [])

    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exits = products.find(product => product.id === selectedProduct.id);
        if (!exits) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }
        else {
            exits.quantity = exits.quantity + 1;
            const rest = products.filter(product => product.id !== selectedProduct.id);
            newCart = [...rest, exits];
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
    }

    return (
        <div className='container'>
            <div className='shop'>
                <div>
                    <div className="products">
                        {
                            products.map(product => <Products
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                            ></Products>)
                        }
                    </div>
                    <div className='pagination'>
                        {
                            [...Array(page).keys()].map((number, index) => <button
                                key={index}
                                onClick={() => setPageNumber(number)}
                                className={pageNumber === number ? 'selected' : ''}
                            > {number + 1}</button>)
                        }
                        <select onChange={e => setSize(e.target.value)}>
                            <option value="10" >10</option>
                            <option value="15" >15</option>
                            <option value="20" >20</option>
                        </select>
                    </div>
                </div>
                <div className="orders">
                    <Cart cart={cart} >
                        <Link to='/order'>
                            <div className='order-btn'>
                                <button>Proceed Checkout</button>
                            </div>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div >
    );
};

export default Shop;