import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <footer>
        <div className="last">
            <div className="quick">
                <h3>Quickly.</h3>
                <a href="">32  - 44 Upper Rupert Street</a>
                <a href="">W12 8DY Kensington</a>
                <a href="">United Kingdom</a>
            </div>
            <div className="our">
                <div className="company">
                    <h3>Наша компания</h3>
                    <Link to="/home">Главная</Link>
      <Link to="/people">О нас</Link>
      <Link to="/help">Услуги</Link>
      <Link to="/contact">Контакты</Link>
                </div>
                <div className="company">
                    <h3>Our Company</h3>
                    <a href="">Our Team</a>
                    <a href="">Company Vision</a>
                    <a href="">Our History</a>
                    <a href="">Investorys</a>
                </div>
                <div className="company">
                    <h3>Our Company</h3>
                    <a href="">Our Team</a>
                    <a href="">Company Vision</a>
                    <a href="">Our History</a>
                    <a href="">Investorys</a>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer