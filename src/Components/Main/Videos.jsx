import React, { useState } from "react";
import VideoPopup from "./VideoPopup";
import { AiFillPlayCircle } from "react-icons/ai";
import giulio from "../../Assets/img/One_Thing_Giulio_Maresca_Title.png";
import aphir from "../../Assets/img/One_Thing_Aphir_Title.png";
import Vedren from "../../Assets/img/f0b64096-fc4b-11ec-a546-525400c74c14.png";

// CSS
import "./Videos.css";

function Videos() {
  const [close, setClose] = useState(false);
  const closePopup = () => setClose(!close);
  return (
    <>
      <div onClick={closePopup} className="latest-content pointer">
        <label htmlFor="" className="btn-background">
          <AiFillPlayCircle className="btn-play" size={70} />
        </label>
        <img src={giulio} alt="" className="latest-img" />
        <h2 className="latest-subtitle">Sketchbook project</h2>
      </div>

      <div onClick={closePopup} className="latest-content pointer">
        <label htmlFor="" className="btn-background">
          <AiFillPlayCircle className="btn-play" size={70} />
        </label>
        <img src={aphir} alt="" className="latest-img" />
        <h2 className="latest-subtitle">Formant-shifting vocals</h2>
      </div>

      <div onClick={closePopup} className="latest-content pointer">
        <label htmlFor="" className="btn-background">
          <AiFillPlayCircle className="btn-play" size={70} />
        </label>
        <img src={Vedren} alt="" className="latest-img" />
        <h2 className="latest-subtitle">Sidechained variantions</h2>
      </div>
      <VideoPopup closePopup={closePopup} close={close} />
    </>
  );
}

export default Videos;
