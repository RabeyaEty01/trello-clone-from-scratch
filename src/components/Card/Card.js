import React from "react";

const Card = (props) => {
  const { card } = props;
  return (
    <div className="card-item">
      {/* {card.cover && (
        <img
          src={card.cover}
          alt="cover-img"
          className="card-cover"
          onMouseDown={(e) => e.preventDefault()}
        />
      )} */}
      {/* {card.title} */}
    </div>
  );
};

export default Card;
