import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const Menu = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-left: 20px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1rem;
  color: #007bff;
  transition: color 0.3s;

  &.active {
    font-weight: bold;
    color: #0056b3;
  }

  &:hover {
    color: #0056b3;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      {/* Logo */}
      <Logo>
        <LogoImage src="/path-to-your-logo.png" alt="Peau d'or logo" />
        <LogoText>Peau d'or</LogoText>
      </Logo>

      {/* Menu Items */}
      <Menu>
        <MenuItem>
          <StyledLink to="/nos-expertes">Nos expertes</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/notre-centre">Notre centre</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/retrouvez-nous">Retrouvez-nous</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/cheques-cadeaux">Chèques cadeaux</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/nos-produits">Nos produits</StyledLink>
        </MenuItem>
      </Menu>
    </NavbarContainer>
  );
};

export default Navbar;
