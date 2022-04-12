import BoardContent from "../src/components/BoardContent/BoardContent";
import Boardbar from "../src/components/Shared/Boardbar";
import Navbar from "../src/components/Shared/Navbar";

export default function Home() {
  return (
    <div className="trello-master">
      <Navbar />
      <Boardbar />
      <BoardContent/>
    </div>
  );
}
