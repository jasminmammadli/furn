import React from "react";
import "./style.css";
import Services1 from "./../../../assets/services1.svg";
import Services2 from "./../../../assets/services2.svg";
import Services3 from "./../../../assets/services3.svg";
import Services4 from "./../../../assets/services4.svg";
function FooterOverSection() {
  return (
    <div className="footer-over-section">
      <div className="container">
        <div className="footer-over-wrapper">
          <div className="over-card">
            <img src={Services1} alt="" className="a1" />
            <div className="over-card-content">
              <h5>Fast & Free Delivery</h5>
              <p>Free delivery on all orders</p>
            </div>
          </div>
          <div className="over-card">
            <img src={Services2} alt="" className="a1" />
            <div className="over-card-content">
              <h5>Secure Payment</h5>
              <p>Free delivery on all orders</p>
            </div>
          </div>
          <div className="over-card">
            <img src={Services3} alt="" className="a1" />
            <div className="over-card-content">
              <h5>Money Back Guarantee</h5>
              <p>Free delivery on all orders</p>
            </div>
          </div>
          <div className="over-card">
            <img src={Services4} alt="" className="a1" />
            <div className="over-card-content">
              <h5>Online Support</h5>
              <p>Free delivery on all orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterOverSection;
