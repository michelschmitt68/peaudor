import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Accueil from "./components/pages/accueil/AccueilPage";
import NosExpertes from "./components/pages/nosExpertes/NosExpertesPage";
import NotreCentre from "./components/pages/notreCentre/NotreCentrePage";
import ChequesCadeaux from "./components/pages/chequeCadeaux/ChequesCadeauxPage";
import NosProduits from "./components/pages/nosProduits/NosProduitsPage";
import MonCompte from "./components/pages/monCompte/MonComptePage";
import RendezVousPage from './components/pages/rendezVous/RendezVousPage';
import Cryolipolyse from './components/pages/soins/Cryolipolyse';
import BronzageUV from './components/pages/soins/BronzageUV';
import BeauteDuRegard from './components/pages/soins/BeauteDuRegard';
import BeauteDuSourir from './components/pages/soins/BeauteDuSourir';
import EpilationAuFil from './components/pages/soins/EpilationAuFil';
import EpilationALaCire from './components/pages/soins/EpilationALaCire';
import Maquillage from './components/pages/soins/Maquillage';
import SoinsDesMains from './components/pages/soins/SoinsDesMains';
import SoinsDesPieds from './components/pages/soins/SoinsDesPieds';
import SoinsDuCorps from './components/pages/soins/SoinsDuCorps';
import SoinsDuVisage from './components/pages/soins/SoinsDuVisage';
import VerniSemiPermanent from './components/pages/soins/VerniSemiPermanent';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/nos-expertes" element={<NosExpertes />} />
        <Route path="/notre-centre" element={<NotreCentre />} />
        <Route path="/cheques-cadeaux" element={<ChequesCadeaux />} />
        <Route path="/nos-produits" element={<NosProduits />} />
        <Route path="/mon-compte" element={<MonCompte />} />
        <Route path="/rendez-vous" element={<RendezVousPage />} />
        <Route path="/soins/cryolipolyse" element={<Cryolipolyse />} />
        <Route path="/soins/bronzage-uv" element={<BronzageUV />} />
        <Route path="/soins/epilation-au-fil" element={<EpilationAuFil />} />
        <Route path="/soins/epilation-a-la-cire" element={<EpilationALaCire />} />
        <Route path="/soins/beaute-du-regard" element={<BeauteDuRegard />} />
        <Route path="/soins/beaute-du-sourir" element={<BeauteDuSourir />} />
        <Route path="/soins/maquillage" element={<Maquillage />} />
        <Route path="/soins/soins-des-mains" element={<SoinsDesMains />} />
        <Route path="/soins/soins-des-pieds" element={<SoinsDesPieds />} />
        <Route path="/soins/soins-du-corps" element={<SoinsDuCorps />} />
        <Route path="/soins/soins-du-visage" element={<SoinsDuVisage />} />
        <Route path="/soins/verni-semi-permanent" element={<VerniSemiPermanent />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
