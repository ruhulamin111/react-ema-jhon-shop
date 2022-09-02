import React from 'react';
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

        </div>
    );
};

export default SignIn;