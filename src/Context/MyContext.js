import React, { createContext, useState } from "react";

const MyContext = createContext();

export default MyContext;

export function ContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const setLightTheme = () => {
    setTheme("light");
  };

  const setDarkTheme = () => {
    setTheme("dark");
  };

  return (
    <MyContext.Provider value={{ theme, setLightTheme, setDarkTheme }}>
      {children}
    </MyContext.Provider>
  );
}
