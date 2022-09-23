import { useEffect, useState } from 'react';
import './App.css';
import chatContextBuilder from './services/Chat/chatContextBuilder';
import ChatContext from './services/Chat/ChatContext'
import ContactsPage from './pages/ContactsPage/ContactsPage';

function App() {
  const chatContext = chatContextBuilder(useState({ contacts: [], messages: [] }))

  return (
    <ChatContext.Provider value={chatContext}>
      <ContactsPage>

      </ContactsPage>
    </ChatContext.Provider>
  );
}

export default App;
