import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import PlannerFormTheFeed from "./PlannerForm/main.js";
import { Routes, Route } from "react-router-dom";
import { ResultsPage } from "./ResultsPage.jsx";
import "./PlannerForm/style.css";

export const App = () => {
  return (
    <>
      <Header />
      <div
        style={{
          flexDirection: "column",
          flexGrow: 1,
          display: "flex",
          height: `calc(100vh - 120px)`,
        }}
      >
        <PlannerFormTheFeed />
      </div>
      <Footer />
    </>
  );
};
