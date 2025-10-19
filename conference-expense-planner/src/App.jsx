import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import SelectionPage from './pages/SelectionPage';
import ShowDetailsModal from './components/ShowDetailsModal';

// Galvenais lietotnes komponents ar maršrutiem un pastāvīgu Navbar + modāli
export default function App(){
  return (
    <>
     {/* vinmer redzama galvene */}
      <Navbar />
      {/* Lappušu maršruti */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/select" element={<SelectionPage />} />
      </Routes>
      {/* Modālais logs ar izvēļu kopsavilkumu */}
      <ShowDetailsModal />
    </>
  );
}
