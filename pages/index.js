import Image from "next/image";
import todo from "/public/images/todolist.jpg";

export default function Home() {
  return (
    <div className="trello-master">
      <nav className="nav app">App Bar</nav>
      <nav className="nav board">Board Bar</nav>
      <div className="board-columns">
        <div className="column">
          <header>Sunday</header>
          <ul>
            <li>
              <Image src={todo} alt="todo image" className="image" />
              Title: DOTONLINE TRELLO
            </li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
          </ul>
          <footer>Add another card</footer>
        </div>
        <div className="column">
          <header>Monday</header>
          <ul>
            <li>
              <Image src={todo} alt="todo image" className="image" />
              Title: DOTONLINE TRELLO
            </li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
          </ul>
          <footer>Add another card</footer>
        </div>
        <div className="column">
          <header>Tuesday</header>
          <ul>
            <li>
              <Image src={todo} alt="todo image" className="image" />
              Title: DOTONLINE TRELLO
            </li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
          </ul>
          <footer>Add another card</footer>
        </div>
        <div className="column">
          <header>Wednesday</header>
          <ul>
            <li>
              <Image src={todo} alt="todo image" className="image" />
              Title: DOTONLINE TRELLO
            </li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
          </ul>
          <footer>Add another card</footer>
        </div>
        <div className="column">
          <header>Thursday</header>
          <ul>
            <li>
              <Image src={todo} alt="todo image" className="image" />
              Title: DOTONLINE TRELLO
            </li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
          </ul>
          <footer>Add another card</footer>
        </div>
        <div className="column">
          <header>Friday</header>
          <ul>
            <li>
              <Image src={todo} alt="todo image" className="image" />
              Title: DOTONLINE TRELLO
            </li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
          </ul>
          <footer>Add another card</footer>
        </div>
        <div className="column">
          <header>Saturday</header>
          <ul>
            <li>
              <Image src={todo} alt="todo image" className="image" />
              Title: DOTONLINE TRELLO
            </li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
            <li>Add what you would like to work on below</li>
          </ul>
          <footer>Add another card</footer>
        </div>
      </div>
    </div>
  );
}
