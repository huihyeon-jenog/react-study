import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Freelancer from "../components/Freelancer";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div style={{ width: "100%", display: "flex" }}>
        <Sidebar />
        <Freelancer />
      </div>
    </>
  );
};

export default MainPage;
