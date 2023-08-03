import "./App.css";
import Header from "./component/Header";
import TestComp from "./component/TestComp";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import React, { useRef, useReducer } from "react";
import mockTodo from "./data/mock";
import reducer from "./reducers";

// export const TodoContext = React.createContext();
export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

function App() {
  // const [todo, setTodo] = useState([]);
  // const [todolist, setTodolist] = useState(mockTodo);
  const [todolist, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      },
    });

    // const newItem = {
    //   id: idRef.current,
    //   content,
    //   isDone: false,
    //   createdDate: new Date().getTime(),
    // };
    // setTodolist([newItem, ...todolist]);

    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    // setTodolist(
    //   todolist.map((it) =>
    //     it.id === targetId ? { ...it, isDone: !it.isDone } : it
    //   )
    // );
    dispatch({
      type: "UPDATE",
      targetId,
    });
  };

  const onDelete = (targetId) => {
    // setTodolist(todolist.filter((it) => it.id !== targetId));
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  console.log(todolist);

  return (
    <div className="App">
      <TestComp />
      <Header />
      <TodoStateContext.Provider value={todolist}>
        <TodoDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );

  // <TodoEditor a={onCreate} />
  // <TodoList a={todolist} b={onUpdate} d={onDelete} />
}

export default App;
