import React, { useContext, useState } from "react";
import "./style.css";
import MainContextProvider from "../../../context/DataContext";
import DataContext from "../../../context/DataContext";
import { Link } from "react-router-dom";
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
                <div className="card" key={item.id}>
                  <div className="card-img">
                    <img src={item.imgUrl} alt="" />
                  </div>
                  <div className="card-content">
                    <h3>
                      <Link to={"/product"}>{item.title}</Link>
                    </h3>
                    <span>${item.price}</span>
                  </div>
                </div>
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
        <div className="may-like-head"></div>
      </section>
    </div>
  );
}

export default Home;
