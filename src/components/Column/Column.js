import React from "react";
import Task from "../Task/Task";
const Column = () => {
  return (
    <div className="column">
      <header>Sunday</header>
      <Task />
      <footer>Add another card</footer>
    </div>
  );
};

export default Column;
