import Image from "next/image";
import React from "react";
import todo from "/public/images/todolist.jpg";

const Card = () => {
  return (
    <ul className="card-list">
      <li className="card-item">
        <Image src={todo} alt="todo image" className="image" />
        Title: DOTONLINE TRELLO
      </li>
      <li className="card-item">Add what you would like to work on below</li>
      <li className="card-item">Add what you would like to work on below</li>
      <li className="card-item">Add what you would like to work on below</li>
      <li className="card-item">Add what you would like to work on below</li>
      <li className="card-item">Add what you would like to work on below</li>
      <li className="card-item">Add what you would like to work on below</li>
      <li className="card-item">Add what you would like to work on below</li>
      <li className="card-item">Add what you would like to work on below</li>
    </ul>
  );
};

export default Card;
