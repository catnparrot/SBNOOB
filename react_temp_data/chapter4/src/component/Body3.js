function Body3() {
  function handleOnClick(e) {
    console.log("1", e);
    console.log("2", e.target);
    console.log("3", e.target.formAction);
    console.log("4", e.target.dataset);

    console.log(e.target.name);
    alert("버튼 클릭");
  }

  return (
    <div>
      <button name="A btn" onClick={handleOnClick}>
        A
      </button>
      <button name="B btn" onClick={handleOnClick}>
        B
      </button>
    </div>
  );
}

export default Body3;
