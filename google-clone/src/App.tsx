import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
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
