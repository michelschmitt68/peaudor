import styled from "styled-components";
import { NavLink } from "react-router-dom";

// NavBar container
export const Nav = styled.nav`
  background: linear-gradient(to right, #000000, #393939);
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.large} ${({ theme }) => theme.spacing.large};
  @media (max-width: 1200px) {
    background: linear-gradient(to right, #000000, #1b1a1a);
  }
`;


export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.logo};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledLogoLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};

  img{
    max-width: 150px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Hamburger = styled.div`
  cursor: pointer;

  @media (max-width: 1300px) {
    display: block;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: 1201px) {
    display: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Menu = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: #060606;;
  padding: ${({ theme }) => theme.spacing.large};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  align-items: center;
  z-index: 10;

  @media (min-width: 1201px) {
    display: none;
  }
`;

export const DesktopMenu = styled.div`
  display: none;

  @media (min-width: 1201px) {
    display: flex;
    gap: ${({ theme }) => theme.spacing.medium};
    align-items: center;
  }
`;

export const MenuItem = styled.div`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  font-weight: 600;
  position: relative;
  padding: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const SubMenu = styled.div`
  display: none;
  position: absolute;
  top: 30px;
  left: 0;
  background-color: #272727;
  border-radius: 5px;
  padding: 10px;
  z-index: 1;
  width: 200px;
  opacity: 0;
  z-index: 10;

  ${MenuItem}:hover & {
    display: block;
    opacity: 1;
    transform: translateY(0);
  }

  & a {
    padding: 8px 16px;
    color: ${({ theme }) => theme.colors.primary};
    display: block;
  }
`;

export const StyledNavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  padding: 5px 10px;
  border-radius: 3px;

  &.active {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #f8f8f8;
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
    color: #f8f8f8;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  justify-content: space-around;
`;

export const IconSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

export const Icon = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  margin: 5px;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transition: all 0.3s ease-in-out;
  }
`;

// Version mobile : sous-menu avec animation
export const SubMenuMobile = styled.div`
  display: none;
  position: relative;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;

  &.open {
    display: block;
    opacity: 1;
    transform: translateY(0);
  }

  & a {
    padding: 8px 16px;
    color: ${({ theme }) => theme.colors.primary};
    display: block;
  }
`;
