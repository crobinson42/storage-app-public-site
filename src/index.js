import React from "react";
import ReactDOM from "react-dom";
import { HomepageLayout } from "./HomepageLayout";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
// import the semantic-ui css for the project
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <React.StrictMode>
    <HomepageLayout />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
