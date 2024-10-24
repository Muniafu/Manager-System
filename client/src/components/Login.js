import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await login(email, password);
        } catch (err) {
        setError('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
        <h1 className="login-title">Login</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            </div>
            <div className="form-group">
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            </div>
            <div className="link-to-register">
            <p>
                <Link to="/">Not Registered User...?</Link>
            </p>
            </div>
            <button type="submit" className="login-btn">Login</button>
        </form>
        </div>
    );
};

export default Login;