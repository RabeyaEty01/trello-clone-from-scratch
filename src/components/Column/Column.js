import { cloneDeep } from "lodash";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Container, Draggable } from "react-smooth-dnd";
import { MODAL_ACTION_CONFIRM } from "../../utilities/constants";
import {
  saveContentAfterPressEnter,
  selectAllInlineText,
} from "../../utilities/contentEditable";
import { mapOrder } from "../../utilities/sorts";
import Card from "../Card/Card";
import ConfirmModal from "../Common/ConfirmModal";
import cross from "/public/images/cross.svg";
import plus from "/public/images/PLUS.svg";

const Column = (props) => {
  const { column, onCardDrop, onUpdateColumn } = props;
  const cards = mapOrder(column.cards, column.cardOrder, "id");
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [columnTitle, setColumnTitle] = useState("");
  const handleColumnTitleChange = (e) => setColumnTitle(e.target.value);
  const [openNewCardForm, setOpenCardForm] = useState(false);
  const toggleOpenNewCardForm = () => {
    setNewCardTitle("");
    setOpenCardForm(!openNewCardForm);
  };
  const newCardTextareaRef = useRef(null);

  const [newCardTitle, setNewCardTitle] = useState("");
  const onNewCardTitleChange = (e) => setNewCardTitle(e.target.value);

  useEffect(() => {
    setColumnTitle(column.title);
  }, [column.title]);

  useEffect(() => {
    if (newCardTextareaRef && newCardTextareaRef.current) {
      newCardTextareaRef.current.focus();
      newCardTextareaRef.current.select();
    }
  }, [openNewCardForm]);

  const toglleShowConfirmModal = () => setShowConfirmModal(!showConfirmModal);

  const onConfirmModalAction = (type) => {
    console.log(type);
    if (type === MODAL_ACTION_CONFIRM) {
      //remove column
      const newColumn = {
        ...column,
        _destroy: true,
      };
      onUpdateColumn(newColumn);
    }
    toglleShowConfirmModal();
  };

  const handleColumnTitleBlur = () => {
    const newColumn = {
      ...column,
      title: columnTitle,
    };
    onUpdateColumn(newColumn);
  };

  const addNewCard = () => {
    if (!newCardTitle) {
      newCardTextareaRef.current.focus();
      return;
    }

    const newCardToAdd = {
      id: Math.random().toString(36).substr(2, 5), //5 random characters will remove when we implement code api
      boardId: column.boardId,
      columnId: column.id,
      title: newCardTitle.trim(),
      cover: null,
    };

    let newColumn = cloneDeep(column);
    newColumn.cards.push(newCardToAdd);
    newColumn.cardOrder.push(newCardToAdd.id);
    onUpdateColumn(newColumn);
    setNewCardTitle("");
    toggleOpenNewCardForm();
  };

  return (
    <div className="column">
      <header className="column-drag-handle">
        <div className="column-title">
          <Form.Control
            size="sm"
            type="text"
            className="trello-content-editable"
            value={columnTitle}
            onChange={handleColumnTitleChange}
            onBlur={handleColumnTitleBlur}
            onKeyDown={saveContentAfterPressEnter}
            onClick={selectAllInlineText}
            onMouseDown={(e) => e.preventDefault()}
            spellCheck={false}
          />
        </div>
        <div className="column-dropdown-actions">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle dropdwon-btn"
              type="button"
              size="sm"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#"  onClick={toggleOpenNewCardForm}>
                  Add card...
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={toglleShowConfirmModal}
                >
                  Remove column...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Move all cards in this column...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Archive all cards in this column...
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="card-list">
        <Container
          orientation="vertical"
          groupName="col"
          onDrop={(dropResult) => onCardDrop(column.id, dropResult)}
          getChildPayload={(index) => cards[index]}
          dragClass="card-ghost"
          dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: "cards-drop-preview",
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map((card, index) => (
            <Draggable key={index}>
              <Card card={card} />
            </Draggable>
          ))}
        </Container>
        {openNewCardForm && (
          <div className="add-new-card-area">
            <Form.Control
              className="textarea-enter-new-card"
              size="sm"
              as="textarea"
              rows="3"
              placeholder="Enter a title for this card..."
              ref={newCardTextareaRef}
              value={newCardTitle}
              onChange={onNewCardTitleChange}
              onKeyDown={(event) => event.key === "Enter" && addNewCard()}
            />
          </div>
        )}
      </div>

      <footer>
        {openNewCardForm && (
          <div className="add-new-card-actions">
            <Button variant="success" size="sm" onClick={addNewCard}>
              Add card
            </Button>
            <span className="cancel-icon" onClick={toggleOpenNewCardForm}>
              <Image src={cross} alt="" width="14px" height="14px" />
            </span>
          </div>
        )}
        {!openNewCardForm && (
          <div
            className="d-flex footer-actions"
            onClick={toggleOpenNewCardForm}
          >
            <div className="icon d-flex align-items-center">
              <Image src={plus} alt="" width="16px" height="16px" />
            </div>
            <div>Add another card</div>
          </div>
        )}
      </footer>

      <ConfirmModal
        show={showConfirmModal}
        onAction={onConfirmModalAction}
        title="Remove column"
        content={`Are you sure you want to remove <strong> ${column.title} </strong>! All related cards will also be removed!`}
      />
    </div>
  );
};

export default Column;
