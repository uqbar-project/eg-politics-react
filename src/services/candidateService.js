import axios from "axios"
import { Candidate } from "../domain/candidate"
import { SERVER_CONNECTION } from "./serverConstants"

class CandidateService {

  async buscarPorId(id) {
    const candidate = await axios.get(SERVER_CONNECTION + '/candidatos/' + id)
    const { nombre, partido, promesas } = candidate.data
    return new Candidate(nombre, partido.nombre, promesas)
  }

  async actualizar(candidate) {
    await axios.put(SERVER_CONNECTION + 'candidatos/' + candidate.id, candidate)
  }
}

export const candidateService = new CandidateService()
