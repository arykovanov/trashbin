import React from 'react';
import './Message.css';

const Message = ({ text, type = 'request' }) => {
  // type can be 'request' (user) or 'response' (bot)
  
  return (
    <div className={`message-wrapper message-${type}`}>
      <div className="message-bubble">
        <p className="message-text">{text}</p>
      </div>
    </div>
  );
};

export default Message;
