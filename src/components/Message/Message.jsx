import React from 'react';
import './Message.css'

function Message(props) {
  const classes = props.message.enviadoPeloContato ? "message" : "message enviada"
  return (
    <div className={classes}>
      <p>{props.message.conteudo}</p>
      <p className="">{props.message.datahora}</p>
    </div>
  );
}

export default Message;