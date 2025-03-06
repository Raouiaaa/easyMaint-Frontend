import React from "react";
import Card from "./Card";
import MiniCard from "./MiniCard";
import "../../../public/allCards.css";

function AllCards() {
  return (
    <div className="grid-container">
      <Card />
      <MiniCard className="item-b" title="Open work orders" content="0" />
      <MiniCard className="item-c" title="Completed work orders" content="0" />
      <MiniCard className="item-d" title="Low stock items" content="0" />
    </div>
  );
}

export default AllCards;