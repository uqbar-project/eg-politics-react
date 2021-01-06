import axios from "axios"
import { SERVER_CONNECTION } from "./serverConstants"

class ZonaService {

  async zonas() {
    const callToZonas = await axios.get(SERVER_CONNECTION + '/zonas')
    return callToZonas.data
  }

  async getZonaSeleccionada(id) {
    const callToZonaSeleccionada = await axios.get(SERVER_CONNECTION + '/zonas/' + id)
    return callToZonaSeleccionada.data
  }

}

export const zonaService = new ZonaService()
