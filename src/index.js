import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const tokenEl = document.getElementById("x-curatio-token");
const tokenVal = tokenEl.dataset['token'];

const App = () => {
  return (
    <div>
      <h1>
        Token: {tokenVal}
      </h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
