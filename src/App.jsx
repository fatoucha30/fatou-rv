import react from 'react';
import Navbar from './Components/Navbar';
import Voirpremier from './Components/Voirpremier';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Mesrendezvous} from './Pages/Mesrendezvous'
import {Moncompte} from './Pages/Moncompte'
import Nopage from './Pages/Nopage'
import Acceuil from './Pages/Acceuil'
import { Connexion } from './Pages/Connexion';
import Patient from './Pages/Patient';
import SeConnecter from './Pages/Seconnecter';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';
import SecondCard from './Components/secondCard';
import { Seconddashboard } from './Components/Seconddasboard';
import { Inscrire } from './Pages/inscrire';
import { RV } from './Components/RV';
import { Profil } from './Components/Profil';
import { Voir } from './Components/Voir';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* home */}
          <Route path="/" element={<Navbar />}>
            <Route index element={<Voirpremier />} />
            <Route path="/Mesrendezvous" element={<Mesrendezvous />} />
            <Route path="/Moncompte" element={<Moncompte />} />
            <Route path="/Connexion" element={<Connexion />} />
            <Route path="*" element={<Nopage />} />
            <Route path="/Seconnecter" element={<SeConnecter />} />
            
          </Route>
          {/* dashboard*/}
          <Route path="/Dashboard" element={<Dashboard />}>
            <Route index element={<Acceuil />} />
            <Route path="/Dashboard/Mesrendezvous" element={<Mesrendezvous />} />
            <Route path="/Dashboard/Patient" element={<Patient />} />
            <Route path="/Dashboard/Moncompte" element={<Moncompte />} />
            
          </Route>
<Route path="/RV" element={<RV />} />
<Route path="/Profil" element={<Profil />} />
<Route path="/Voir" element={<Voir />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
