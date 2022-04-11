import Image from "next/image";
import React from "react";
import todo from "/public/images/checklist-1295319__480.webp";
const MasterPage = () => {
  return (
    <div className="board-columns mt-5">
      <div className="column">
        <header>Sunday</header>
        <ul>
          <li>
            <Image src={todo} alt="todo image" />
            Title: DOTONLINE TRELLO
          </li>
          <li>Add what you would like to work on below</li>
          <li>Add what you would like to work on below</li>
          <li>Add what you would like to work on below</li>
          <li>Add what you would like to work on below</li>
          <li>Add what you would like to work on below</li>
        </ul>
        <footer>Add another card</footer>
      </div>
    </div>
  );
};

export default MasterPage;
