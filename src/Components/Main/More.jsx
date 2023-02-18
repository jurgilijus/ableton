import React from "react";

// CSS
import "./More.css";

function More() {
  return (
    <section className="more-align">
      <strong>More:</strong>
      <a href="/" className="more-nav">
        All posts
      </a>
      <a href="/" className="more-nav">
        Artist
      </a>
      <a href="/" className="more-nav">
        News
      </a>
      <a href="/" className="more-nav">
        Downloads
      </a>
      <a href="/" className="more-nav">
        Tutorials
      </a>
      <a href="/" className="more-nav">
        Videos
      </a>
      <a href="/" className="more-nav">
        Loop
      </a>
      <a href="/" className="more-nav">
        One Thing
      </a>
    </section>
  );
}

export { More };
