import { useContext } from "react";

import MyContext from "./Context/MyContext";

import "./App.css";
import ChildComponent from "./ChildComponent";

function App() {
  const { theme, setLightTheme, setDarkTheme } = useContext(MyContext);

  const styles = {
    textAlign: "right",
  };

  return (
    <>
      <h2 style={styles}>Theme Selected: {theme}</h2>
      <ChildComponent />
      <button onClick={setLightTheme} disabled={theme === "light"}>
        Light Theme
      </button>
      <button onClick={setDarkTheme} disabled={theme === "dark"}>
        Dark Theme
      </button>
    </>
  );
}

export default App;
