import { useState } from "react";

function Body4() {
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const event = (e) => {
    console.log(e);
    console.log(e.target.value);
  };

  return (
    <div>
      <input value={text} onChange={handleOnChange} onClick={event} />
      <h2>{text}</h2>
    </div>
  );
}

function Body5() {
  const [date, setDate] = useState("");
  const handleOnChange = (e) => {
    console.log("변경된 값: ", e.target.value);
    setDate(e.target.value);
  };

  const event = (e) => {
    console.log(e);
    console.log(e.target.value);
  };

  return (
    <div>
      <input
        type="date"
        value={date}
        onChange={handleOnChange}
        onClick={event}
      />
    </div>
  );
}

export { Body4, Body5 };
