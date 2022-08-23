import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exits = products.find(product => product.id === selectedProduct.id);
        if (!exits) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = products.filter(product => product.id !== selectedProduct.id)
            exits.quantity = exits.quantity + 1;
            newCart = [...rest, exits];
        }

        setCart(newCart);
        addToDb(selectedProduct.id)
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