import React from "react";
import { render } from "react-dom";
import { Root } from "./components/root";
import "./setup";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

render(<Root />, document.getElementById("root"));
