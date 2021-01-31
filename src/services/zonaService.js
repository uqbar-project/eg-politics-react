import axios from 'axios'
import { Candidate } from '../domain/candidate'
import { SERVER_CONNECTION } from './serverConstants'

class ZonaService {

  async zonas() {
    const callToZonas = await axios.get(SERVER_CONNECTION + '/zonas')
    return callToZonas.data
  }

  async getZonaSeleccionada(id) {
    const callToZonaSeleccionada = await axios.get(SERVER_CONNECTION + '/zonas/' + id)
    const zona = callToZonaSeleccionada.data
    zona.candidatos = zona.candidatos.map(({ id, nombre, partido, votos }) => {
      const candidate = new Candidate(nombre, partido, [])
      candidate.id = id
      candidate.votos = votos
      return candidate
    })
    return zona
  }

}

export const zonaService = new ZonaService()
