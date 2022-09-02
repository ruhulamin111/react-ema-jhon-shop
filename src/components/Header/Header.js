import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () => {
        signOut(auth)
    }

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
                    {/* {user && <span>{user?.displayName}</span>} */}
                    {user ? <span onClick={handleSignOut}>Sign Out</span>
                        : <Link to='/signin'>Sign In</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;