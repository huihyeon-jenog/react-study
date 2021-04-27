import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Executives from "../components/Executives";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div style={{ width: "100%", display: "flex" }}>
        <Sidebar />
        <Executives />
      </div>
    </>
  );
};

export default MainPage;
