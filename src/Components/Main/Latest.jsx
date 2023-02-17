import React from "react";
import shima from "../../Assets/img/thumb_Shima9.jpg.600x340_q85_crop_upscale.png";
import arrangement from "../../Assets/img/arrangement_approaches_DSC1168.png";
import loop from "../../Assets/img/thumb_Loop_Blog_Marina_Herlop15.jpg.600x340_q85_crop_upscale.png";

// CSS
import "./Latest.css";

function Latest() {
  return (
    <div className="latest-conteiner">
      <div className="latest-header">
        <h2 className="latest-title">The latest from Ableton</h2>
        <a href="/" className="latest-link">
          See all posts
        </a>

        <div className="latest-nav">
          <a href="/">All post</a>
          <a href="/">Artists</a>
          <a href="/">News</a>
          <a href="/">Downloads</a>
          <a href="/">Tutorials</a>
          <a href="/">Videos</a>
          <a href="/">Loop</a>
        </div>
      </div>
      <div className="latest-content-conteiner">
        <div className="latest-content">
          <img src={shima} alt="" className="latest-img" />
          <h3 className="latest-label artist">Artists</h3>
          <h2 className="latest-subtitle">
            Shima: Full Autonomy Over Everything
          </h2>
        </div>
        <div className="latest-content">
          <img src={arrangement} alt="" className="latest-img" />
          <h3 className="latest-label artist">Tutorials</h3>
          <h2 className="latest-subtitle">
            Circuit Breaking: Five Creative Tools for Arrangements
          </h2>
        </div>
        <div className="latest-content">
          <img src={loop} alt="" className="latest-img" />
          <h3 className="latest-label artist">Artists</h3>
          <h2 className="latest-subtitle">
            Marina Herlop: Voice and Piano Extended To Infinity
          </h2>
        </div>
      </div>
      <a href="/" className="link">
        See all posts
      </a>
    </div>
  );
}

export { Latest };
