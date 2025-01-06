import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="metro-header">
      <div className="logo">
        <img className="logo" src="/unnamed.png" alt="" />
      </div>
      <button className="burger-menu" onClick={toggleMenu}>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </button>
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        
      <Link to="/home">Главная</Link>
      <Link to="/people">О нас</Link>
      <Link to="/help">Услуги</Link>
      <Link to="/contact">Контакты</Link>
      </nav>
    </header>
  );
};

export default Header;
