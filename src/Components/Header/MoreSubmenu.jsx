import React from "react";

// CSS
import "./MoreSubmenu.css";

function MoreSubmenu() {
  return (
    <div className="moresub-conteiner">
      <h3>More on Ableton.com:</h3>
      <div>
        <a href="/">Blog</a>
        <a href="/">Ableton for the Classroom</a>
        <a href="/">Ableton for Colleges and Universities</a>
        <a href="/">Certified Training</a>
        <a href="/">About Ableton</a>
        <a href="/">Jobs</a>
        <a href="/">Apprenticeships</a>
      </div>
      <h3>More on Ableton.com:</h3>
      <div>
        <div>
          <a href="/">Loop</a>
          <a href="/">
            Watch Talks, Performances and Features from Ableton's Summit for
            Music Makers
          </a>
        </div>
        <div>
          <a href="/">Learning Music</a>
          <a href="/">
            Learn the fundamentals of music making right in your browser.
          </a>
        </div>
        <div>
          <a href="/">Learning Synths</a>
          <a href="/">
            Get started with synthesis using a web-based synth and accompanying
            lessons.
          </a>
        </div>
        <div>
          <a href="/">Making Music</a>
          <a href="/">
            Some tips from 74 Creative Strategies for Electronic Producers.
          </a>
        </div>
      </div>
    </div>
  );
}

export default MoreSubmenu;
