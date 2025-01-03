import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import * as S from "./Navbar.styles";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const categories = [
    { title: "Bronzage UV", link: "/soins/bronzage-uv" },
    { title: "Épilation au fil", link: "/soins/epilation-au-fil" },
    { title: "Beauté en duo", link: "/soins/beaute-en-duo" },
    { title: "Beauté du regard", link: "/soins/beaute-du-regard" },
    { title: "Beauté du sourire", link: "/soins/beaute-du-sourire" },
    { title: "Amincissement", link: "/soins/Cryolipolyse" },
    { title: "Épilation à la cire", link: "/soins/epilation-a-la-cire" },
    { title: "Soins du visage", link: "/soins/soins-du-visage" },
    { title: "Soins du corps", link: "/soins/soins-du-corps" },
    { title: "Soins des mains", link: "/soins/soins-des-mains" },
    { title: "Soins des pieds", link: "/soins/soins-des-pieds" },
    { title: "Maquillage", link: "/soins/maquillage" },
    { title: "Vernis semi permanent", link: "/soins/verni-semi-permanent" },
  ];

  return (
    <S.Nav>
      <S.Container>
        <S.Logo>
          <S.StyledLogoLink as={NavLink} to="/"><img src="/logopeaudor.png" alt="Peau d'Or Logo" /></S.StyledLogoLink>
        </S.Logo>

        <S.Hamburger onClick={() => setMenuOpen((prev) => !prev)}>
          <GiHamburgerMenu size={24} />
        </S.Hamburger>

        {menuOpen && (
          <S.Menu>
            <S.MenuItem onClick={() => setSubMenuOpen((prev) => !prev)}>
              Nos soins
              <S.SubMenuMobile className={subMenuOpen ? "open" : ""}>
                {categories.map((category, index) => (
                  <S.StyledNavLinkStyled
                    key={index}
                    to={category.link}
                    onClick={() => {
                      setMenuOpen(false);
                      setSubMenuOpen(false);
                    }}
                  >
                    {category.title}
                  </S.StyledNavLinkStyled>
                ))}
              </S.SubMenuMobile>
            </S.MenuItem>
            <S.MenuItem>
              <S.StyledNavLinkStyled to="/notre-centre" onClick={() => setMenuOpen(false)}>
                Notre centre
              </S.StyledNavLinkStyled>
            </S.MenuItem>
            <S.MenuItem>
              <S.StyledNavLinkStyled to="/cheques-cadeaux" onClick={() => setMenuOpen(false)}>
                Chèques cadeaux
              </S.StyledNavLinkStyled>
            </S.MenuItem>
            <S.MenuItem>
              <S.StyledNavLinkStyled to="/nos-produits" onClick={() => setMenuOpen(false)}>
                Nos produits
              </S.StyledNavLinkStyled>
            </S.MenuItem>
            <S.MenuItem>
              <S.StyledNavLinkStyled
                to="https://docs.google.com/forms/d/e/1FAIpQLScI8xtexAHdmQIguSpPsZsBhsG5vuFkUx91v38TgXTzQZ2v0A/viewform?usp=pp_url"
                target="_blank"
                onClick={() => setMenuOpen(false)}>
                Parrainage
              </S.StyledNavLinkStyled>
            </S.MenuItem>
            <S.ButtonSection>
              <S.Button as={NavLink} to="/rendez-vous" onClick={() => setMenuOpen(false)}>
                Rendez-vous
              </S.Button>
              <S.Button as={NavLink} to="/mon-compte" onClick={() => setMenuOpen(false)}>
                Mon compte
              </S.Button>
            </S.ButtonSection>
            <S.IconSection>
              <S.Icon href="https://www.facebook.com/peaudor68320/" target="_blank" aria-label="Facebook">
                <FaFacebook size={20} />
              </S.Icon>
              <S.Icon href="https://www.instagram.com/_peaudor/" target="_blank" aria-label="Instagram">
                <FaInstagram size={20} />
              </S.Icon>
            </S.IconSection>
          </S.Menu>
        )}

        <S.DesktopMenu>
          <S.MenuItem>
            Nos soins
            <S.SubMenu>
              {categories.map((category, index) => (
                <S.StyledNavLinkStyled key={index} to={category.link}>
                  {category.title}
                </S.StyledNavLinkStyled>
              ))}
            </S.SubMenu>
          </S.MenuItem>
          <S.MenuItem>
            <S.StyledNavLinkStyled to="/notre-centre">Notre centre</S.StyledNavLinkStyled>
          </S.MenuItem>
          <S.MenuItem>
            <S.StyledNavLinkStyled to="/cheques-cadeaux">Chèques cadeaux</S.StyledNavLinkStyled>
          </S.MenuItem>
          <S.MenuItem>
            <S.StyledNavLinkStyled to="/nos-produits">Nos produits</S.StyledNavLinkStyled>
          </S.MenuItem>
          <S.MenuItem>
            <S.StyledNavLinkStyled
              to="https://docs.google.com/forms/d/e/1FAIpQLScI8xtexAHdmQIguSpPsZsBhsG5vuFkUx91v38TgXTzQZ2v0A/viewform?usp=pp_url"
              target="_blank">
              Parrainage
            </S.StyledNavLinkStyled>
          </S.MenuItem>
          <S.ButtonSection>
            <S.Button as={NavLink} to="/rendez-vous">Rendez-vous</S.Button>
            <S.Button as={NavLink} to="/mon-compte">Mon compte</S.Button>
          </S.ButtonSection>
          <S.IconSection>
            <S.Icon href="https://www.facebook.com/peaudor68320/" target="_blank" aria-label="Facebook">
              <FaFacebook size={20} />
            </S.Icon>
            <S.Icon href="https://www.instagram.com/_peaudor/" target="_blank" aria-label="Instagram">
              <FaInstagram size={20} />
            </S.Icon>
          </S.IconSection>
        </S.DesktopMenu>
      </S.Container>
    </S.Nav>
  );
};

export default NavBar;
