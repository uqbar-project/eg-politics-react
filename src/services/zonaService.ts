import axios from 'axios'
import { SERVER_CONNECTION } from './serverConstants'
import { Candidate } from '../domain/candidate'

const ZONA_URI = '/zonas'

class ZonaService {

  async zonas() {
    const callToZonas = await axios.get(SERVER_CONNECTION + ZONA_URI)
    return callToZonas.data
  }

  async getZonaSeleccionada(id: number) {
    const callToZonaSeleccionada = await axios.get(`${SERVER_CONNECTION}${ZONA_URI}/${id}`)
    const zona = callToZonaSeleccionada.data
    zona.candidates = zona.candidates.map(({ id, nombre, partido, votos }: Candidate) => {
      const candidate = new Candidate(id, nombre, partido, [])
      candidate.votos = votos
      return candidate
    })
    return zona
  }

}

export const zonaService = new ZonaService()
