import React from "react";

// CSS
import "./Hamburger.css";

function Hamburger({ arrow }) {
  return (
    <>
      {arrow === true ? (
        <nav className="burger-menu-list">
          <a className="burger-menu" href="/">
            Live
          </a>
          <a className="burger-menu" href="/">
            Push
          </a>
          <a className="burger-menu" href="/">
            Note
          </a>
          <a className="burger-menu" href="/">
            Link
          </a>
          <a className="burger-menu" href="/">
            Shop
          </a>
          <a className="burger-menu" href="/">
            Help
          </a>
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
