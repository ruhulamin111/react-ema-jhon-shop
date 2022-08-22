import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    const priceSum = (previous, current) => previous + current.price;
    const total = cart.reduce(priceSum, 0);

    const shippingCost = (previous, current) => previous + current.shipping;
    const shippingTotal = cart.reduce(shippingCost, 0);

    const totalCost = total + shippingTotal;
    const tax = totalCost * .01;
    const grandTotal = totalCost + tax;

    return (
        <div className='cart'>
            <h2>Order Summery</h2>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: {total} $</p>
            <p>Shipping Cost: {shippingTotal} $</p>
            <p>Value Added Tax: {tax} $</p>
            <p>Grand Total: {grandTotal} $</p>

            <div className='order-btn'>
                <button>Clear Cart</button>
                <button>Confirm Order</button>
            </div>
        </div>
    );
};

export default Cart;