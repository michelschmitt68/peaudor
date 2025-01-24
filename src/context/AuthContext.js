import React, { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// Création du contexte d'authentification
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // État pour l'utilisateur
  const navigate = useNavigate();

  // Effet pour vérifier l'état de l'utilisateur (authentification)
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Si l'utilisateur est connecté
      } else {
        setUser(null); // Si l'utilisateur n'est pas connecté
      }
    });

    return () => unsubscribe();
  }, []);

  // Fonction de déconnexion
  const logout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth); // Déconnexion
      navigate("/"); // Redirection vers la page d'accueil après la déconnexion
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
