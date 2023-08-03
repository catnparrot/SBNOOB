import { TodoDispatchContext } from "../App";
import "./TodoEditor.css";
import { useState, useRef, useContext } from "react";

const TodoEditor = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="TodoEditor">
      <h4>New Todo list 🖍</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="New Todo..."
        />
        <button onClick={onSubmit}>New</button>
      </div>
    </div>
  );
};

export default TodoEditor;
