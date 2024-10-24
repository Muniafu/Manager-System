import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import './Register.css'; // Import the CSS file

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('employee'); // Default role is employee
    const [error, setError] = useState('');
    const { register } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        await register(name, email, password, role);
        } catch (err) {
        setError(err.response.data.message || 'Registration failed');
        }
    };

    return (
        <div className="register-container">
        <h1 className="register-title">Register</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
            />
            </div>
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
            <div className="form-group">
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="employee">Employee</option>
                <option value="admin">Admin</option>
            </select>
            </div>
            <div className="link-to-login">
            <p>
                <Link to="/login">Already Registered...?</Link>
            </p>
            </div>
            <button type="submit" className="register-btn">Register</button>
        </form>
        </div>
    );
};

export default Register;