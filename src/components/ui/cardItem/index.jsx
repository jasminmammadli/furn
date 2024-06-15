import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function CardItem({imgUrl,title,price}) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={imgUrl} alt="" />
      </div>
      <div className="card-content">
        <h3>
          <Link to={"/product"}>{title}</Link>
        </h3>
        <span>${price}</span>
      </div>
    </div>
  );
}

export default CardItem;
