import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./tailwind.output.css";
import "./global.css";
import App from "./App";
import { FirebaseProvider } from "./contexts/FirebaseContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
