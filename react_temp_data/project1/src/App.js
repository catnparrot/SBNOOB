import "./App.css";
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import { useRef, useEffect, useState } from "react";
import { Body, Body1 } from "./component/Body";
import { Even, Odd } from "./component/Even";

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    let x = value;
    console.log(x);
    setCount(count + value);
  };

  const [str, setStr] = useState("");
  const handle = (e) => {
    setStr(e.target.value);
  };

  // let boola = true;
  let boolb = false;
  const didMountRef = useRef(boolb);

  useEffect(() => {
    console.log(didMountRef);
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log("component updated");
    }
    console.log("update: ", count, str);
  }, [count, str]);

  return (
    <div className="App">
      <section>
        <Body c={str} d={handle} />
        <Body1 />
      </section>

      <h1>Simple Counter</h1>
      <section>
        <Viewer a={count} />
        {count % 2 === 0 ? <Even /> : <Odd />}
      </section>
      <section>
        <Controller func={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
