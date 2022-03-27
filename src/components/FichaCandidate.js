import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { InputText } from 'primereact/inputtext'
import { useRef, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Candidate } from '../domain/candidate'
import { candidateService } from '../services/candidateService'

export const FichaCandidate = function() {
  const {id} = useParams()
  const navigate = useNavigate()
  const toast = useRef(null)
  
  function showError(message) {
    toast.current.show({ severity: 'error', summary: 'Ocurrió un error al actualizar los datos de la persona candidata.', detail: message})
  }

  const [candidate, setCandidate] = useState(new Candidate('', ''))
  const [promesaNueva, setPromesaNueva] = useState('')
  
  const agregarPromesa = () => {
    if (!promesaNueva) return
    candidate.agregarPromesa(promesaNueva)
    const nuevoCandidate = Object.assign(new Candidate(), candidate)
    setCandidate(nuevoCandidate)
    setPromesaNueva('')
    candidateService.actualizar(candidate)
  }

  useEffect(() => {
    const getCandidate = async function() { 
      const candidate = await candidateService.buscarPorId(id)
      setCandidate(candidate)
    }
    getCandidate()
    }, []
  )

  return (
    <div>
      <div className="titulo">
        Consulta de Candidates
      </div>
      <div className="section">
        <span className="etiqueta">{candidate?.nombre}</span>
        <span className="p-tag p-tag-rounded p-tag-warning">{candidate?.partido}</span>
      </div>
      <hr></hr>
      <div className="section">
        <InputText value={promesaNueva} onSubmit={() => agregarPromesa()} onChange={(e) => setPromesaNueva(e.target.value)} placeholder="Ingrese aquí una promesa nueva..." className={promesaNueva ? '' : 'p-invalid'} style={{width: '20em', textAlign: 'left'}}/>
        <Button label="Agregar" className="p-button-primary p-button-raised" onClick={async () => agregarPromesa()}>
        </Button>
      </div>
      <div className="section">
        <DataTable value={candidate?.promesasPorFecha()}>
          <Column field="fechaAMostrar" header="Fecha"></Column>
          <Column field="descripcion" header="Promesa"></Column>
        </DataTable>
      </div>
      <div className="section">
        <Button label="Volver a ver las candidaturas" className="p-button-secondary p-button-raised p-button-outlined" onClick={() => {navigate('/')}}>
        </Button>
      </div>
    </div>
  )
}