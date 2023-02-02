import { useState } from "react";
import Rating from "./Rating";
import ReviewForm from "./ReviewForm";
import "./ReviewList.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function ReviewListItem({ item, onDelete, onEdit }) {
  const handleDeleteClick = () => onDelete(item.id);

  const handleEditClick = () => {
    onEdit(item.id);
  };

  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem-img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <Rating value={item.rating} />
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
        <button onClick={handleEditClick}>수정</button>
      </div>
    </div>
  );
}

function ReviewList({ items, onDelete }) {
  const [edittingId, setEdittingId] = useState(null);

  const handleCancle = () => setEdittingId(null);

  return (
    <ul>
      {items.map((item) => {
        if (item.id === edittingId) {
          const { imgUrl, title, rating, content } = item;
          const initialValues = { title, rating, content };
          return (
            <li key={item.id}>
              <ReviewForm
                initialValues={initialValues}
                initialPreview={imgUrl}
                onCancel={handleCancle}
              />
            </li>
          );
        }
        return (
          <li key={item.id}>
            <ReviewListItem
              item={item}
              onDelete={onDelete}
              onEdit={setEdittingId}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ReviewList;
