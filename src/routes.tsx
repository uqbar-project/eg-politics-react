import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ConsultaCandidates } from './components/ConsultaCandidates'
import { FichaCandidate } from './components/FichaCandidate'

export const PoliticsRoutes = () => 
    <Routes>
        <Route path="/" element={<ConsultaCandidates/>} />
        <Route path="/ficha/:id" element={<FichaCandidate/>} />
    </Routes>

export const PoliticsRouter = () => 
    <Router>
        <PoliticsRoutes/>
    </Router>

