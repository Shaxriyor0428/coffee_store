import React from "react";

import Logo from "../../assets/Logo.png";
import { FiShoppingBag } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container-lg">
        <nav className="navbar">
          <ul className="navbar__list left">
            <li className="navbar__item">
              <a href="#home" className="navbar__link">
                <span>Home</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#about" className="navbar__link">
                <span>About</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#menu" className="navbar__link">
                <span>Menu</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#reservation" className="navbar__link">
                <span>Reservation</span>
              </a>
            </li>
          </ul>

          <div className="navbar__logo">
            <img src={Logo} alt="logo" />
          </div>

          <ul className="navbar__list right">
            <li className="navbar__item">
              <a href="#pages" className="navbar__link">
                <span>Pages</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#shop" className="navbar__link">
                <span>Shop</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#contact" className="navbar__link">
                <span>Contact</span>
              </a>
            </li>
            <li className="navbar__item">
              <a href="#search" className="navbar__link">
                <FaSearch className="fa__icon" />
              </a>
            </li>
            <li className="navbar__item">
              <a href="#cart" className="navbar__link">
                <FiShoppingBag className="fa__icon" />
              </a>
            </li>
          </ul>
          <div className="navbar__menu__bar">
            <TiThMenuOutline />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
