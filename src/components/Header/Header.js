import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className='header-top'>
            <div className='header'>
                <div>
                    <Link to='/shop'>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className='nav'>
                    <Link to='/shop'>Shop</Link>
                    <Link to='/order'>Order</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/signin'>Sign In</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;