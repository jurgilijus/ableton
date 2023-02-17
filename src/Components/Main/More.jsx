import React from "react";

// CSS
import "./More.css";

function More() {
  return (
    <div className="more-conteiner">
      <strong>More:</strong>
      <a href="/" className="latest-nav">
        All posts
      </a>
      <a href="/" className="latest-nav">
        Artist
      </a>
      <a href="/" className="latest-nav">
        News
      </a>
      <a href="/" className="latest-nav">
        Downloads
      </a>
      <a href="/" className="latest-nav">
        Tutorials
      </a>
      <a href="/" className="latest-nav">
        Videos
      </a>
      <a href="/" className="latest-nav">
        Loop
      </a>
      <a href="/" className="latest-nav">
        One Thing
      </a>
    </div>
  );
}

export { More };
