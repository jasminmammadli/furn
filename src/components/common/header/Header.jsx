import React from "react";
import HeadLogo from "./../../../assets/header-logo.png";
import HeroImage from "./../../../assets/hero.jpg";
import HeroOtherImage from "./../../../assets/hero-other.jpg";
import { GoSearch } from "react-icons/go";
import { AiOutlineShopping } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  const backgroundImageUrl = pathname === '/' ? HeroImage : HeroOtherImage;

  return (
    <header>
      <div className="header">
        <div className="head-logo-sec">
          <img src={HeadLogo} alt="Header Logo" />
          <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/product"}>Product</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/page"}>Page</Link>
            <Link to={"/blog"}>Blog</Link>
            <Link to={"/contact"}>Contact</Link>
          </nav>
        </div>
        <div>
          <div className="head-inp-sec">
            <div className="inp-box">
              <input type="text" placeholder="Search products" />
              <GoSearch />
            </div>
            <Link to={"/login"} className="head-account">
              My account
            </Link>
            <AiOutlineShopping className="shopbag" />
          </div>
          <div className="head-menu-sec">
            <IoMdMenu />
          </div>
        </div>
      </div>
      <div
        className="hero"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(140, 130, 130, 0.4) 0%,
              rgba(143, 130, 133, 0.4) 46%,
              rgba(141, 128, 130, 0.38) 48%,
              rgba(141, 130, 133, 0.37) 49%,
              rgba(140, 129, 129, 0.36) 50%,
              rgba(139, 128, 130, 0.35) 51%,
              rgba(142, 130, 130, 0.34) 52%,
              rgba(143, 131, 131, 0.32) 55%,
              rgba(141, 129, 132, 0.31) 56%,
              rgba(142, 129, 132, 0.3) 57%,
              rgba(139, 129, 129, 0.28) 59%,
              rgba(140, 129, 133, 0.27) 60%,
              rgba(142, 131, 131, 0.26) 61%,
              rgba(140, 129, 129, 0.25) 62%,
              rgba(141, 129, 129, 0.24) 63%,
              rgba(143, 131, 131, 0.23) 64%,
              rgba(142, 130, 130, 0.22) 65%,
              rgba(142, 130, 130, 0.21) 66%,
              rgba(140, 127, 132, 0.2) 67%,
              rgba(139, 130, 130, 0.19) 68%,
              rgba(139, 130, 130, 0.18) 69%,
              rgba(142, 128, 128, 0.17) 70%,
              rgba(140, 130, 130, 0.16) 71%,
              rgba(141, 130, 135, 0.15) 72%,
              rgba(143, 128, 133, 0.14) 73%,
              rgba(142, 125, 130, 0.13) 74%,
              rgba(142, 130, 130, 0.12) 75%,
              rgba(140, 128, 134, 0.11) 76%,
              rgba(137, 124, 131, 0.1) 77%,
              rgba(145, 131, 131, 0.09) 78%,
              rgba(142, 128, 135, 0.09) 79%,
              rgba(139, 124, 131, 0.08) 80%,
              rgba(140, 132, 132, 0.08) 81%,
              rgba(144, 127, 127, 0.07) 82%,
              rgba(142, 123, 132, 0.07) 83%,
              rgba(143, 133, 133, 0.06) 84%,
              rgba(138, 128, 128, 0.05) 85%,
              rgba(134, 121, 121, 0.05) 86%,
              rgba(148, 134, 134, 0.05) 87%,
              rgba(142, 128, 128, 0.04) 88%,
              rgba(136, 119, 119, 0.04) 89%,
              rgba(137, 137, 137, 0.03) 90%,
              rgba(128, 128, 128, 0.03) 91%,
              rgba(142, 113, 113, 0.02) 92%,
              rgba(146, 146, 146, 0.02) 93%,
              rgba(128, 128, 128, 0.01) 94%,
              rgba(128, 128, 128, 0.01) 95%,
              rgba(255, 255, 255, 0) 96%,
              rgba(0, 0, 0, 0) 97%,
              rgba(0, 0, 0, 0) 100%
            ),
            url(${backgroundImageUrl})
          `,
        }}
      >
        {pathname === "/" ? (
          <div className="home-path">
            <div className="container">
              <div className="hero-content">
                <span>70% sale off</span>
                <h1>furniture at cost</h1>
                <p>
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </p>
                <button>discover more</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="other-path">
              <h1>{pathname.slice(1)}</h1>
              <div className="head-breadcrumb">
                <Link to={"/"}>Home</Link>
                <MdKeyboardArrowRight />
                <span>{pathname.slice(1)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="crem-div"></div>
      
    </header>
  );
}

export default Header;
