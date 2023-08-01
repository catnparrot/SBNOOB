import "./App.css";
import { Body, Body0, Body1 } from "./component/Body1";
import Body2 from "./component/Body2";
import Body3 from "./component/Body3";
import { Body4, Body5 } from "./component/Body4";
import Footer from "./component/Footer";
import Header from "./component/Header";

function App() {
  const BodyProps1 = {
    name: "이정환",
    location: "부천시",
    foodlist: ["짜장면", "삼겹살", "소머리국밥"],
  };

  // const prop = 1;

  const prop2 = {
    abc: "가나다",
    bcd: "라마바",
  };

  // const prop3 = 3;

  return (
    <div className="App">
      <Header />
      <Body />
      <Body0 />
      <Body1 {...BodyProps1} />
      <Body2 {...prop2} />
      <Body3 />
      <Body4 />
      <Body5 />
      <Footer />
    </div>
  );
}

export default App;
