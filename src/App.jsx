import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import PlannerFormTheFeed from "./PlannerFormTheFeed/main.js";
import { Routes, Route } from "react-router-dom";
import { ResultsPage } from "./ResultsPage.jsx";
import "./PlannerFormTheFeed/style.css";

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<PlannerFormTheFeed />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
      <Footer />
    </div>
  );
};
