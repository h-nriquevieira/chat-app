export default class MessageModel {
  constructor(id, contatoId, enviadaPeloContato, conteudo, datahora) {
    this.id = id
    this.contatoId = contatoId
    this.enviadaPeloContato = enviadaPeloContato
    this.conteudo = conteudo
    this.datahora = datahora
  }
}