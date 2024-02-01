import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import "./planner-modal/style.css";
import PlannerModal from "./planner-modal/main.js";
import ResultsPage from "./ResultsPage.jsx";
import Linnworks from "./Linnworks.jsx";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/planner/" element={<PlannerModal />} />
        <Route path="/planner/results/" element={<ResultsPage />} />
        <Route path="/linnworks/" element={<Linnworks />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
