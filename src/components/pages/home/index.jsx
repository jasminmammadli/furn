import React, { useContext, useState } from "react";
import "./style.css";
import DataContext from "../../../context/DataContext";
import { Link } from "react-router-dom";
import CardItem from "../../ui/cardItem";
import { FaInstagram } from "react-icons/fa";
import InstaImage1 from "./../../../assets/instra1.jpg"
import InstaImage2 from "./../../../assets/instra2.jpg"
import ButtonVertical from "../../ui/buttonVetical";
function Home() {
  let [buttons, setButtons] = useState([
    "sofa",
    "table",
    "chair",
    "bed",
    "lightning",
    "decore",
  ]);
  let [activeButton, setActiveButton] = useState(0);
  let { productData } = useContext(DataContext);
  return (
    <div>
      <section className="pop-prod">
        <div className="container">
          <div className="pop-prod-head">
            <h2>popular products</h2>
            <p>
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
          </div>
          <div className="pop-prod-nav">
            <nav>
              {buttons.map((item, index) => (
                <button
                  type="button"
                  onClick={() => setActiveButton(index)}
                  className={`${activeButton == index && "active"}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
          <div className="pop-prods-wrapper">
            {productData &&
              productData.slice(0, 3).map((item) => (
                <CardItem key={item.id} {...item}/>
              ))}
          </div>
        </div>
      </section>
      <section className="furniture-details">
        <div className="furniture-img"></div>
        <div className="furniture-detail-content">
          <h2>best furniture manufacturer</h2>
          <p>
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare, eros dolor interdum nulla.
          </p>
          <p className="last-p">
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare, eros dolor interdum nulla.
          </p>
          <button>discover more</button>
        </div>
      </section>
      <section className="may-like">
        <div className="container">
          <div className="may-like-head">
            <h2>products you may like</h2>
            <p>
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
          </div>
          <div className="may-like-wrapper">
            {
              productData && productData.slice(3,6).map(item=><CardItem key={item.id} {...item}/>)
            }
          </div>
          <div className="may-like-btn">
            <ButtonVertical path={'/product'} title={'discover more'}/>
          </div>
        </div>
      </section>

      <section className="inspired">
        <div className="inspired-content">
          <FaInstagram className="insta-icon" />
          <h2>get inspired with instagram</h2>
          <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          <ButtonVertical path='/product' title='discover more'/>
        </div>
        <div className="inspired-image">
          <div className="instra-image">
            <img src={InstaImage1} alt="" />
          </div>
          <div className="instra-image">
            <img src={InstaImage2} alt="" />
          </div>

        </div>
      </section>

      <section className="top-pick">
        <div className="container">
          <div className="top-pick-head">
            <h2>top pick</h2>
            <p>
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
          </div>
          <div className="top-pick-wrapper">
            {
              productData && productData.slice(6).map(item=><CardItem key={item.id} {...item}/>)
            }
          </div>
          <div className="top-pick-btn">
            <ButtonVertical path={'/product'} title='discover more'/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
