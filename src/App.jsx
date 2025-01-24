import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Accueil from "./components/pages/accueil/AccueilPage";
import NosExpertes from "./components/pages/nosExpertes/NosExpertesPage";
import NotreCentre from "./components/pages/notreCentre/NotreCentrePage.jsx";
import ChequesCadeaux from "./components/pages/chequeCadeaux/ChequesCadeauxPage";
import NosProduits from "./components/pages/nosProduits/nosProduitsPage.jsx";
import MonCompte from "./components/pages/monCompte/MonComptePage";
import RendezVousPage from "./components/pages/rendezVous/RendezVousPage";
import Soins from "./components/pages/soins/Soins.jsx";
import BronzageUV from "./components/pages/soins/BronzageUV.jsx";
import Actualites from "./components/pages/nosOffres/nouveautes/Actualites.jsx";
import OffresDuMoment from "./components/pages/nosOffres/offres/OffresDuMoment.jsx"
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
            path="/soins/:soinId"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Soins />
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
            path="/soins/:soinId"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Soins />
              </motion.div>
            }
          />
          <Route
            path="/soins/:soinId"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Soins />
              </motion.div>
            }
          />
          <Route
            path="/soins/:soinId"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Soins />
              </motion.div>
            }
          />
          <Route
            path="/soins/:soinId"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Soins />
              </motion.div>
            }
          />
          <Route
            path="/soins/:soinId"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Soins />
              </motion.div>
            }
          />
          <Route
            path="/soins/:soinId"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Soins />
              </motion.div>
            }
          />
          <Route
            path="/soins/:soinId"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Soins />
              </motion.div>
            }
          />
          <Route
            path="/soins/:soinId"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Soins />
              </motion.div>
            }
          />
          <Route
            path="/soins/soinId"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Soins />
              </motion.div>
            }
          />
          <Route
            path="/soins/soinId"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Soins />
              </motion.div>
            }
          />
          <Route
            path="/soins/soinId"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Soins />
              </motion.div>
            }
          />
          <Route
            path="/actualites"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Actualites />
              </motion.div>
            }
          />
          <Route
            path="/offres-du-moment"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <OffresDuMoment />
              </motion.div>
            }
          />
          <Route
            path="/soldes"
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
