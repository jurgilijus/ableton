import React, { useState } from "react";

import Logo1 from "../../Assets/img/logo1.png";
import Logo2 from "../../Assets/img/logo2.png";

import { BsPlusLg } from "react-icons/bs";
import { RiArrowDropDownFill, RiArrowUpSFill } from "react-icons/ri";
import { FaMinus } from "react-icons/fa";

// CSS
import "./Header.css";

import Hamburger from "./Hamburger";
import MoreSubmenu from "./MoreSubmenu";

function Header() {
  const [arrow, setArrow] = useState(false);
  const changeArrow = (e) => {
    e.preventDefault();
    setArrow(!arrow);
  };
  const [moreSubmenu, setMoreSubmenu] = useState(false);
  const openMoreSubmenu = (e) => {
    e.preventDefault();
    setMoreSubmenu(!moreSubmenu);
  };

  return (
    <header className={arrow ? "header-conteiner active" : "header-conteiner"}>
      <div className="header-elements">
        {arrow ? (
          <img className="logo" src={Logo2} alt="Logo" />
        ) : (
          <img className="logo" src={Logo1} alt="Logo" />
        )}
        {/* Menu */}
        <nav className="menu-list">
          <a className="menu" href="/">
            Live
          </a>
          <a className="menu" href="/">
            Push
          </a>
          <a className="menu" href="/">
            Note
          </a>
          <a className="menu" href="/">
            Link
          </a>
          <a className="menu" href="/">
            Shop
          </a>
          <a className="menu" href="/">
            Packs
          </a>
          <a className="menu" href="/">
            Help
          </a>
          <a className="menu" href="/">
            More
            <label onClick={openMoreSubmenu}>
              {!moreSubmenu ? (
                <BsPlusLg className="plus" />
              ) : (
                <FaMinus className="minus" />
              )}
            </label>
          </a>
        </nav>

        {/* Mobile-menu */}
        <nav className="mobile-menu-list">
          <a
            onClick={changeArrow}
            className={arrow ? "menu active" : "menu"}
            href="/"
          >
            Menu
            {arrow ? (
              <RiArrowUpSFill className="arrow-up active" />
            ) : (
              <RiArrowDropDownFill className="arrow " />
            )}
          </a>
          <div
            className={
              arrow ? "mobile-submenu active" : "mobile-submenu inactive"
            }
          >
            <Hamburger arrow={arrow} />
          </div>
        </nav>

        <div className="auth">
          <a href="/" className="try">
            Try Live for free
          </a>
          <a href="/" className="login">
            Log in or register
          </a>
        </div>
      </div>
      <MoreSubmenu />
    </header>
  );
}

export default Header;
