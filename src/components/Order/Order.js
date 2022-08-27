import React from 'react';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/useProducts';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';
import './Order.css';

const Order = () => {
    const [products] = useProducts()
    const [cart] = useCart(products)

    return (
        <div className='container'>
            <div className='shop'>
                <div className="order-review">
                    {
                        cart.map(product => <CartItem
                            key={product.id}
                            product={product}
                        ></CartItem>)
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

export default Order;