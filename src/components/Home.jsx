import React from "react";
import img1 from "../Images/pic1.png";
import img2 from "../Images/pic2.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="hero_sec">
        <div className="hero_left">
          <img src={img1} className="left_img" alt="hero" />
          <p>Give your nails a touch of Royalty</p>
        </div>

        <div className="hero_right">
          <div className="top box"></div>
          <img src={img2} alt="hero" />
          <div className="bottom box"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
