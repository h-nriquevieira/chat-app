import React, { useState, useEffect } from 'react';
import './ContactsPage.css'
import useChatContext from '../../services/Chat/useChatContext'
import { NavLink } from 'react-router-dom';

function ContactsPage(props) {
  const chatContext = useChatContext()

  const [update, setUpdate] = useState(0)

  useEffect(() => {
    chatContext.getContacts()
    chatContext.getMessages()
  }, [update])

  
  return (
    <div className="contacts-page">
      {chatContext.chatData.contacts.map(contact => <NavLink to={`/message/${contact.id}`}>{contact.nome}</NavLink>)}
      {props.children}
    </div>
  );
}

export default ContactsPage;