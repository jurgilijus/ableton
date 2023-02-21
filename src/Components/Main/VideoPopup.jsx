import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";
import { IoCloseSharp } from "react-icons/io5";

// CSS
import "./VideoPopup.css";

function VideoPopup({ close, closePopup }) {
  return ReactDOM.createPortal(
    close && (
      <>
        <div className="videopopup-conteiner"></div>
        <div className="video">
          <button onClick={closePopup} className="btn-close">
            <IoCloseSharp size={50} />
          </button>
          <ReactPlayer
            width="100%"
            height="100%"
            url="https://www.youtube.com/embed/4evhTCGfjDc&t=3s&ab_channel=Ableton"
            controls={true}
          />
        </div>
      </>
    ),
    document.getElementById("portal")
  );
}

export default VideoPopup;
