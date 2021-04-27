import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Setting from "../components/Setting";
import Preference from "../components/Preference";

const MainPage = (props) => {
  const [setting, setSetting] = useState(false);
  const [preference, setPerference] = useState("");
  const toggle = () => {
    setSetting(!setting);
  };
  const getUrl = () => {
    if (props.match.url === "/fulltimepreference") {
      setPerference("정규직");
    } else if (props.match.url === "/dailyjobpreference") {
      setPerference("일용직");
    } else if (props.match.url === "/executivespreference") {
      setPerference("임원");
    } else if (props.match.url === "/freelancerpreference") {
      setPerference("프리랜서");
    }
  };
  useEffect(() => {
    getUrl();
  }, []);
  return (
    <>
      <Header />
      <div style={{ width: "100%", display: "flex", height: "950px" }}>
        <Sidebar />
        {setting ? (
          <Setting preference={preference} toggle={toggle} />
        ) : (
          <Preference preference={preference} toggle={toggle} />
        )}
      </div>
    </>
  );
};

export default MainPage;
