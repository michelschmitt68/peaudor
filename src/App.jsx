import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Accueil from "./components/pages/accueil/AccueilPage";
import NosExpertes from "./components/pages/nosExpertes/NosExpertesPage";
import NotreCentre from "./components/pages/notreCentre/NotreCentrePage";
import RetrouvezNous from "./components/pages/retrouvezNous/retrouvezNousPage";
import ChequesCadeaux from "./components/pages/chequeCadeaux/ChequesCadeauxPage";
import NosProduits from "./components/pages/nosProduits/NosProduitsPage";
import MonCompte from "./components/pages/monCompte/MonComptePage";
import RendezVousPage from './components/pages/rendezVous/RendezVousPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/nos-expertes" element={<NosExpertes />} />
        <Route path="/notre-centre" element={<NotreCentre />} />
        <Route path="/retrouvez-nous" element={<RetrouvezNous />} />
        <Route path="/cheques-cadeaux" element={<ChequesCadeaux />} />
        <Route path="/nos-produits" element={<NosProduits />} />
        <Route path="/mon-compte" element={<MonCompte />} />
        <Route path="/rendez-vous" element={<RendezVousPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
