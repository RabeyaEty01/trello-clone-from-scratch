import Image from "next/image";
import todo from "/public/images/todo.jpeg";

export default function Home() {
  return (
    <div className="trello-master">
      <nav className="navbar app">App Bar</nav>
      <nav className="navbar board">Board Bar</nav>
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
    </div>
  );
}
