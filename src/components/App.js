import React from "react";
import { Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";
function App() {
  return (
    <Route>
      <Route path="/" exact component={Home}></Route>
      <Route path="/:id" component={Detail}></Route>
    </Route>
  );
}

export default App;
