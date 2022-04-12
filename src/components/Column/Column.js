import React from "react";
import Card from "../Card/Card";
const Column = (props) => {
  const {id,title}=props.column;
  return (
    <div className="column">
      <header>{title}</header>
      <Card />
      <footer>Add another card</footer>
    </div>
  );
};

export default Column;
