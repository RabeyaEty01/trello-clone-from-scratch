import React from "react";

const Card = (props) => {
  const { card } = props;
  return (
    <li className="card-item">
      {card.cover && <img src={card.cover} className="card-cover" />}
      {card.title}
    </li>
  );
};

export default Card;
