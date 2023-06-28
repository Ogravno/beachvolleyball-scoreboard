import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StartPage from './pages/StartPage';
import Match from './pages/Match';
import CreateTournement from './pages/CreateTournement';
import Tournements from './pages/Tournements';
import Tournament from './pages/Tournament';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/match/:matchId" element={<Match />} />
        <Route path="/create-tournement" element={<CreateTournement />} />
        <Route path="/tournements" element={<Tournements />} />
        <Route path="/tournament/:tournamentId" element={<Tournament />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
