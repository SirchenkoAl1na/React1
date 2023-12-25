import React from 'react';
import UserHeader from './UserHeader';
import MessageForm from './MessageForm';

const App = () => {
  return (
    <div className="app">
      <UserHeader />
      <MessageForm />
      {/* Додатковий контент вашого додатку */}
    </div>
  );
};

export default App;
