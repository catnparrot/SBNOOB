import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useState, useRef } from "react";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습",
    createdDate: new Date().getTime(),
  },
];

function App() {
  // const [todo, setTodo] = useState([]);
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) =>
        it.id === targetId ? { ...it, isDone: !it.isDone } : it
      )
    );
  };

  console.log(todo);

  return (
    <div className="App">
      <Header />
      <TodoEditor a={onCreate} />
      <TodoList a={todo} />
    </div>
  );
}

export default App;
