import React from "react";
import "../../../public/card.css";

function MiniCard(props) {
    const { className, title, content} = props; // Destructure props
  return (
    // Use parentheses for returning JSX
    <div className={`card ${className}`} style={{ width: "15rem", height:"10rem"}}>
      <div className="card-title container">
        <h6>
          {title}
        </h6>
      </div>
      <div className="card-body body-container">
        <p className="card-text">
          {content}
        </p>
      </div>
    </div>
  );
}

export default MiniCard; // Export the component