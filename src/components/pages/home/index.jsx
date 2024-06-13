import React, { useState } from "react";
import "./style.css";
function Home() {
  let [buttons, setButtons] = useState([
    "sofa",
    "table",
    "chair",
    "bed",
    "lightning",
    "decore",
  ]);
  let [activeButton,setActiveButton]=useState(0)
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
                <button type="button" onClick={()=>setActiveButton(index)} className={`${activeButton==index && 'active'}`} key={index}>{item}</button>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
