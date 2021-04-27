import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <div style={{ width: "100%", display: "flex" }}>
        <Sidebar />
        <Main />
      </div>
    </>
  );
};

export default MainPage;
