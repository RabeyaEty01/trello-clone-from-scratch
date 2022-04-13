import React from "react";

const Card = (props) => {
  const { card } = props;
  return (
    <div className="card-item">
      {card.cover && <img src={card.cover} className="card-cover" />}
      {card.title}
    </div>
  );
};

export default Card;
