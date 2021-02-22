import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { ConsultaCandidates } from './components/ConsultaCandidates'
import { FichaCandidate } from './components/FichaCandidate'

export const PoliticsRoutes = () => (
  <Router>
      <Switch>
          <Route exact path="/" component={ConsultaCandidates} />
          <Route path="/ficha/:id" component={FichaCandidate} />
      </Switch>
  </Router>
)