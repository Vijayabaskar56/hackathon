import "./HeroImgStyle.css";
import React from "react";
import IntroImg from "../assets/main-img.png";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img
          className="intro-img"
          src={IntroImg}
          alt=" IntroImg"
        />
      </div>
      <div className="content">
        <h3>Hack it 2023</h3>
        <h1>Welcome to the Hackathon 2023 </h1>
        <div>
          <Link
            to="/Signup"
            className="btn">
            Sign-Up Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
