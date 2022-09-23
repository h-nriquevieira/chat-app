import axios from "axios"
import MessageModel from "../../models/MessageModel"

const url = 'http://localhost:8080/'

export default function chatContextBuilder([chatData, setChatData]) {
  return {
    chatData,
    getContacts: () => {
      _getContacts()
        .then(res => setChatData(prev => ({ ...prev, contacts: res })))
    },
    getMessages: () => {
      _getMessages()
        .then(res => setChatData(prev => ({ ...prev, messages: res })))
    },
    postMessage: (id, sentByContact, content) => {
      return _postMessage(chatData.messages, id, sentByContact, content)
    }
  }
}


function _getContacts() {
  return axios.get(url + 'contato')
    .then(res => res.data)
}

function _getMessages() {
  return axios.get(url + 'mensagem')
    .then(res => res.data)
}

function _getFormatedDate() {
  //"2021-03-29T13:55:52.480Z"
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDay()
  const hour = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const miliseconds = date.getMilliseconds()

  return `${year}-${month}-${day}T${hour}:${minutes}:${seconds}.${miliseconds}Z`
}

function _postMessage(messages, contactId, sentByContact, content) {
  const newMessage = new MessageModel(messages.length + 1, contactId, sentByContact, content, _getFormatedDate())
  return axios.post(url + 'mensagem', newMessage).then(res => res.data)
}
