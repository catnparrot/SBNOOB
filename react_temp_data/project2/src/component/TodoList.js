import TodoItem from "./TodoItem";
import "./TodoList.css";
import { useState } from "react";

const TodoList = ({ a, b, d }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? a
      : a.filter((it) =>
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
          <TodoItem key={it.id} {...it} c={b} e={d} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
