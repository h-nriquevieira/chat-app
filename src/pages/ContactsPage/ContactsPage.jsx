import React, { useState, useEffect } from 'react';
import './ContactsPage.css'
import useChatContext from '../../services/Chat/useChatContext'

function ContactsPage() {
  const chatContext = useChatContext()

  const [update, setUpdate] = useState(0)

  useEffect(() => {
    chatContext.getContacts()
    chatContext.getMessages()
  }, [update])

  return (
    <div className="contacts-page">

    </div>
  );
}

export default ContactsPage;