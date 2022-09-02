import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignIn.css'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
    const navigate = useNavigate();

    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>{error.message}</p>
    }
    if (user) {
        navigate('/shop')
    }


    return (
        <div className='login-container'>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Email</label>
                <input onBlur={handleEmail} type="email" name="" placeholder='email' />
                <label htmlFor="">Password</label>
                <input onBlur={handlePassword} type="password" name="" placeholder='password' />
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