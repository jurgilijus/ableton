import React from "react";
import Videos from "./Videos";

// CSS
import "./Latest.css";

function Latest({ data }) {
  const lastDays = new Date();
  lastDays.setDate(lastDays.getDate() - 1);
  const time = data.filter((d) => {
    return new Date(d.uploade.seconds).getSeconds() >= lastDays.getSeconds();
  });
  return (
    <div className="latest-conteiner">
      <div className="latest-header">
        <h2 className="latest-title">The latest from Ableton</h2>
        <a href="/" className="latest-link">
          See all posts
        </a>

        <div className="latest-nav">
          <a
            href="https://www.ableton.com/en/blog/"
            className="latest-nav-link"
          >
            All post
          </a>
          <a
            href="https://www.ableton.com/en/blog/categories/artists/"
            className="latest-nav-link"
          >
            Artists
          </a>
          <a
            href="https://www.ableton.com/en/blog/categories/news/"
            className="latest-nav-link"
          >
            News
          </a>
          <a
            href="https://www.ableton.com/en/blog/categories/downloads/"
            className="latest-nav-link"
          >
            Downloads
          </a>
          <a
            href="https://www.ableton.com/en/blog/categories/tutorials/"
            className="latest-nav-link"
          >
            Tutorials
          </a>
          <a
            href="https://www.ableton.com/en/blog/categories/videos/"
            className="latest-nav-link"
          >
            Videos
          </a>
          <a
            href="https://www.ableton.com/en/blog/loop/"
            className="latest-nav-link"
          >
            Loop
          </a>
        </div>
      </div>
      <div className="latest-content-conteiner">
        {time
          .filter((index, d) => d < 3)
          .map((data) => {
            return (
              <a href={data.url} key={data.id} className="latest-content">
                <img src={data.img} alt="" className="latest-img" />
                <h3 className="latest-label artist">{data.group}</h3>
                <h2 className="latest-subtitle">{data.mainTitle}</h2>
              </a>
            );
          })}
      </div>
      <a href="/" className="link">
        See all posts
      </a>
      <div className="latest-header">
        <h2 className="latest-title">In focus: techno</h2>
        <a href="/" className="latest-link">
          Discover more
        </a>
      </div>
      <div className="latest-content-conteiner">
        {data
          .filter((d) => d.musicStyle === "Techno")
          .map((data) => {
            return (
              <a href={data.url} key={data.id} className="latest-content">
                <img src={data.img} alt="" className="latest-img" />
                <h3 className="latest-label artist">{data.group}</h3>
                <h2 className="latest-subtitle">{data.mainTitle}</h2>
              </a>
            );
          })}
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
        <Videos data={data} />
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
        {data
          .filter((d) => d.group === "Loop")
          .filter((index, d) => d < 3)
          .map((data) => {
            return (
              <a href={data.url} key={data.id} className="latest-content">
                <img src={data.img} alt="" className="latest-img" />
                <h2 className="latest-subtitle">{data.mainTitle}</h2>
              </a>
            );
          })}

        {/* <div className="latest-content">
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
        </div> */}
      </div>
      <a href="/" className="link">
        See more
      </a>
    </div>
  );
}

export { Latest };
