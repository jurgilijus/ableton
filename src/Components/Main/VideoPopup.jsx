import React from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player";
import { IoCloseSharp } from "react-icons/io5";

// CSS
import "./VideoPopup.css";

function VideoPopup(props) {
  const { close, closePopup, video } = props;
  return ReactDOM.createPortal(
    close && (
      <div>
        <div className="videopopup-conteiner"></div>
        <div className="video">
          <button onClick={closePopup} className="btn-close">
            <IoCloseSharp size={50} />
          </button>
          <ReactPlayer width="100%" height="100%" url={video} controls={true} />
        </div>
      </div>
    ),
    document.getElementById("portal")
  );
}

export default VideoPopup;
