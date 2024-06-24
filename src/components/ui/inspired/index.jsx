import React from "react";
import "./style.css";
import { FaInstagram } from "react-icons/fa";
import { TfiInstagram } from "react-icons/tfi";
import InstaImage1 from "./../../../assets/instra1.jpg"
import InstaImage2 from "./../../../assets/instra2.jpg"
import ButtonVertical from "../buttonVetical";
function Inspired() {
  return (
    <section className="inspired">
      <div className="inspired-content">
        <FaInstagram className="insta-icon" />
        <h2>get inspired with instagram</h2>
        <p>
          Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
          quis viverra ornare, eros dolor interdum nulla.
        </p>
        <ButtonVertical path="/product" title="discover more" />
      </div>
      <div className="inspired-image">
        <div className="instra-image">
          <img src={InstaImage1} alt="" />
          <div className="abs">
          <TfiInstagram />
          </div>
        </div>
        <div className="instra-image">
          <img src={InstaImage2} alt="" />
          <div className="abs">
          <TfiInstagram />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inspired;
