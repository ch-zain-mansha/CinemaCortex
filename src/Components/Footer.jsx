import React from "react";
import "../Styles/footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-title">CinemaCortex</h2>
          <p className="footer-description">
            Your ultimate destination for movie insights, reviews, and more.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/More/AboutUs">About Us</a></li>
            <li><a href="/More/ContactUs">Contact Us</a></li>
            <li><a href="/More/PrivacyPolicy">Privacy Policy</a></li>
            <li><a href="/Terms&Conditions">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-subtitle">Follow Us</h3>
          <ul className="footer-social">
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CinemaCortex. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
