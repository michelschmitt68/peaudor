import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Accueil from "./components/pages/accueil/AccueilPage";
import NosExpertes from "./components/pages/nosExpertes/NosExpertesPage";
import NotreCentre from "./components/pages/notreCentre/notreCentre.jsx";
import ChequesCadeaux from "./components/pages/chequeCadeaux/ChequesCadeauxPage";
import NosProduits from "./components/pages/nosProduits/nosProduitsPage.jsx";
import MonCompte from "./components/pages/monCompte/MonComptePage";
import RendezVousPage from "./components/pages/rendezVous/RendezVousPage";
import Cryolipolyse from "./components/pages/soins/Cryolipolyse.jsx";
import BronzageUV from "./components/pages/soins/BronzageUV.jsx";
import BeauteDuRegard from "./components/pages/soins/BeauteDuRegard.jsx";
import BeauteDuSourire from "./components/pages/soins/BeauteDuSourire.jsx";
import EpilationAuFil from "./components/pages/soins/EpilationAuFil.jsx";
import EpilationALaCire from "./components/pages/soins/EpilationALaCire.jsx";
import Maquillage from "./components/pages/soins/Maquillage.jsx";
import SoinsDesMains from "./components/pages/soins/SoinsDesMains.jsx";
import SoinsDesPieds from "./components/pages/soins/SoinsDesPieds.jsx";
import SoinsDuCorps from "./components/pages/soins/SoinsDuCorps.jsx";
import SoinsDuVisage from "./components/pages/soins/SoinsDuVisage.jsx";
import VerniSemiPermanent from "./components/pages/soins/VerniSemiPermanent.jsx";
import BeauteEnDuo from "./components/pages/soins/BeauteEnDuo.jsx";
import Soldes from "./components/pages/nosOffres/soldes/Soldes.jsx";
import VentesPrivees from "./components/pages/nosOffres/ventesPrivees/VentesPrivees.jsx";
import MentionsLegales from "./components/pages/MentionsLegales.jsx";
import CGV from "./components/pages/CGV.jsx";

const pageVariants = {
  initial: { opacity: 0, x: "100%" },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: "-100%" },
};

const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Accueil />
              </motion.div>
            }
          />
          <Route
            path="/nos-expertes"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <NosExpertes />
              </motion.div>
            }
          />
          <Route
            path="/notre-centre"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <NotreCentre />
              </motion.div>
            }
          />
          <Route
            path="/cheques-cadeaux"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <ChequesCadeaux />
              </motion.div>
            }
          />
          <Route
            path="/nos-produits"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <NosProduits />
              </motion.div>
            }
          />
          <Route
            path="/mon-compte"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <MonCompte />
              </motion.div>
            }
          />
          <Route
            path="/rendez-vous"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <RendezVousPage />
              </motion.div>
            }
          />
          <Route
            path="/soins/cryolipolyse"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Cryolipolyse />
              </motion.div>
            }
          />
          <Route
            path="/soins/bronzage-uv"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <BronzageUV />
              </motion.div>
            }
          />
          <Route
            path="/soins/epilation-au-fil"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <EpilationAuFil />
              </motion.div>
            }
          />
          <Route
            path="/soins/beaute-en-duo"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <BeauteEnDuo />
              </motion.div>
            }
          />
          <Route
            path="/soins/epilation-a-la-cire"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <EpilationALaCire />
              </motion.div>
            }
          />
          <Route
            path="/soins/beaute-du-regard"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <BeauteDuRegard />
              </motion.div>
            }
          />
          <Route
            path="/soins/beaute-du-sourire"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <BeauteDuSourire />
              </motion.div>
            }
          />
          <Route
            path="/soins/maquillage"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Maquillage />
              </motion.div>
            }
          />
          <Route
            path="/soins/soins-des-mains"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <SoinsDesMains />
              </motion.div>
            }
          />
          <Route
            path="/soins/soins-des-pieds"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <SoinsDesPieds />
              </motion.div>
            }
          />
          <Route
            path="/soins/soins-du-corps"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <SoinsDuCorps />
              </motion.div>
            }
          />
          <Route
            path="/soins/soins-du-visage"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <SoinsDuVisage />
              </motion.div>
            }
          />
          <Route
            path="/soins/verni-semi-permanent"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <VerniSemiPermanent />
              </motion.div>
            }
          />
          <Route
            path="/nos-soldes"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Soldes />
              </motion.div>
            }
          />
          <Route
            path="/ventes-privees"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <VentesPrivees />
              </motion.div>
            }
          />
          <Route
            path="/mentions-legales"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <MentionsLegales />
              </motion.div>
            }
          />
          <Route
            path="/cgv"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <CGV />
              </motion.div>
            }
          />
        </Routes>
        <Footer />
      </AnimatePresence>

    </>
  );
};

export default App;
