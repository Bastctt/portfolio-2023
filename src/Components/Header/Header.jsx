import React, { useState, useEffect } from "react";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isProjectsVisible, setProjectsVisible] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const projectsSection = document.getElementById("projets");
    const rect = projectsSection.getBoundingClientRect();
    const isVisible = rect.top <= 0 && rect.bottom >= 0;
    setProjectsVisible(isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuButtonClass = isMenuOpen ? 'menu-button rotate' : 'menu-button';
  const menuClass = isMenuOpen ? 'open' : '';

  return (
    <main>
      <header className={isProjectsVisible ? 'projects-active' : ''}>
        <ul className="header-left">
          <li>
            <a href="#a-propos">Bastien Cochet</a>
          </li>
          <li className="li-job">
            <a href="#a-propos">Dev Web Junior</a>
          </li>
        </ul>
        <nav className="header-right">
          <div className={menuButtonClass} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className={`img-menu ${isProjectsVisible ? 'menu-black' : ''}`} size="2x" />
          </div>
          <ul className={menuClass}>
            <li>
              <a href="#a-propos">À propos</a>
            </li>
            <li>
              <a href="#projets">Projets</a>
            </li>
            <li>
              <a href="#skills">Compétences</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}

export default Header;
