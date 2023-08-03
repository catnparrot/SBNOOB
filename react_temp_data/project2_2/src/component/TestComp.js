import { useReducer } from "react";
import reducer from "../reducers";

function TestComp() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h4>TEST COMPONENT</h4>
      <div>
        <bold>{count}</bold>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>
          -
        </button>
        <button onClick={() => dispatch({ type: "INIT" })}>초기화</button>
      </div>
    </div>
  );
}

export default TestComp;
