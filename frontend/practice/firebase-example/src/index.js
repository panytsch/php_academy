import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./firebase";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EditFormPage from "./EditFormPage";

const Main = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/:id" component={EditFormPage} />
    </div>
  </Router>
);

ReactDOM.render(<Main />, document.getElementById("root"));
registerServiceWorker();
