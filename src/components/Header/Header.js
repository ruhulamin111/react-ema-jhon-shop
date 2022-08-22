import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className='header-top'>
            <div className='header'>
                <div>
                    <a href="#home">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className='nav'>
                    <a href="#home">Home</a>
                    <a href="#shop">Shop</a>
                    <a href="#order">Order</a>
                    <a href="#about">About</a>
                </div>
            </div>

        </div>
    );
};

export default Header;