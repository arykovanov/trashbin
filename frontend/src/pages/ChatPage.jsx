import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header/Header';
import Message from '../components/Message/Message';
import ChatInput from '../components/ChatInput/ChatInput';
import './ChatPage.css';

const ChatPage = ({ onLogout }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I am your simple chatbot. How can I help you today?", type: "response" }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text) => {
    const newMsg = { id: Date.now(), text, type: 'request' };
    setMessages((prev) => [...prev, newMsg]);

    // Simulate bot response after a delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev, 
        { id: Date.now(), text: "I received your message!", type: 'response' }
      ]);
    }, 1000);
  };

  return (
    <div className="chat-page">
      <Header onLogout={onLogout} />
      <div className="chat-content">
        <div className="messages-list">
          {messages.map((msg) => (
            <Message key={msg.id} text={msg.text} type={msg.type} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatPage;
