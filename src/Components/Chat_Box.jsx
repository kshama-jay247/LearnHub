import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Card = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello, How are you?", fromUser: false },
    { id: 2, text: "I'm good, thanks! How about you?", fromUser: true },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const callLocalAPI = async (query) => {
    try {
      const response = await axios.post('https://sri-7.onrender.com/chat', 
        { query: query },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Your FastAPI returns {response: "..."}, not {reply: "..."}
      const aiText = response.data.response || "No response";
      return aiText;

    } catch (error) {
      console.error('API Error:', error);
      return "Sorry, something went wrong.";
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!input.trim()) return;
    
    const userMessage = { id: Date.now(), text: input.trim(), fromUser: true };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = input.trim();
    setInput('');
    setLoading(true);
    
    try {
      const aiResponse = await callLocalAPI(currentInput);
      const aiMessage = { id: Date.now() + 1, text: aiResponse, fromUser: false };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = { id: Date.now() + 1, text: "Sorry, something went wrong.", fromUser: false };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledWrapper>
      <div className="card-container">
        <div className="card-header">
          <div className="img-avatar" />
          <div className="text-chat">Chat</div>
        </div>
        <div className="card-body">
          <div className="messages-container">
            {messages.map(message => (
              <div key={message.id} className={`message-box ${message.fromUser ? 'right' : 'left'}`}>
                <p>{message.text}</p>
              </div>
            ))}
            {loading && <div className="message-box left"><p>Loading...</p></div>}
          </div>
          <div className="message-input">
            <form onSubmit={handleSubmit}>
              <textarea
                placeholder="Type your message here"
                className="message-send"
                value={input}
                onChange={e => setInput(e.target.value)}
                rows={3}
              />
              <button type="submit" className="button-send" disabled={loading}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* (Keep your existing styles here for .card-container, .card-header, .card-body, etc.) */

  .card-container {
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    width: 280px;
  }
  .card-header {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }
  .card-header .img-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 20px;
    background-color: #333;
  }
  .card-header .text-chat {
    color: black;
    margin: 0;
    font-size: 20px;
  }
  .card-body {
    flex: 1;
    overflow-y: auto;
    max-height: 400px;
  }
  .messages-container {
    padding: 15px;
    max-height: 300px;
    overflow-y: auto;
  }
  .message-box {
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 10px;
  }
  .message-box.left {
    background-color: #f1f1f1;
    color: black;
    font-size: 13px;
    text-align: left;
  }
  .message-box.right {
    background-color: #333;
    color: #fff;
    font-size: 13px;
    text-align: right;
  }
  .message-input {
    padding: 5px;
    border-top: 1px solid #ccc;
    display: flex;
    align-items: center;
  }
  .message-input .message-send {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    resize: none;
    font-size: 14px;
    color: black;
  }
  .message-input .button-send {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-left: 10px;
    border-radius: 10px;
    font-size: 13px;
  }
  .message-input .button-send:hover:enabled {
    background-color: #f1f1f1;
    color: #333;
  }
  .message-input .button-send:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export default Card;