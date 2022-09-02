import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'

const SignIn = () => {


    return (
        <div className='login-container'>
            <h2>Sign In</h2>
            <form>
                <label htmlFor="">Email</label>
                <input type="email" name="" placeholder='email' />
                <label htmlFor="">Password</label>
                <input type="password" name="" placeholder='password' />
                <input className='submit' type="submit" value="Sign In" />
            </form>
            <div className='social-login'>
                <p>New to Ema John? <Link to='/signup'>Create a new account</Link> </p>
                <div className='or-sign'>
                    <span>Or</span>
                </div>
                <input className='submit2' type="submit" value="Google Sign In" />

            </div>

        </div>
    );
};

export default SignIn;