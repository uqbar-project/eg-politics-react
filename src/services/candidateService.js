import { Candidate } from "../domain/candidate"

const candidates = [
  new Candidate('Laura Comizzo', 'PJ', ['Acabar con la inseguridad', 'Mejorar el bienestar general']),
  new Candidate('Julián Mosquera', 'PUNSAM', ['Subir el nivel de excelencia académico']),
  new Candidate('Eleonor Rigby', 'Unión Beatle', ['Que la gente no se sienta tan sola', 'Subir el subsidio en educación', 'Bajar el desempleo']),
  new Candidate('Alcalde Diamante', 'Partido Demócrata', []),
  new Candidate('Bob Patiño', 'Partido Republicano', ['Die Bart Die', 'Alemán obligatorio en las escuelas']),
  new Candidate('Kang', 'Aliens Unidos', ['Girar y girar hacia la libertad']),
  new Candidate('Kodos', 'Partido Alienígena Auténtico', ['Banderitas para unos', 'Aborto para otros']),
]

class CandidateService {

  async buscarPorNombre(nombre) {
    return candidates.find((candidate) => candidate.buscarPorNombre(nombre))
  }

  async buscarPorId(id) {
    return candidates.find((candidate) => candidate.id === parseInt(id))
  }

  async actualizar(candidate) {
    
  }
}

export const candidateService = new CandidateService()
