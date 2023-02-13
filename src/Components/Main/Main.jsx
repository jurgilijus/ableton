import React from "react";
import hp from "../../Assets/img/HP_Spat_devices_2.png";
import cover from "../../Assets/img/cover_audio_wheel.png";
import arrangement from "../../Assets/img/arrangement_approaches_DSC1168.png";

// CSS
import "./Main.css";

function Main() {
  return (
    <section className="Main-conteiner">
      <div className="main1-photo">
        <a href="/">
          <img src={hp} alt="" className="image" />
          <div className="main1-photo-text-content">
            <h1 className="main1-photo-text">
              SPAT Devices by Music Unit: Spatial Sound at the Cutting Edge
            </h1>
            <p className="main1-photo-link">Download the Packs</p>
          </div>
        </a>
      </div>
      <div className="main2-photo">
        <a href="/">
          <img src={cover} alt="" className="image" />
          <div className="main2-photo-text-content">
            <h1 className="main2-photo-text">
              Visualizing Sound: A Beginner's Guide to Using TouchDesigner with
              Live
            </h1>
            <p className="main2-photo-link">Find out more</p>
          </div>
        </a>
      </div>
      <div className="main3-photo">
        <a href="/">
          <img src={arrangement} alt="" className="image" />
          <div className="main3-photo-text-content">
            <h1 className="main3-photo-text">
              Visualizing Sound: A Beginner's Guide to Using TouchDesigner with
              Live
            </h1>
            <p className="main3-photo-link">Find out more</p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Main;
