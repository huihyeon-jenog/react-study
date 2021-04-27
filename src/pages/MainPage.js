import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

const MainPage = () => {
  return (
    <>
      <Header />
      <div style={{ width: "100%", display: "flex", height: "950px" }}>
        <Sidebar />
        <Main />
      </div>
    </>
  );
};

export default MainPage;
