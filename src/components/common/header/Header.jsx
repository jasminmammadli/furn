import React from "react";
import HeadLogo from "./../../../assets/header-logo.png";
// import HeadLogo from "./../../../assets/footer-logo.png";
import { GoSearch } from "react-icons/go";
import { AiOutlineShopping } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import "./style.css";
function Header() {
  return (
    <header>
      <div className="head-logo-sec">
        <img src={HeadLogo} alt="" />
        <nav>
          <a href="">Home</a>
          <a href="">Product</a>
          <a href="">About</a>
          <a href="">Page</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
        </nav>
      </div>
      <div>
        <div className="head-inp-sec">
          <div className="inp-box">
            <input type="text" placeholder="Search products" />
            <GoSearch />
          </div>
          <a href="" className="head-account">
            My account
          </a>
          <AiOutlineShopping className="shopbag" />
        </div>
        <div className="head-menu-sec">
        <IoMdMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
