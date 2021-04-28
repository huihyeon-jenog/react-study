import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState("");
  const [setting, setSetting] = useState(false);
  const toggle = () => {
    setSetting(!setting);
  };
  return (
    <AppContext.Provider value={{ state, setState, toggle, setting }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
