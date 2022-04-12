import Image from "next/image";
import React from "react";
import todo from "/public/images/todolist.jpg";

const Task = () => {
  return (
    <ul className="task-list">
      <li className="task-item">
        <Image src={todo} alt="todo image" className="image" />
        Title: DOTONLINE TRELLO
      </li>
      <li className="task-item">Add what you would like to work on below</li>
      <li className="task-item">Add what you would like to work on below</li>
      <li className="task-item">Add what you would like to work on below</li>
      <li className="task-item">Add what you would like to work on below</li>
      <li className="task-item">Add what you would like to work on below</li>
      <li className="task-item">Add what you would like to work on below</li>
      <li className="task-item">Add what you would like to work on below</li>
      <li className="task-item">Add what you would like to work on below</li>
    </ul>
  );
};

export default Task;
