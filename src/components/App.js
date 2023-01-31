import { useState } from "react";
import { getReviews } from "../api";
import ReviewList from "./ReviewList";

function App() {
  const [items, setItems] = useState([]);
  const [order, setOther] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOther("createdAt");
  const handleBestClick = () => setOther("rating");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoadClick = async () => {
    const { reviews } = await getReviews();
    setItems(reviews);
  };

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      <button onClick={handleLoadClick}>불러오기</button>
    </div>
  );
}

export default App;
