import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Accueil from "./components/pages/accueil/AccueilPage";
import NosExpertes from "./components/pages/nosExpertes/NosExpertesPage";
import NotreCentre from "./components/pages/notreCentre/notreCentrePage";
import RetrouvezNous from "./components/pages/retrouvezNous/retrouvezNousPage";
import ChequesCadeaux from "./components/pages/chequeCadeaux/chequeCadeauxPage";
import NosProduits from './components/pages/nosProduits/NosProduitsPage';


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
      </Routes>
      <Footer />
    </>
  );
};

export default App;
