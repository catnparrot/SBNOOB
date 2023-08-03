import "./App.css";
import Header from "./component/Header";
import TestComp from "./component/TestComp";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useRef, useReducer } from "react";
import mockTodo from "./data/mock";
import reducer from "./reducers";

function App() {
  const [todolist, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  console.log(todolist);

  return (
    <div className="App">
      <TestComp />
      <Header />
      <TodoEditor
        a={(content) => {
          dispatch({
            type: "CREATE",
            newItem: {
              id: idRef.current,
              content,
              isDone: false,
              createdDate: new Date().getTime(),
            },
          });
          idRef.current += 1;
        }}
      />
      <TodoList
        a={todolist}
        b={(targetId) => {
          dispatch({
            type: "UPDATE",
            targetId,
          });
        }}
        d={(targetId) => {
          dispatch({
            type: "DELETE",
            targetId,
          });
        }}
      />
    </div>
  );
}

export default App;
