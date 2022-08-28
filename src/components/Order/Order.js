import React from 'react';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/useProducts';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';
import './Order.css';

const Order = () => {
    const [products] = useProducts()
    const [cart] = useCart(products)
    const removeBtn = (id) => {
        removeFromDb(id)
    }
    const confirmOrder = () => {
        alert('Your order is successfully completed')
    }
    const deleteOrder = () => {
        deleteShoppingCart();
    }

    return (
        <div className='container'>
            <div className='shop'>
                <div className="order-review">
                    {
                        cart.map(product => <CartItem
                            key={product.id}
                            removeBtn={removeBtn}
                            product={product}
                        ></CartItem>)
                    }
                </div>
                <div className="orders">
                    <Cart cart={cart}>
                        <div className='order-btn'>
                            <button onClick={confirmOrder}>Confirm</button>
                            <button onClick={deleteOrder}>Delete</button>
                        </div>
                    </Cart>
                </div>
            </div>

        </div>
    );
};

export default Order;