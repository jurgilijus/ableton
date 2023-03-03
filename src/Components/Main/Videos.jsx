import React, { useState } from "react";
import VideoPopup from "./VideoPopup";
import { FaPlay } from "react-icons/fa";

// CSS
import "./Videos.css";

function Videos({ data }) {
  const [close, setClose] = useState(false);
  const closePopup = () => setClose(!close);

  const [show, setShow] = useState([]);
  const handlePassInfoShow = (data) => {
    setShow(data);
  };

  return (
    <>
      {data
        .filter((d) => d.video !== "")
        .filter((index, d) => d < 3)
        .map((data) => {
          return (
            <div key={data.id} onClick={() => handlePassInfoShow(data.video)}>
              <div onClick={closePopup} className="latest-content pointer">
                <label htmlFor="" className="btn-background">
                  <FaPlay className="btn-play" size={25} />
                </label>
                <img src={data.img} alt="" className="latest-img" />
                <h2 className="latest-subtitle">{data.mainTitle}</h2>
              </div>
            </div>
          );
        })}
      <VideoPopup closePopup={closePopup} close={close} video={show} />
    </>
  );
}

export default Videos;
