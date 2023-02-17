import React from "react";
import { Latest } from "./Latest";
import { More } from "./More";

// CSS
import "./Main.css";

function Main() {
  return (
    <>
      <section className="Main-conteiner">
        <a href="/" className="main1-photo">
          {/* <img src={hp} alt="" className="image" /> */}
          <div className="main1-photo-text-content">
            <h1 className="main1-photo-text">
              SPAT Devices by Music Unit: Spatial Sound at the Cutting Edge
            </h1>
            <p className="main1-photo-link">Download the Packs</p>
          </div>
        </a>

        <a href="/" className="main2-photo">
          <div className="main2-photo-text-content">
            <h1 className="main2-photo-text">
              Visualizing Sound: A Beginner's Guide to Using TouchDesigner with
              Live
            </h1>
            <p className="main2-photo-link">Find out more</p>
          </div>
        </a>

        <a href="/" className="main3-photo">
          <div className="main3-photo-text-content">
            <h1 className="main3-photo-text">
              Circuit Breaking: Five Creative Tools for Arrangements
            </h1>
            <p className="main3-photo-link">Eatch the video</p>
          </div>
        </a>
        <Latest />
        <More />
      </section>
    </>
  );
}

export default Main;
