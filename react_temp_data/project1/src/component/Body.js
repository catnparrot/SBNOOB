function Body({ c, d }) {
  return (
    <div>
      <h1>Body</h1>
      <p>{c}</p>
      <input onChange={d} />
    </div>
  );
}

function Body1({ e, f }) {
  return (
    <div>
      <h1>Body1</h1>
      <p>{e}</p>
      <input value={e} onChange={f} />
    </div>
  );
}
export { Body, Body1 };
