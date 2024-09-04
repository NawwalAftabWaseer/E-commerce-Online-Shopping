import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Footer.css"; // Update this path if needed

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section contact-us">
            <h3>Contact Us</h3>
            <p>Email: support@khareedly.com</p>
            <p>Phone: +1-234-567-8901</p>
            <p>Address: 1234 Elm Street, Some City, Some Country</p>
          </div>

          <div className="footer-section quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/about">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/about">Terms of Service</Link>
              </li>
              <li>
                <Link to="/about">Frequently Asked Questions</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
