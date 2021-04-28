import React from "react";
import Sidebar from "../components/Sidebar";
import Setting from "../components/Setting";
import Preference from "../components/Preference";
import { Helmet } from "react-helmet-async";
import { useGlobalContext } from "../context";

const Preferences = () => {
  const { state, setting } = useGlobalContext();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{state}</title>
      </Helmet>
      <div style={{ width: "100%", display: "flex", height: "950px" }}>
        <Sidebar />
        {setting ? <Setting /> : <Preference />}
      </div>
    </>
  );
};

export default Preferences;
