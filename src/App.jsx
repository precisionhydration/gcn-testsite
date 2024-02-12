import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import PlannerFormTheFeed from "./PlannerForm/main.js";
import "./PlannerForm/style.css";

export const App = () => {
  return (
    <>
      <Header />
      <div className="gcn-planner-wrapper">
        <PlannerFormTheFeed />
      </div>
      <Footer />
    </>
  );
};
