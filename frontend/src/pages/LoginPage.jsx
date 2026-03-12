import React from 'react';
import Button from '../components/Button/Button';
import './LoginPage.css';

const LoginPage = ({ onLogin }) => {
  return (
    <div className="login-page">
      <div className="login-section">
        <div className="login-container">
          <h1 className="login-title">Welcome to the Chat App!</h1>
          <p className="login-description">
            Connect with your friends and start chatting now.
          </p>
          <div className="login-action">
            <Button variant="primary" onClick={onLogin}>
              Login with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
