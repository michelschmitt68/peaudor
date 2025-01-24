import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      // Connexion de l'utilisateur avec l'email et le mot de passe
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const authorizedUids = [
        "P1NWZRmagUYnIbeUoPRqm8iXh5V2", // UID 1
        "qFSp7BtzxEZsDzlxJAzmfIf9aj02", // UID 2
      ];
      
      if (authorizedUids.includes(user.uid)) {
        navigate("/"); // Redirection si l'UID est autorisé
      } else {
        setError("Accès refusé : vous n'êtes pas autorisé à vous connecter.");
        await auth.signOut(); // Déconnexion si l'UID n'est pas autorisé
      }
    } catch (err) {
      setError("Erreur de connexion : " + err.message);
    }
  };

  return (
    <div>
      <h2>Connexion Admin</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
