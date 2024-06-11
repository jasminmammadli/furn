import React from "react";
import HeadLogo from "./../../../assets/header-logo.png";
// import HeadLogo from "./../../../assets/footer-logo.png";
import { GoSearch } from "react-icons/go";
import { AiOutlineShopping } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import "./style.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="head-logo-sec">
        <img src={HeadLogo} alt="" />
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/product'}>Product</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/page'}>Page</Link>
          <Link to={'/blog'}>Blog</Link>
          <Link to={'/contact'}>Contact</Link>
        </nav>
      </div>
      <div>
        <div className="head-inp-sec">
          <div className="inp-box">
            <input type="text" placeholder="Search products" />
            <GoSearch />
          </div>
          <Link to={'/login'} className="head-account">
            My account
          </Link>
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
