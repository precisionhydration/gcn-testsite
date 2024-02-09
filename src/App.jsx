import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import PlannerFormTheFeed from "./PlannerForm/main.js";
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
          height: `calc(100vh - 56px)`,
        }}
      >
        <PlannerFormTheFeed />
      </div>
      <Footer />
    </>
  );
};
