import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";

function Home(toDos, addToDO) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefalut();
    setText("");
    addToDO(text);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onuSubmit={onSubmit}>
        <input type="text" value={text} onchange={onChange} />
        <button>ADD</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <toDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}
function mapStateState(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDO(text)),
  };
}

export default connect(mapStateState, mapDispatchToProps)(Home);
