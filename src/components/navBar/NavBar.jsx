import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div>
        {/* Logo ou nom du site */}
        <h1>Peau d'or</h1>
      </div>
      <ul>
        {/* Liens de navigation */}
        <li>
          <NavLink to="/nos-expertes">Nos expertes</NavLink>
        </li>
        <li>
          <NavLink to="/notre-centre">Notre centre</NavLink>
        </li>
        <li>
          <NavLink to="/retrouvez-nous">Retrouvez-nous</NavLink>
        </li>
        <li>
          <NavLink to="/cheques-cadeaux">Chèques cadeaux</NavLink>
        </li>
        <li>
          <NavLink to="/nos-produits">Nos produits</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
