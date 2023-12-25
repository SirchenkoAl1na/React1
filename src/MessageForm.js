import React, { useState } from 'react';

const MessageForm = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    // Вивести дані в консоль при кліку на кнопку
    console.log('Name:', name);
    console.log('Message:', message);
  };

  return (
    <div className="message-form">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={handleMessageChange}
        placeholder="Enter your message"
      ></textarea>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default MessageForm;
