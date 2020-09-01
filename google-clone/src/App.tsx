import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>The is the search page</h1>
          </Route>
          <Route path="/">
            <Home />
            {/* Home Page */}
          </Route>
          {/* {Search page -> Where the results are shown} */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
