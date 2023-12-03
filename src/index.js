// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import HomePage from "./HomePage";
import HistoryPage from "./HistoryPage";
import WordDetailsPage from "./WordDetailsPage";
import "./index.css"; // Import the styles

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <header>
        <h1>Word Search App</h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/history">History</a>
          </li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/history" component={HistoryPage} />
          <Route path="/word/:word" component={WordDetailsPage} />
        </Switch>
      </main>
    </Router>
  </Provider>,
  document.getElementById("root")
);
