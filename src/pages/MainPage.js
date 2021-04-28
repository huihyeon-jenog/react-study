import React from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import { Helmet } from "react-helmet-async";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Amaranth10</title>
      </Helmet>
      <div style={{ width: "100%", display: "flex", height: "950px" }}>
        <Sidebar />
        <Main />
      </div>
    </>
  );
};

export default MainPage;
