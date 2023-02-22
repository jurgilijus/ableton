import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo1 from "../../Assets/img/logo1.png";
import Logo2 from "../../Assets/img/logo2.png";

import { BsPlusLg } from "react-icons/bs";
import { RiArrowDropDownFill, RiArrowUpSFill } from "react-icons/ri";
import { FaMinus } from "react-icons/fa";
import Hamburger from "./Hamburger";

// CSS
import "./Header.css";
import "./MoreSubmenu.css";

function Header() {
  const [arrow, setArrow] = useState(false);
  const changeArrow = (e) => {
    e.preventDefault();
    setArrow(!arrow);
  };
  arrow
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  const [moreSubmenu, setMoreSubmenu] = useState(false);
  const openMoreSubmenu = (e) => {
    e.preventDefault();
    setMoreSubmenu(!moreSubmenu);
  };

  const [closeBurger, setCloseBurger] = useState(false);
  const activeLink = () => setCloseBurger(!closeBurger);

  return (
    <>
      <header
        className={arrow ? "header-conteiner pushed" : "header-conteiner"}
      >
        <div className="header-elements">
          {arrow ? (
            <NavLink to="/">
              <img className="logo" src={Logo2} alt="Logo" />
            </NavLink>
          ) : (
            <NavLink to="/">
              <img className="logo" src={Logo1} alt="Logo" />
            </NavLink>
          )}
          {/* Menu */}
          <nav className="menu-list">
            <NavLink to="/live" className="menu">
              Live
            </NavLink>
            <NavLink to="/push" className="menu">
              Push
            </NavLink>
            <NavLink to="/note" className="menu">
              Note
            </NavLink>
            <NavLink to="link" className="menu">
              Link
            </NavLink>
            <NavLink to="/shop" className="menu">
              Shop
            </NavLink>
            <NavLink to="/packs" className="menu">
              Packs
            </NavLink>
            <NavLink to="/help" className="menu">
              Help
            </NavLink>
            <p className="menu">
              More
              <label onClick={openMoreSubmenu}>
                {!moreSubmenu ? (
                  <BsPlusLg className="plus" />
                ) : (
                  <FaMinus className="minus" />
                )}
              </label>
            </p>
          </nav>
          {/* Mobile-menu */}
          <nav className="mobile-menu-list">
            <a
              onClick={changeArrow}
              className={arrow ? "menu pushed" : "menu"}
              href="/"
            >
              Menu
              {arrow ? (
                <RiArrowUpSFill className="arrow-up pushed" />
              ) : (
                <RiArrowDropDownFill className="arrow " />
              )}
            </a>
            <div
              onClick={activeLink}
              className={
                arrow
                  ? "mobile-submenu pushed"
                  : "mobile-submenu inactive false"
              }
            >
              <Hamburger arrow={arrow} activeLink={activeLink} />
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
      </header>
      <div
        className={
          !moreSubmenu ? "moresub-conteiner hide" : "moresub-conteiner"
        }
      >
        <div className="more">
          <h3>More on Ableton.com:</h3>
          <div className="sub-menus">
            <a href="/" className="sub-menu">
              Blog
            </a>
            <a href="/" className="sub-menu">
              Ableton for the Classroom
            </a>
            <a href="/" className="sub-menu">
              Ableton for Colleges and Universities
            </a>
            <a href="/" className="sub-menu">
              Certified Training
            </a>
            <a href="/" className="sub-menu">
              About Ableton
            </a>
            <a href="/" className="sub-menu">
              Jobs
            </a>
            <a href="/" className="sub-menu">
              Apprenticeships
            </a>
          </div>
          <h3>More from Ableton:</h3>
          <div className="more-from-conteiner">
            <div>
              <a href="/" className="sub-menu weigth">
                Loop
              </a>
              <br />
              <a href="/" className="sub-menu">
                Watch Talks, Performances and Features from Ableton's Summit for
                Music Makers
              </a>
            </div>
            <div>
              <a href="/" className="sub-menu weigth">
                Learning Music
              </a>
              <br />
              <a href="/" className="sub-menu">
                Learn the fundamentals of music making right in your browser.
              </a>
            </div>
            <div>
              <a href="/" className="sub-menu weigth">
                Learning Synths
              </a>
              <br />
              <a href="/" className="sub-menu">
                Get started with synthesis using a web-based synth and
                accompanying lessons.
              </a>
            </div>
            <div>
              <a href="/" className="sub-menu weigth">
                Making Music
              </a>
              <br />
              <a href="/" className="sub-menu">
                Some tips from 74 Creative Strategies for Electronic Producers.
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
