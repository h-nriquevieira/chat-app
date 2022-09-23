import { useEffect, useState } from 'react';
import './App.css';
import chatContextBuilder from './services/Chat/chatContextBuilder';
import ChatContext from './services/Chat/ChatContext'
import ContactsPage from './pages/ContactsPage/ContactsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MessagesPage from './pages/MessagesPage';

function App() {
  const chatContext = chatContextBuilder(useState({ contacts: [], messages: [] }))

  return (
    <BrowserRouter>
      <ChatContext.Provider value={chatContext}>
        <ContactsPage>
          <Routes>
            <Route path={'/message/:id'} element={<MessagesPage />} />
          </Routes>
        </ContactsPage>
      </ChatContext.Provider>
    </BrowserRouter>
  );
}

export default App;
