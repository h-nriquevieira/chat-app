import { useEffect, useState } from 'react';
import './App.css';
import chatContextBuilder from './services/Chat/chatContextBuilder';
import ChatContext from './services/Chat/ChatContext'

function App() {
  const chatContext = chatContextBuilder(useState({ contacts: [], messages: [] }))

  useEffect(() => {
    chatContext.getContacts()
    chatContext.getMessages()
  },[])


  return (
    <ChatContext.Provider value={chatContext}>
      <div className="App">
        <button onClick={() => console.log(chatContext.chatData)}>Log</button>
      </div>
    </ChatContext.Provider>
  );
}

export default App;
