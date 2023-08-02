import "./TodoItem.css";

const TodoItem = ({ id, content, isDone, createDate, c, e }) => {
  const onChangeCheckbox = () => {
    c(id);
  };
  const onClickDelete = () => {
    e(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
