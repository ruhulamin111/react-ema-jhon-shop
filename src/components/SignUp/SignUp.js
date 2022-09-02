import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user, loading, error2] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate();

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
        createUserWithEmailAndPassword(email, password)
    }
    if (loading) {
        return <p>Loading...</p>
    }
    if (error) {
        return <p>{error2.message}</p>
    }
    if (user) {
        navigate('/shop')
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
                <input className='submit' type="submit" value="Sign Up" />
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