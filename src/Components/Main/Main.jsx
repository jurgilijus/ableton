import React, { useEffect, useState } from "react";
import { Latest } from "./Latest";
import { More } from "./More";
import ScrollBtn from "../ScrollBtn/ScrollBtn";

// CSS
import "./Main.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

function Main() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataCollectionRef = collection(db, "articles");

    const getData = async () => {
      const data = await getDocs(dataCollectionRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);

  return (
    <>
      <section className="Main-conteiner">
        <a href="/" className="main1-photo">
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
            <p className="main3-photo-link">Watch the video</p>
          </div>
        </a>
        <ScrollBtn />
      </section>
      <Latest data={data} />
      <More />
    </>
  );
}

export default Main;
