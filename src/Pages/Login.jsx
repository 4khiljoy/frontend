import React from 'react';
import './CSS/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-page-container">
        <h1>Login</h1>
        <div className="login-fields">
          <input type="email" placeholder="Your Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Login</button>
        <p className="login-login">
          Don’t have an account? <Link to="/signup"><span>Sign Up</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

