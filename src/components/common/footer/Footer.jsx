import React from "react";
import "./style.css";
import FoeterLogo from "./../../../assets/footer-logo.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      {/* <div className="footer-blue-section"> */}
      <div className="container">
        <div className="footer-wrapper">
          <div className="foot-sec-1">
            <a>
              <img src={FoeterLogo} alt="" />
            </a>
            <p>
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <ul className="footer-social">
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaPinterestP />
              </li>
            </ul>
          </div>
          <div className="foot-sec-2">
            <h3>Quics links</h3>
            <ul>
              <li>Image Licensin</li>
              <li>style guide</li>
              <li>privacy policy</li>
            </ul>
          </div>
          <div className="foot-sec-3">
            <h3>shop category</h3>
            <ul>
              <li>Image Licensin</li>
              <li>style guide</li>
              <li>privacy policy</li>
            </ul>
          </div>
          <div className="foot-sec-4">
            <h3>pertners</h3>
            <ul>
              <li>Image Licensin</li>
              <li>style guide</li>
              <li>privacy policy</li>
            </ul>
          </div>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
