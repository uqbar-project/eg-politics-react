import { DateTime } from 'luxon'

export class Promesa {
  fecha: DateTime

  constructor(public id: number | null, public descripcion: string, _fecha?: string) {
    this.fecha = _fecha ? DateTime.fromISO(_fecha) : DateTime.local()
  }

  get fechaAMostrar() {
    return this.fecha.toFormat('dd/MM/yyyy')
  }

  toDTO(): PromesaDTO {
    return {
      id: this.id,
      accionPrometida: this.descripcion,
      fecha: this.fecha.toFormat('yyyy-MM-dd')
    }
  }
}

export type PromesaDTO = {
  id: number | null,
  accionPrometida: string,
  fecha: string
}