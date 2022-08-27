import React from 'react';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/useProducts';

const Order = () => {
    const [products] = useProducts()
    const [cart] = useCart(products)

    return (
        <div>
            <h2>Order components : {products.length}</h2>
            <h2>Cart Amount : {cart.length}</h2>
        </div>
    );
};

export default Order;