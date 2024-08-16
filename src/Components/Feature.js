import React from "react";
import './Feature.css'; // Import the new CSS file
import featureImage from '../Assets/features.png'; // Import the image

const Feature = () => {
  return (
    <div className="feature-wrapper">

      <div className="feature-top">
        <h1>Our Feature</h1>
        <p className="about-text">
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
        elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
        elit.
        </p>
        <img src={featureImage} alt="Features" className="feature-image" /> {/* Add the image */}
      </div>
      
    </div>
  );
};

export default Feature;
