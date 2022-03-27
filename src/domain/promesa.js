import { DateTime } from "luxon"

const crearFechaRandom = () => DateTime.fromMillis(new Date().getTime() - Math.random() * 364 * 1000 * 60 * 60 * 24)

export class Promesa {

  constructor(descripcionPromesa, fechaRandom = false) {
    this.descripcion = descripcionPromesa
    this.fecha = fechaRandom ? crearFechaRandom() : DateTime.local()
  }

  get fechaAMostrar() {
    return this.fecha.toFormat('dd/MM/yyyy')
  }

}
