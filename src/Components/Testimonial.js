import React from "react";
import motivatesusimg from "../Assets/motivatesusimg.png";
import './Testimonial.css'; // Import the new CSS file
const Testimonial = () => {
  return (
    <div className="testimonial-section-wrapper">
      <div className="testimonial-section-top">
        {/* <p className="Testimonial-subheading">Testimonial</p> */}
        <h1 className="testimonial-heading">What motivates us to do this?</h1>
      </div>
      <div className="testimonial-section-bottom">
        <div className="testimonial-image">
          <img src={motivatesusimg} alt="Profile" />
        </div>
        <div className="testimonial-text">
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
