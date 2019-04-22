import React from "react";
import "./Button.css";

function NumberButton(props) {
  return (
    //<button className={props.buttonStyle}>{props.text}</button>
    <div className={`number-button ${props.class}`}>{props.name}</div>
  );
}

export default NumberButton;
