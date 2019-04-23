import React from "react";
import "./Card.scss";

import CardBanner from './CardBanner';
import CardContent from './CardContent';


function CardContainer()  {
  return (
    <div className="card-container">
      <CardBanner />
      <CardContent />
    </div>
  );
};


export default CardContainer;