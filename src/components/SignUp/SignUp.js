import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const handleName = event => {
        setName(event.target.value)
    }
    const handleEmail = event => {
        setEmail(event.target.value)
    }
    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your password did not matched')
            return;
        }
    }



    return (
        <div className='login-container'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input onBlur={handleName} type="name" name="" placeholder='name' />
                <label htmlFor="">Email</label>
                <input onBlur={handleEmail} type="email" name="" placeholder='email' />
                <label htmlFor="">Password</label>
                <input onBlur={handlePassword} type="password" name="" placeholder='password' />
                <label htmlFor="">Confirm Password</label>
                <input onBlur={handleConfirmPassword} type="password" name="" placeholder='confirm password' />
                <p className='error'>{error}</p>
                <input className='submit' type="submit" value="Sign In" />
            </form>
            <div className='social-login'>
                <p>Already have an account? <Link to='/signin'>Please sign in</Link> </p>
                <div className='or-sign'>
                    <span>Or</span>
                </div>
                <input className='submit2' type="submit" value="Google Sign In" />

            </div>

        </div>
    );
};

export default SignUp;