import React from "react";
import "./Button.css";

function NumberButton(props) {
  return (
    <section className={`number-button ${props.class}`}>{props.text}</section>
  );
}

export default NumberButton;
