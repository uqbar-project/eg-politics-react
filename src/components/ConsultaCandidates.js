import { Dropdown } from 'primereact/dropdown'
import { DataTable } from 'primereact/datatable'
import { Button } from 'primereact/button'
import { Column } from 'primereact/column'
import { useEffect, useState } from 'react'
import { zonaService } from '../services/zonaService'
import { isEmpty } from 'lodash'
import { useHistory } from "react-router-dom"

export const ConsultaCandidates = function() {
  const [zonas, setZonas] = useState([])
  const [zonaSeleccionada, setZonaSeleccionada] = useState(undefined)
  const history = useHistory()

  useEffect(() => {
    const getZonas = async function() { 
      const zonas = await zonaService.zonas()
      setZonas(zonas)
      if (!isEmpty(zonas)) {
        setZonaSeleccionada(zonas[0])
      }
    }
    getZonas()
    }, []
  )

  const verFicha = function(candidate) {
    return <Button tooltip="Ver Ficha" className="p-button-secondary p-button-raised p-button-rounded p-button-outlined" onClick={() => {history.push('/ficha/' + candidate.id)}}>
      <i className="pi pi-chevron-right" />
    </Button>
  }

  return (
    <div>
      <div className="titulo">
        Consulta de Candidates
      </div>
      <div className="section">
        <Dropdown style={{width: '20em', textAlign: 'left'}} optionLabel="descripcion" value={zonaSeleccionada} options={zonas} onChange={(e) => {setZonaSeleccionada(e.value)}} placeholder="Seleccione una zona"/>
      </div>
      <div className="section">
        <DataTable value={zonaSeleccionada?.candidates}>
          <Column field="nombre" header="Nombre"></Column>
          <Column field="partido" header="Partido"></Column>
          <Column body={verFicha} />
        </DataTable>
      </div>
    </div>
  )
}