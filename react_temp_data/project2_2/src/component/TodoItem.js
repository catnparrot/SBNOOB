import { useContext } from "react";
import "./TodoItem.css";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, content, isDone, createdDate }) => {
  console.log(`${id} TodoItem updated`);
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  console.log(`${id} TodoItem updated`);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
