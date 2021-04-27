import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FullTime from "../components/FullTime";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div style={{ width: "100%", display: "flex" }}>
        <Sidebar />
        <FullTime />
      </div>
    </>
  );
};

export default MainPage;
