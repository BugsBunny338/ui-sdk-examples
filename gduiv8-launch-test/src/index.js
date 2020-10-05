import React from "react";
import ReactDOM from "react-dom";
import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";
import backend from "./backend";

import "@gooddata/sdk-ui-charts/styles/css/main.css";
import "@gooddata/sdk-ui-pivot/styles/css/main.css";
import "@gooddata/sdk-ui-filters/styles/css/main.css";
import "./styles.css";

import App from "./Snippet01";
//import App from "./Snippet02";
//import App from "./Snippet03";
//import App from "./Snippet04";
//import App from "./Snippet05";
//import App from "./Snippet06";
//import App from "./Snippet07";
//import App from "./Snippet08";
//import App from "./Snippet09";
//import App from "./Snippet10";
//import App from "./Snippet11";
//import App from "./Snippet12";

console.log(backend);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BackendProvider backend={backend}>
    <WorkspaceProvider workspace="psk46untnn2vhzs5bokdav3bu2puf6s6">
      <div className="App">
        <App />
      </div>
    </WorkspaceProvider>
  </BackendProvider>,
  rootElement
);
