import React from "react";
import AllCards from "./AllCards";
import Title from "./Title";

function HeaderAndCard(props) {
  return (
    <div className="header-and-card">
      <Title />
      <AllCards />
    </div>
  );
}

export default HeaderAndCard;