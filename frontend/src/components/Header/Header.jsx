import React from 'react';
import Button from '../Button/Button';
import './Header.css';

const Header = ({ onLogout }) => {
  return (
    <header className="chat-header">
      <div className="header-avatar"></div>
      <div className="header-info">
        <h2 className="header-title">User Profile</h2>
        <div className="header-status-row">
          <div className="status-label">
            <span className="status-text">Online</span>
          </div>
        </div>
        <p className="header-description">Active user chatting</p>
      </div>
      <div className="header-actions">
        <Button variant="secondary" onClick={onLogout}>
          Logout
        </Button>
      </div>
    </header>
  );
};

export default Header;
