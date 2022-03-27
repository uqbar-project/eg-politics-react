import { Dropdown } from 'primereact/dropdown'
import { DataTable } from 'primereact/datatable'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { useRef, useEffect, useState } from 'react'
import { zonaService } from '../services/zonaService'
import { isEmpty } from 'lodash'
import { useNavigate } from 'react-router-dom'
import { orderBy } from 'lodash'
import { candidateService} from '../services/candidateService'

export const ConsultaCandidates = function() {
  const [zonas, setZonas] = useState([])
  const [zonaSeleccionada, setZonaSeleccionada] = useState(undefined)
  const navigate = useNavigate()
  const toast = useRef(null)

  useEffect(() => {
    const getZonas = async function() { 
      try {
        const zonas = await zonaService.zonas()
        console.info(zonas)
        if (!isEmpty(zonas)) {
          setZonaSeleccionada(zonas[0])
        }
        setZonas(zonas)
      } catch (e) {
        console.log(e)
        toast.current.show({ severity: 'error', summary: 'Ocurrió un error al traer las zonas de votación.', detail: e.message})
      }
    }
    getZonas()
    }, []
  )


  const registrarVoto = function(candidate) {
    return <Button icon="pi pi-user-plus" tooltip="Registrar Voto" className="p-button-secondary p-button-raised p-button-rounded" onClick={() => {
      candidate.registrarVoto()
      // por ahora es un JSON, se puede hacer una copia
      setZonaSeleccionada({ ...zonaSeleccionada })
      candidateService.actualizar()
    }}/>
  }

  const verFicha = function(candidate) {
    return <Button icon="pi pi-chevron-right" tooltip="Ver Ficha" className="p-button-secondary p-button-raised p-button-rounded p-button-outlined" onClick={() => {navigate('/ficha/' + candidate.id)}}/>
  }

  return (
    <div>
      <div className="titulo">
        Consulta de Candidates
      </div>
      <div className="section">
        <Dropdown style={{width: '20em', textAlign: 'left'}} optionLabel="descripcion" value={zonaSeleccionada} options={zonas} onChange={(e) => {setZonaSeleccionada(e.value)}} placeholder="Seleccione una zona"/>
      </div>
      <div>
        <DataTable value={orderBy(zonaSeleccionada?.candidates, ['votos'], ['desc'])}>
          <Column field="nombre" header="Nombre"></Column>
          <Column field="partido" header="Partido"></Column>
          <Column field="votos" header="Votos"></Column>
          <Column body={registrarVoto} style={{width:'7em'}} />
          <Column body={verFicha} style={{width:'10em'}} />
        </DataTable>
      </div>
    </div>
  )
}