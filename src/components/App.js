import ReviewList from "./ReviewList";
import items from "../mock.json";
import { useState } from "react";

function App() {
  const [order, setOther] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOther("createdAt");
  const handleBestClick = () => setOther("rating");

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} />
    </div>
  );
}

export default App;
