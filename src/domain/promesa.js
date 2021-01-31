import { DateTime } from 'luxon'

export class Promesa {

  constructor(descripcionPromesa, fecha = DateTime.local()) {
    this.descripcion = descripcionPromesa
    this.fecha = DateTime.fromISO(fecha)
  }

  get fechaAMostrar() {
    return this.fecha.toFormat('dd/MM/yyyy')
  }

}