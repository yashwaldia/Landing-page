import React from "react";
// import herobg from "../Assets/herobg.png";
import img from "../Assets/img1.png";
import Navbar from "./Navbar";
// import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        {/* <div className="home-bannerImage-container">
          <img src={herobg} alt="" />
        </div> */}
        <div className="home-text-section">
          <h1 className="primary-heading">
            Start Quick Surveys
            & Earn Rewards
          </h1>
          <p className="primary-text">
            Waiting in a queue or in a subway? Share your opinion, 
            complete the survey and earn rewards
          </p>
          <button className="secondary-button">
            Book a Demo 
          </button>
        </div>
        <div className="home-image-section">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
