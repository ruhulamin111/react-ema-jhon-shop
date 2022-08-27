import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
    const totalCost = total + shipping;
    const tax = parseFloat((totalCost * .1).toFixed(2));
    const grandCost = totalCost + tax;

    /* const quantityTotal = (previous, current) => previous + current.quantity;
    const quantity = cart.reduce(quantityTotal, 0);

    const priceTotal = (previous, current) => previous + current.price;
    const total = cart.reduce(priceTotal, 0);

    const shippingTotal = (previous, current) => previous + current.shipping;
    const shipping = cart.reduce(shippingTotal, 0); */

    return (
        <div className='cart'>
            <h2>Order Summeryyy</h2>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: {total} $</p>
            <p>Shipping Cost: {shipping} $</p>
            <p>Value Added Tax: {tax} $</p>
            <p>Grand Total: {grandCost} $</p>
            <div className='order-btn'>
                <button>Clear Cart</button>
                <button>Confirm Order</button>
            </div>

        </div>
    );
};

export default Cart;