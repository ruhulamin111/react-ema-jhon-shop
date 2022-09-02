import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Shipment = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const handleName = event => {
        setName(event.target.value)
    }
    const handlePhone = event => {
        setPhone(event.target.value)
    }
    const handleAddress = event => {
        setAddress(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault();
    }


    return (
        <div className='login-container'>
            <h2>Shipment Information</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input onBlur={handleName} type="text" name="" placeholder='name' />
                <label htmlFor="">Email</label>
                <input onBlur={handleEmail} type="email" name="" placeholder='email' />
                <label htmlFor="">Phone</label>
                <input onBlur={handlePhone} type="number" name="" placeholder='phone' />
                <label htmlFor="">Address</label>
                <input onBlur={handleAddress} type="text" name="" placeholder='address' />
                <input className='submit' type="submit" value="Complete" />
            </form>
        </div>
    );
};

export default Shipment;