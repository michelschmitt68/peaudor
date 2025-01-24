import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import * as S from "./Navbar.styles";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenus, setSubMenus] = useState({
    soins: false,
    actus: false,
    offres: false,
  });

  const toggleSubMenu = (menu) => {
    setSubMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setSubMenus({
      soins: false,
      actus: false,
      offres: false,
    });
  };

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
          <S.StyledLogoLink as={NavLink} to="/">
            <img src="/logopeaudor.png" alt="Peau d'Or Logo" />
          </S.StyledLogoLink>
        </S.Logo>

        <S.Hamburger onClick={() => setMenuOpen((prev) => !prev)}>
          <GiHamburgerMenu size={24} />
        </S.Hamburger>
        {menuOpen && (
          <S.Menu>
            {/* Nos soins */}
            <S.MenuItem onClick={() => toggleSubMenu("soins")}>
              Nos soins
              <S.SubMenuMobile className={subMenus.soins ? "open" : ""}>
                {categories.map((category, index) => (
                  <S.StyledNavLinkStyled
                    key={index}
                    to={category.link}
                    onClick={() => {
                      closeMenu();
                    }}
                  >
                    {category.title}
                  </S.StyledNavLinkStyled>
                ))}
              </S.SubMenuMobile>
            </S.MenuItem>
            <S.MenuItem onClick={() => toggleSubMenu("actus")}>
              Nos Actualités
              <S.SubMenuMobile className={subMenus.actus ? "open" : ""}>
                <S.MenuItem>
                  <S.StyledNavLinkStyled
                    to="/actualites"
                    onClick={closeMenu}
                  >
                    Nouveautés
                  </S.StyledNavLinkStyled>
                </S.MenuItem>
                <S.MenuItem onClick={() => { toggleSubMenu("offres"); toggleSubMenu("actus"); }}>
                  Nos Offres
                  <S.SubMenuMobile className={subMenus.offres ? "open" : ""}>
                    <S.StyledNavLinkStyled
                      to="/nos-soldes"
                      onClick={closeMenu}
                    >
                      Soldes
                    </S.StyledNavLinkStyled>
                    <S.StyledNavLinkStyled
                      to="/ventes-privees"
                      onClick={closeMenu}
                    >
                      Ventes Privées
                    </S.StyledNavLinkStyled>
                  </S.SubMenuMobile>
                </S.MenuItem>
              </S.SubMenuMobile>
            </S.MenuItem>

            {/* Autres éléments du menu */}
            <S.MenuItem>
              <S.StyledNavLinkStyled
                to="/notre-centre"
                onClick={closeMenu}
              >
                Notre Centre
              </S.StyledNavLinkStyled>
            </S.MenuItem>
            <S.MenuItem>
              <S.StyledNavLinkStyled
                to="/cheques-cadeaux"
                onClick={closeMenu}
              >
                Chèques Cadeaux
              </S.StyledNavLinkStyled>
            </S.MenuItem>
            <S.MenuItem>
              <S.StyledNavLinkStyled
                to="/nos-produits"
                onClick={closeMenu}
              >
                Nos Produits
              </S.StyledNavLinkStyled>
            </S.MenuItem>
            <S.MenuItem>
              <S.StyledNavLinkStyled
                to="https://docs.google.com/forms/d/e/1FAIpQLScI8xtexAHdmQIguSpPsZsBhsG5vuFkUx91v38TgXTzQZ2v0A/viewform?usp=pp_url"
                target="_blank"
                onClick={closeMenu}
              >
                Parrainage
              </S.StyledNavLinkStyled>
            </S.MenuItem>

            {/* Section des boutons */}
            <S.ButtonSection>
              <S.Button as={NavLink} to="/rendez-vous" onClick={closeMenu}>Rendez-vous</S.Button>
              <S.Button as={NavLink} to="/mon-compte" onClick={closeMenu}>Mon compte</S.Button>
            </S.ButtonSection>

            {/* Icônes des réseaux sociaux */}
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


        {/* Desktop Menu */}
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
            Nos Actualités
            <S.SubMenu>
              {/* Nouveautés */}
              <S.StyledNavLinkStyled to="/actualites">Nouveautés</S.StyledNavLinkStyled>

              {/* Nos Offres */}
              <S.MenuItem>
                Nos Offres
                <S.SubMenu>
                  <S.StyledNavLinkStyled to="/nos-soldes">Soldes</S.StyledNavLinkStyled>
                  <S.StyledNavLinkStyled to="/ventes-privees">Ventes Privées</S.StyledNavLinkStyled>
                </S.SubMenu>
              </S.MenuItem>
            </S.SubMenu>
          </S.MenuItem>
          <S.MenuItem>
            <S.StyledNavLinkStyled to="/notre-centre">Notre Centre</S.StyledNavLinkStyled>
          </S.MenuItem>
          <S.MenuItem>
            <S.StyledNavLinkStyled to="/cheques-cadeaux">Chèques Cadeaux</S.StyledNavLinkStyled>
          </S.MenuItem>
          <S.MenuItem>
            <S.StyledNavLinkStyled to="/nos-produits">Nos Produits</S.StyledNavLinkStyled>
          </S.MenuItem>
          <S.MenuItem>
            <S.StyledNavLinkStyled
              to="https://docs.google.com/forms/d/e/1FAIpQLScI8xtexAHdmQIguSpPsZsBhsG5vuFkUx91v38TgXTzQZ2v0A/viewform?usp=pp_url"
              target="_blank"
            >
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
