import { TodoStateContext } from "../App";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import { useContext, useState } from "react";

const TodoList = () => {
  const todolist = useContext(TodoStateContext);
  console.log(todolist);

  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todolist
      : todolist.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div className="TodoList">
      <h4>Todo List 🎩</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="keyword"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

// TodoList.defaultProps = {
//   todolist: [],
// };

export default TodoList;
