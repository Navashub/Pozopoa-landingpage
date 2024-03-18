import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/Photo3-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Welcome to Pozo Poa Millers.
        </h1>
        <p className="primary-text">
          This is where passion for quality meets the rich heritage of maize milling.We are more than just a maize flour supplier;we are a community-focused company committed to delivering excellence in every grain.
        </p>
        <p className="primary-text">
          At Pozo Poa Millers, our mission goes beyond milling maize; it's about nourishing lives and sustaining futures. We are dedicated to promoting sustainable agriculture, empowering local farmers and contributing to the overall weell-being of our communities.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
