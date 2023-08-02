const Controller = ({ func }) => {
  return (
    <div>
      <button onClick={() => func(-1)}>-1</button>
      <button onClick={() => func(-10)}>-10</button>
      <button onClick={() => func(-100)}>-100</button>
      <button onClick={() => func(100)}>+100</button>
      <button onClick={() => func(10)}>+10</button>
      <button onClick={() => func(1)}>+1</button>
    </div>
  );
};

export default Controller;
