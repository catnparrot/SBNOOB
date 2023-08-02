import "./TodoItem.css";

const TodoItem = ({ content, isDone, createDate }) => {
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone} />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button>delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
