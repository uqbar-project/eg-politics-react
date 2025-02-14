import { Candidate } from "./candidate"

export type Zona = {
  id: number,
  descripcion: string,
  candidates: Candidate[],
}