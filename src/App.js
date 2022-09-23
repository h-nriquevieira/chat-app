import { useEffect, useState } from 'react';
import './App.css';
import chatContextBuilder from './services/Chat/chatContextBuilder';
import ChatContext from './services/Chat/ChatContext'

function App() {
  const chatContext = chatContextBuilder(useState({ contacts: [], messages: [] }))

  const [update, setUpdate] = useState(0)

  useEffect(() => {
    chatContext.getContacts()
    chatContext.getMessages()
  }, [update])


  return (
    <ChatContext.Provider value={chatContext}>
      App
    </ChatContext.Provider>
  );
}

export default App;
