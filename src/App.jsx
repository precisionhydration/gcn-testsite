import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import PlannerFormTheFeed from "./PlannerFormTheFeed/main.js";
import { Routes, Route } from "react-router-dom";
import { ResultsPage } from "./ResultsPage.jsx";
import "./PlannerFormTheFeed/style.css";

export const App = () => {
  return (
    <>
      <Header />
      <div
        style={{
          flexDirection: "column",
          flexGrow: 1,
          display: "flex",
          height: `calc(100vh - 60px)`,
          maxHeight: `-webkit-fill-available`,
        }}
      >
        <PlannerFormTheFeed />
      </div>
      <Footer />
    </>
  );
};
