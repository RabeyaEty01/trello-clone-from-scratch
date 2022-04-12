import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { initialData } from "../../actions/initialData";
import Column from "../Column/Column";

const BoardContent = () => {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const boardFromDB = initialData.boards.find(
      (board) => board.id === "board-1"
    );
    if (boardFromDB) {
      setBoard(boardFromDB);
      //sort column
      boardFromDB.columns.sort(function (a, b) {
        return (
          boardFromDB.columnOrder.indexOf(a.id) -
          boardFromDB.columnOrder.indexOf(b.id)
        );
      });
      setColumns(boardFromDB.columns);
    }
  }, []);

  if (isEmpty(board)) {
    return <div className="not-found">Board not found</div>;
  }

  return (
    <div className="board-content">
      {columns.map((column, index) => (
        <Column key={index} column={column} />
      ))}
    </div>
  );
};

export default BoardContent;
