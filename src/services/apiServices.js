import axios from "axios"

const url = 'http://localhost:8080/'

export function getContacts() {
  return axios.get(url + 'contato')
    .then(res => res.data)
}