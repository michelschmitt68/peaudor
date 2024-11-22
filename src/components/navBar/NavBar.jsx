import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Nav>
      <Container>
        {/* Logo */}
        <Logo>
          <StyledLogoLink to="/">Peau d'or</StyledLogoLink>
        </Logo>

        {/* Hamburger (visible sur petits écrans uniquement) */}
        <Hamburger onClick={toggleMenu}>
          <GiHamburgerMenu size={24} />
        </Hamburger>

        {/* Menu mobile (visible uniquement quand le menu est ouvert) */}
        {menuOpen && (
          <Menu>
            <MenuItem>
              <StyledNavLink to="/nos-expertes">Nos expertes</StyledNavLink>
            </MenuItem>
            <MenuItem>
              <StyledNavLink to="/notre-centre">Notre centre</StyledNavLink>
            </MenuItem>
            <MenuItem>
              <StyledNavLink to="/retrouvez-nous">Retrouvez-nous</StyledNavLink>
            </MenuItem>
            <MenuItem>
              <StyledNavLink to="/cheques-cadeaux">Chèques cadeaux</StyledNavLink>
            </MenuItem>
            <MenuItem>
              <StyledNavLink to="/nos-produits">Nos produits</StyledNavLink>
            </MenuItem>
            <ButtonSection>
              <Button to="/rendez-vous">Rendez-vous</Button>
              <Button to="/mon-compte">Mon compte</Button>
            </ButtonSection>
            <IconSection>
              <Icon href="https://facebook.com" target="_blank" aria-label="Facebook">
                <FaFacebook size={20} />
              </Icon>
              <Icon href="https://instagram.com" target="_blank" aria-label="Instagram">
                <FaInstagram size={20} />
              </Icon>
            </IconSection>
          </Menu>
        )}

        {/* Menu desktop (affiché par défaut sur les grands écrans) */}
        <DesktopMenu>
          <MenuItem>
            <StyledNavLink to="/nos-expertes">Nos expertes</StyledNavLink>
          </MenuItem>
          <MenuItem>
            <StyledNavLink to="/notre-centre">Notre centre</StyledNavLink>
          </MenuItem>
          <MenuItem>
            <StyledNavLink to="/retrouvez-nous">Retrouvez-nous</StyledNavLink>
          </MenuItem>
          <MenuItem>
            <StyledNavLink to="/cheques-cadeaux">Chèques cadeaux</StyledNavLink>
          </MenuItem>
          <MenuItem>
            <StyledNavLink to="/nos-produits">Nos produits</StyledNavLink>
          </MenuItem>
          <ButtonSection>
            <Button to="/rendez-vous">Rendez-vous</Button>
            <Button to="/mon-compte">Mon compte</Button>
          </ButtonSection>
          <IconSection>
            <Icon href="https://facebook.com" target="_blank" aria-label="Facebook">
              <FaFacebook size={20} />
            </Icon>
            <Icon href="https://instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram size={20} />
            </Icon>
          </IconSection>
        </DesktopMenu>
      </Container>
    </Nav>
  );
};

export default NavBar;

// Styled-Components avec le thème
const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.large} ${({ theme }) => theme.spacing.large};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.logo};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const StyledLogoLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Hamburger = styled.div`
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.large};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopMenu = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: ${({ theme }) => theme.spacing.medium};
    align-items: center;
  }
`;

const MenuItem = styled.div`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary}; /* Couleur du texte */
  padding: 5px 10px;
  border-radius: 3px;

  /* Supprime l'arrière-plan lorsque le lien est actif */
  &.active {
    background-color: transparent;  /* Retirer la couleur d'arrière-plan */
    color: ${({ theme }) => theme.colors.primary}; /* La couleur du texte active reste la même */
  }

  /* Lorsque l'on survole le lien */
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease-in-out;
  }

  /* Enlever la couleur bleue par défaut des liens */
  &:focus {
    outline: none;
  }
`;

const Button = styled(NavLink)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 0.9rem;
  padding: 10px 15px;
  border-radius: 20px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: all 0.3s ease-in-out;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  justify-content: space-around;
`;

const IconSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const Icon = styled.a`
  color: ${({ theme }) => theme.colors.dark};
  display: flex;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease-in-out;
  }
`;
