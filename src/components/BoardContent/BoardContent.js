import { cloneDeep, isEmpty } from "lodash";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Container, Draggable } from "react-smooth-dnd";
import { initialData } from "../../actions/initialData";
import { applyDrag } from "../../utilities/dragDrop";
import { mapOrder } from "../../utilities/sorts";
import Column from "../Column/Column";
import cross from "/public/images/cross.svg";
import plus from "/public/images/PLUS.svg";

const BoardContent = () => {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);
  const [openNewColumnsForm, setOpenNewColumnForm] = useState(false);
  const newColumnInputRef = useRef(null);
  const [newColumnTitle, setNewColumnTitle] = useState("");
  const onNewColumnTitleChange = (e) => setNewColumnTitle(e.target.value);

  const toggleOpenNewColumnForm = () =>{
    setNewColumnTitle("");
    setOpenNewColumnForm(!openNewColumnsForm);
  }


  useEffect(() => {
    const boardFromDB = initialData.boards.find(
      (board) => board.id === "board-1"
    );
    if (boardFromDB) {
      setBoard(boardFromDB);
      //sort column

      setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, "id"));
    }
  }, []);

  useEffect(() => {
    if (newColumnInputRef && newColumnInputRef.current) {
      newColumnInputRef.current.focus();
      newColumnInputRef.current.select();
    }
  }, [openNewColumnsForm]);

  if (isEmpty(board)) {
    return <div className="not-found">Board not found</div>;
  }

  const onColumnDrop = (dropResult) => {
    let newColumns = [...columns];
    newColumns = applyDrag(newColumns, dropResult);

    let newBoard = { ...board };
    newBoard.columnOrder = newColumns.map((c) => c.id);
    newBoard.columns = newColumns;

    setColumns(newColumns);
    setBoard(newBoard);
  };

  const onCardDrop = (columnId, dropResult) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      let newColumns = [...columns];

      let currentColumn = newColumns.find((c) => c.id === columnId);
      currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
      currentColumn.cardOrder = currentColumn.cards.map((i) => i.id);
      setColumns(newColumns);
    }
  };

  const addNewColumn = () => {
    if (!newColumnTitle) {
      newColumnInputRef.current.focus();
      return;
    }
    const newColumnToAdd = {
      id: Math.random().toString(36).substr(2, 5), //5 random characters will remove when we implement code api
      boardId: board.id,
      title: newColumnTitle.trim(),
      cardOrder: [],
      cards: [],
    };
    let newColumns = [...columns];
    newColumns.push(newColumnToAdd);

    let newBoard = { ...board };
    newBoard.columnOrder = newColumns.map((c) => c.id);
    newBoard.columns = newColumns;
    setColumns(newColumns);
    setBoard(newBoard);
    setNewColumnTitle("");
    toggleOpenNewColumnForm();
    console.log(newColumnTitle);
  };

  const onUpdateColumn = (newColumnToUpdate) => {
    const columnIdToUpdate = newColumnToUpdate.id;
    let newColumns = [...columns];
    const columnIndexToUpdate = newColumns.findIndex(
      (i) => i.id === columnIdToUpdate
    );
    if (newColumnToUpdate._destroy) {
      //remove column
      newColumns.splice(columnIndexToUpdate, 1);
    } else {
      //update column info
      newColumns.splice(columnIndexToUpdate, 1, newColumnToUpdate);
    }
    let newBoard = { ...board };
    newBoard.columnOrder = newColumns.map((c) => c.id);
    newBoard.columns = newColumns;
    setColumns(newColumns);
    setBoard(newBoard);
  };



  return (
    <div className="board-content">
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        getChildPayload={(index) => columns[index]}
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: "column-drop-preview",
        }}
      >
        {columns.map((column, index) => (
          <Draggable key={index}>
            <Column
              column={column}
              onCardDrop={onCardDrop}
              onUpdateColumn={onUpdateColumn}
            />
          </Draggable>
        ))}
      </Container>

      <div className="trello-container">
        <div className="row">
          {!openNewColumnsForm && (
            <div className="col">
              <div className="add-new-column" onClick={toggleOpenNewColumnForm}>
                <div className="d-flex">
                  <div className="icon">
                    <Image src={plus} alt="" width="14px" height="14px" />
                  </div>
                  <span>Add another column</span>
                </div>
              </div>
            </div>
          )}

          {openNewColumnsForm && (
            <div className="row">
              <div className="col ">
                <div className="enter-new-column">
                  <Form.Control
                    className="input-enter-new-column"
                    size="sm"
                    type="text"
                    placeholder="Enter column title..."
                    ref={newColumnInputRef}
                    value={newColumnTitle}
                    onChange={onNewColumnTitleChange}
                    onKeyDown={(event) =>
                      event.key === "Enter" && addNewColumn()
                    }
                  />
                  <Button variant="success" size="sm" onClick={addNewColumn}>
                    Add column
                  </Button>
                  <span
                    className="cancel-icon"
                    onClick={toggleOpenNewColumnForm}
                  >
                    <Image src={cross} alt="" width="14px" height="14px" />
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardContent;
