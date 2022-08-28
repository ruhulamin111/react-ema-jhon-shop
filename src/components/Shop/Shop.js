import React from 'react';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/useProducts';
import { addToDb, } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';
import { Link } from "react-router-dom";

const Shop = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

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