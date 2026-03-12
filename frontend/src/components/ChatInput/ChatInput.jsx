import React, { useState } from 'react';
import Button from '../Button/Button';
import './ChatInput.css';

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  return (
    <form className="chat-input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="chat-input-field"
        placeholder="Type your message here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="primary" type="submit">Send</Button>
    </form>
  );
};

export default ChatInput;
