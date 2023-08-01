import "./Body.css";

function Body1({ name, location, foodlist }) {
  return (
    <div className="body">
      이름:{name}, 지역:{location} 음식리스트: {foodlist.length}
    </div>
  );
}

function Body() {
  const num = 19;
  return (
    <div>
      <h2>
        {num}: {num % 2 === 0 ? "짝수" : "홀수"}
      </h2>
    </div>
  );
}

function Body0() {
  const num = 19;
  if (num % 2 === 0) {
    return (
      <div>
        <h2>짝수</h2>
      </div>
    );
  } else {
    return (
      <div className="body">
        <h2>홀수</h2>
      </div>
    );
  }
}

export { Body, Body0, Body1 };
