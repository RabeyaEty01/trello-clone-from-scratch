import Image from "next/image";
import React from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { mapOrder } from "../../utilities/sorts";
import Card from "../Card/Card";
import plus from "/public/images/PLUS.svg";

const Column = (props) => {
  const { column, onCardDrop } = props;
  const cards = mapOrder(column.cards, column.cardOrder, "id");

  return (
    <div className="column">
      <header className="column-drag-handle">
        <div className="column-title"> {column.title}</div>
        <div className="column-dropdown-actions">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle dropdwon-btn"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
          
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Add card...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
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
      </div>

      <footer>
        <div className="d-flex footer-actions">
          <div className="icon d-flex align-items-center">
            <Image src={plus} alt="" width="16px" height="16px" />
          </div>
          <div>Add another card</div>
        </div>
      </footer>
    </div>
  );
};

export default Column;
