import './App.css'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

import { PoliticsRoutes } from './routes'

function App() {
  return (
    <div className="App">
      <PoliticsRoutes/>
    </div>
  )
}

export default App
