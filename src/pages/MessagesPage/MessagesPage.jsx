import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Message from '../../components/Message/Message';
import useChatContext from '../../services/Chat/useChatContext';


function MessagesPage() {
  const { id } = useParams()
  const chatContext = useChatContext()
  const [novaMensagem, setNovaMensagem] = useState('')

  const [update, setUpdate] = useState(0)
  
  useEffect(() => {
    chatContext.getMessages()
  }, [update])
  
  const messages = chatContext.chatData.messages.filter(message => message.contatoId === +id)


  return (
    <>
      {messages.map(message => <Message message={message} />)}
      <div className="input-box">
        <input value={novaMensagem} onChange={(e) => setNovaMensagem(e.target.value)} type="text" />
        <button onClick={() => {
          chatContext.postMessage(+id, false, novaMensagem).then(res => setUpdate(u => u+1))
        }}>enviar mensagem</button>
        <button onClick={() => console.log(chatContext.chatData)}>log</button>
      </div>
    </>
  );
}

export default MessagesPage;