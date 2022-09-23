import axios from "axios"

const url = 'http://localhost:8080/'

export default function chatContextBuilder([chatData, setChatData]) {
  return {
    chatData,
    getContacts: () => {
      _getContacts()
        .then(res => setChatData(prev => ({...prev, contacts: res})))
    },
    getMessages: () => {
      _getMessages()
        .then(res => setChatData(prev => ({...prev, messages: res})))
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