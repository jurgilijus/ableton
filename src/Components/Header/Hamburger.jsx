import React from "react";
import { Link } from "react-router-dom";

// CSS
import "./Hamburger.css";

function Hamburger({ arrow }) {
  return (
    <>
      {arrow === true ? (
        <nav className="burger-menu-list">
          <Link to="/live" className="burger-menu">
            Live
          </Link>
          <Link to="/push" className="burger-menu">
            Push
          </Link>
          <Link to="/note" className="burger-menu">
            Note
          </Link>
          <Link to="link" className="burger-menu">
            Link
          </Link>
          <Link to="/shop" className="burger-menu">
            Shop
          </Link>
          <Link to="/packs" className="burger-menu">
            Packs
          </Link>
          <Link to="/help" className="burger-menu">
            Help
          </Link>
          <a className="burger-menu" href="/">
            Try Live for free
          </a>
          <a className="burger-menu-sub" href="/">
            Log in or register
          </a>
          <p className="burger-menu"> More on Ableton.com:</p>
          <a className="burger-menu-sub" href="/">
            Blog
          </a>
          <a className="burger-menu-sub" href="/">
            Abletom for the Classroom
          </a>
          <a className="burger-menu-sub" href="/">
            Ableton for Colleges and Universities
          </a>
          <a className="burger-menu-sub" href="/">
            Certified Training
          </a>
          <a className="burger-menu-sub" href="/">
            About Ableton
          </a>
          <a className="burger-menu-sub" href="/">
            Jobs
          </a>
          <a className="burger-menu-sub" href="/">
            Apprenticeships
          </a>
        </nav>
      ) : (
        "hide"
      )}
    </>
  );
}

export default Hamburger;
