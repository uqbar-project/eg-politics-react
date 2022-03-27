import { candidateService } from "./candidateService"

async function zonasActivas() {
  return [
    {descripcion: 'Elecciones nacionales', id: 1, candidates: [
      await candidateService.buscarPorNombre('Laura Comizzo'),
      await candidateService.buscarPorNombre('Julián Mosquera'),
      await candidateService.buscarPorNombre('Eleonor Rigby')
    ]},
    {descripcion: 'Springfield', id: 2, candidates: [
      await candidateService.buscarPorNombre('Alcalde Diamante'),
      await candidateService.buscarPorNombre('Bob Patiño'),
      await candidateService.buscarPorNombre('Kang'),
      await candidateService.buscarPorNombre('Kodos'),
    ]},
  ]
}

class ZonaService {

  async zonas() {
    return zonasActivas()
  }

}

export const zonaService = new ZonaService()
