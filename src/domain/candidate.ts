import { sortBy } from 'lodash'
import { Promesa, PromesaDTO } from './promesa'

let lastId = 1

export class Candidate {

  id: number
  promesas: Promesa[]
  votos = 0

  constructor(_id: number, public nombre: string, public partido: string, _promesas: PromesaDTO[] = []) {
    this.id = _id ?? lastId++
    this.promesas = _promesas.map(({ id, accionPrometida, fecha }) => new Promesa(id, accionPrometida, fecha))
  }

  agregarPromesa(descripcionPromesa: string) {
    this.promesas.push(new Promesa(null, descripcionPromesa))
  }

  buscarPorNombre(_nombre: string) {
    return this.nombre === _nombre
  }

  promesasPorFecha() {
    return sortBy(this.promesas, 'fecha')
  }

  registrarVoto() {
    this.votos++
  }
}