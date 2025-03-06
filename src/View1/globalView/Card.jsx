import React from "react";
import "../../../public/card.css";

function Card() {
  return (
    <div className="card item-a" style={{ width: "25rem", height: "20.58rem" }}>
      <div className="card-title container">
        <h6>
          Overdue work orders <br /> All assets & All Groups
        </h6>
      </div>
      <div className="card-body body-container">
        <p className="card-text">
          0<br />
          <span className="lower-p">of 0</span>
        </p>
      </div>
    </div>
  );
}

export default Card; // Export the component