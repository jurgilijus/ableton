import React from "react";
import { NavLink } from "react-router-dom";

// CSS
import "./Live.css";

function Live() {
  return (
    <div className="live-conteiner">
      <NavLink to="/live" className="live-link-aligne">
        Live 11
      </NavLink>
      <NavLink href="/" className="live-link-aligne">
        All new features
      </NavLink>
      <NavLink href="/" className="live-link-aligne">
        What is Live?
      </NavLink>
      <NavLink href="/" className="live-link-aligne">
        Max for Live
      </NavLink>
      <NavLink href="/" className="live-link-aligne">
        Learn Live
      </NavLink>
      <NavLink href="/" className="live-link-aligne">
        Integrated hardware
      </NavLink>
      <NavLink href="/" className="live-link-aligne">
        Compare editions
      </NavLink>
      <NavLink href="/" className="live-link-aligne">
        Buy now
      </NavLink>
    </div>
  );
}

export default Live;
