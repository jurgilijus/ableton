import React from "react";
import shima from "../../Assets/img/thumb_Shima9.jpg.600x340_q85_crop_upscale.png";
import arrangement from "../../Assets/img/arrangement_approaches_DSC1168.png";
import loop from "../../Assets/img/thumb_Loop_Blog_Marina_Herlop15.jpg.600x340_q85_crop_upscale.png";
import screenshot from "../../Assets/img/Screenshot_2023-01-30_at_16.41.41.png";
import abl from "../../Assets/img/ABL302_MorphFilter5.png";
import bl from "../../Assets/img/BL_Modeselektor.png";
import liz from "../../Assets/img/333_LizTeusch3.png";
import loop2 from "../../Assets/img/1_blog_loop_session_grand_river_blog.jpg__3333.0x1667.0_q85_sub_9AhNVfr.png";
import hero from "../../Assets/img/blog_hero_image_800x400.jpg__3333.0x1667.0_q85_subsampling-2.png";

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
      <div className="latest-header">
        <h2 className="latest-title">In focus: techno</h2>
        <a href="/" className="latest-discovermore-link">
          Discover more
        </a>
      </div>
      <div className="latest-content-conteiner">
        <div className="latest-content">
          <img src={screenshot} alt="" className="latest-img" />
          <h3 className="latest-label artist">Artists</h3>
          <h2 className="latest-subtitle">
            Andrey Sirokin: In Ukraine, Music Is My Shelter
          </h2>
        </div>
        <div className="latest-content">
          <img src={bl} alt="" className="latest-img" />
          <h3 className="latest-label artist">Packs</h3>
          <h2 className="latest-subtitle">Extended Sounds by Modeselektor</h2>
        </div>
        <div className="latest-content">
          <img src={abl} alt="" className="latest-img" />
          <h3 className="latest-label artist">Tutorials</h3>
          <h2 className="latest-subtitle">
            Taking a Closer Look at Wavetable's Morph Filter
          </h2>
        </div>
      </div>
      <a href="/" className="link">
        Discover more
      </a>

      <div className="latest-header">
        <h2 className="latest-title">
          One Things videos: monthly creative tips
        </h2>
        <a href="/" className="latest-link">
          See all videos
        </a>
      </div>
      <div className="latest-content-conteiner">
        <div className="latest-content">
          <img src={shima} alt="" className="latest-img" />
          <h2 className="latest-subtitle">Sketchbook project (Video)</h2>
        </div>
        <div className="latest-content">
          <img src={arrangement} alt="" className="latest-img" />
          <h2 className="latest-subtitle">Formant-shifting vocals (Video)</h2>
        </div>
        <div className="latest-content">
          <img src={loop} alt="" className="latest-img" />
          <h2 className="latest-subtitle">Sidechained variantions (Video)</h2>
        </div>
      </div>
      <a href="/" className="link">
        See all videos
      </a>
      <div className="latest-header">
        <h2 className="latest-title">Videos and features from Loop events</h2>
        <a href="/" className="latest-link">
          See more
        </a>
      </div>
      <div className="latest-content-conteiner">
        <div className="latest-content">
          <img src={hero} alt="" className="latest-img" />
          <h2 className="latest-subtitle">
            Five Perpectives on Working with Environmental Noise
          </h2>
        </div>
        <div className="latest-content">
          <img src={loop2} alt="" className="latest-img" />
          <h2 className="latest-subtitle">
            Loop Session: In the Studio with Grand River
          </h2>
        </div>
        <div className="latest-content">
          <img src={liz} alt="" className="latest-img" />
          <h2 className="latest-subtitle">
            The Best Microphone (Is the One You Already Have): A Workshop with
            Li Teutsch
          </h2>
        </div>
      </div>
      <a href="/" className="link">
        See more
      </a>
    </div>
  );
}

export { Latest };
