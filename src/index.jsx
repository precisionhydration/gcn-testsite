import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

import { App } from "./App.jsx";

const rootNode = document.getElementById("root");
const root = createRoot(rootNode);
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
