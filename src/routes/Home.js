import React, { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <h1>To Do</h1>
      <form>
        <input type="text" value={text} onchange={onChange} />
        <button>ADD</button>
      </form>
      <ul></ul>
    </>
  );
}
export default Home;
