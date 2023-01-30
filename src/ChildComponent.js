import React, { useContext } from "react";
import MyContext from "./Context/MyContext";

const ChildComponent = () => {
  const { theme } = useContext(MyContext);

  const styles = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
    padding: "30px",
  };

  return <h1 style={styles}>I am Child Component</h1>;
};

export default ChildComponent;
