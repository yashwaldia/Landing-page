import React from "react";
import './Contact.css'; 
import minilogo from "../Assets/minilogo.svg";
import { Facebook, LinkedIn, Instagram, Twitter } from '@mui/icons-material';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrap">
        <div className="left-div">
          <div className="logo">
            <img src={minilogo} alt="Logo" />
          </div>
          <h2>We'd love to hear from you!</h2>
          <div className="social-icons">
            <a href="#"><Facebook fontSize="large" style={{ color: "#fff" }} /></a>
            <a href="#"><LinkedIn fontSize="large" style={{ color: "#fff" }} /></a>
            <a href="#"><Instagram fontSize="large" style={{ color: "#fff" }} /></a>
            <a href="#"><Twitter fontSize="large" style={{ color: "#fff" }} /></a>
          </div>
        </div>

        {/* Right Box */}
        <div className="right-div">
          <h1>Contact Us</h1>
          <form action="#" method="post">
            <label htmlFor="name">Name*</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="phone">Phone Number*</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message*</label>
            <textarea id="message" name="message" required></textarea>

            <button className="secondary-button" type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
