import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Dailyjob from "../components/Dailyjob";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div style={{ width: "100%", display: "flex" }}>
        <Sidebar />
        <Dailyjob />
      </div>
    </>
  );
};

export default MainPage;
